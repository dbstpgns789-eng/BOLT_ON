# 정적 사이트(Astro + Cloudflare Pages), 관리자 화면 없음

로그인·결제·게시판이 필요 없고, 오픈 후 새 시공사례는 제작자가 유지보수로 추가하기로 했으므로 CMS 없이 Astro 정적 사이트로 만들고 Cloudflare Pages에 배포한다. Cloudflare Pages는 무료이면서 상업적 사용이 허용되어 운영비가 도메인 비용뿐이다(Vercel 무료 요금제는 상업적 사용 금지). 시공사례는 `src/content/cases/`의 파일로 관리한다.

## Consequences

클라이언트는 사이트를 직접 고칠 수 없다. 클라이언트가 직접 올리기를 원하게 되면 Git 기반 CMS를 나중에 덧붙인다.
