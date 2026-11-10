"""Copy client photos into src/assets with EXIF (incl. GPS) stripped and the long side capped.

Run: python -I tools/process-images.py
Source originals stay in _client/ (git-ignored).
"""
import os
from PIL import Image, ImageOps

MAX = 1800
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
]

for src, slug, name in PICKS:
    out_dir = os.path.join("src", "assets", "cases", slug)
    os.makedirs(out_dir, exist_ok=True)
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im).convert("RGB")
        im.thumbnail((MAX, MAX))
        out = os.path.join(out_dir, name + ".jpg")
        im.save(out, "JPEG", quality=84, optimize=True)  # no exif= argument -> metadata dropped
        print(out, im.size)
