"""Copy client photos into src/assets with EXIF (incl. GPS) stripped and the long side capped.

Run: python -I tools/process-images.py
Source originals stay in _client/ (git-ignored).
"""
import os
from PIL import Image, ImageOps

MAX = 2400
# (source file, case slug, output name)
PICKS = [
    ("_client/김해미술관/김해 미술관.jpg", "gimhae-museum", "01-facade"),
    ("_client/김해미술관/KakaoTalk_20261109_205458620.jpg", "gimhae-museum", "02-entrance"),
    ("_client/김해미술관/KakaoTalk_20261109_210528083_02.jpg", "gimhae-museum", "03-kids-room"),
    ("_client/김해미술관/KakaoTalk_20261109_210557685_02.jpg", "gimhae-museum", "04-corridor-lighting"),
    ("_client/김해미술관/KakaoTalk_20261109_210541251_10.jpg", "gimhae-museum", "05-corridor-work"),
    ("_client/김해미술관/KakaoTalk_20261109_210528083_01.jpg", "gimhae-museum", "06-lobby-work"),
    ("_client/2차/서대문형무소/5.jpg", "seodaemun-prison", "01-led-ceiling"),
    ("_client/2차/서대문형무소/9.jpg", "seodaemun-prison", "02-led-hall"),
    ("_client/2차/서대문형무소/7.jpg", "seodaemun-prison", "03-sculpture-light"),
    ("_client/2차/서대문형무소/6.jpg", "seodaemun-prison", "04-exhibit-screens"),
    ("_client/2차/서대문형무소/8.jpg", "seodaemun-prison", "05-exhibit-room"),
    ("_client/2차/서대문형무소/4.jpg", "seodaemun-prison", "06-panel-work"),
    ("_client/2차/서대문형무소/1.jpg", "seodaemun-prison", "07-cabling-work"),
    ("_client/하나임푸드/KakaoTalk_20261109_205720285.jpg", "cheongju-substation", "01-substation"),
    ("_client/하나임푸드/KakaoTalk_20261109_205726207.jpg", "cheongju-substation", "02-foundation-pour"),
    ("_client/하나임푸드/KakaoTalk_20261109_205724906.jpg", "cheongju-substation", "03-foundation"),
    ("_client/하나임푸드/KakaoTalk_20261109_205725478.jpg", "cheongju-substation", "04-foundation-finish"),
    ("_client/하나임푸드/KakaoTalk_20261109_205721697.jpg", "cheongju-substation", "05-wiring"),
    ("_client/2차/신동아유치원/증설 전.jpg", "dongdaemun-kindergarten", "01-before"),
    ("_client/2차/신동아유치원/증설 전2.jpg", "dongdaemun-kindergarten", "02-before"),
    ("_client/2차/신동아유치원/증설 후.jpg", "dongdaemun-kindergarten", "03-after"),
    ("_client/2차/신동아유치원/증설 후2.jpg", "dongdaemun-kindergarten", "04-after"),
    ("_client/4차/방배동 레드포스/증설 완료 후분전반.jpg", "bangbae-pcroom", "01-panel"),
    ("_client/4차/방배동 레드포스/증설관로 설치 (1).jpg", "bangbae-pcroom", "02-dig"),
    ("_client/4차/방배동 레드포스/증설관로 설치 (2).jpg", "bangbae-pcroom", "03-conduit"),
    ("_client/4차/방배동 레드포스/증설관로 설치 (3).jpg", "bangbae-pcroom", "04-handhole"),
    ("_client/4차/방배동 레드포스/증설관로 설치 (4).jpg", "bangbae-pcroom", "05-pull-line"),
    ("_client/4차/방배동 레드포스/증설관로 설치 (6).jpg", "bangbae-pcroom", "06-seal"),
    ("_client/4차/광진구 상가건물 리모델링 전/KakaoTalk_20261110_234249881.jpg", "gwangjin-shops", "01-before"),
    ("_client/4차/광진구 상가건물 리모델링 후/KakaoTalk_20261110_234039599_07.jpg", "gwangjin-shops", "02-after"),
    ("_client/4차/광진구 상가건물 리모델링 전/KakaoTalk_20261110_233851303_09.jpg", "gwangjin-shops", "03-before"),
    ("_client/4차/광진구 상가건물 리모델링 후/KakaoTalk_20261110_234039599_02.jpg", "gwangjin-shops", "04-after"),
]

# Licensed stock (Unsplash License, free commercial use). Sources: docs/photo-credits.md
STOCK = [
    ("_client/3차/stock/unsplash-VuR4oHZ3ucc.jpg", "stock", "substation-transformer"),
    ("_client/3차/stock/unsplash-dR3Fb6dBEc0.jpg", "stock", "transformer-insulators"),
    ("_client/3차/stock/markus-spiske-kK7uPfb2YWU-unsplash.jpg", "stock", "distribution-panel"),
    ("_client/3차/stock/olek-buzunov-nwgp-Rijilk-unsplash.jpg", "stock", "remodeling-studs"),
    ("_client/3차/stock/unsplash-cd8iI6VCZow.jpg", "stock", "road-arrow"),
    ("_client/3차/stock/unsplash-yETqkLnhsUI.jpg", "stock", "power-towers-sunset"),
    ("_client/3차/stock/unsplash-gyrKtgqMChY.jpg", "stock", "site-review-tablet"),
    ("_client/3차/stock/unsplash-PkHf7BUWbtk.jpg", "stock", "panel-testing"),
    ("_client/3차/stock/unsplash-VoI2jd75M6Q.jpg", "stock", "tower-cranes"),
    ("_client/3차/stock/unsplash-91AQt9p4Mo8.jpg", "stock", "apartment-construction"),
    ("_client/4차/stock/unsplash-0GbrjL3vZF4.jpg", "stock", "solar-factory-roof"),
    ("_client/4차/stock/unsplash-rNn_TU8dvoY.jpg", "stock", "solar-install-work"),
    ("_client/4차/stock/unsplash-JkTjKEVcckg.jpg", "stock", "ev-wall-charger"),
    ("_client/4차/stock/unsplash-mfqj3ZSs_h0.jpg", "stock", "ev-garage-charger"),
]

for src, slug, name in [(s, "cases/" + g, n) for s, g, n in PICKS] + STOCK:
    out_dir = os.path.join("src", "assets", *slug.split("/"))
    os.makedirs(out_dir, exist_ok=True)
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im).convert("RGB")
        im.thumbnail((MAX, MAX))
        out = os.path.join(out_dir, name + ".jpg")
        im.save(out, "JPEG", quality=84, optimize=True)  # no exif= argument -> metadata dropped
        print(out, im.size)
