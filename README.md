# Scene Korea

외국인 K-drama 팬이 작품을 고르고 촬영지를 순서대로 방문하는 영어 여행 서비스다. Next.js App Router로 만들었으며 Vercel에 배포한다.

## 실행

Node.js 22를 사용한다.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

검사는 `npm run build`와 `npm run check`로 실행한다. GitHub Actions도 같은 검사를 실행한다.

## 화면과 콘텐츠

- 작품 10개의 코스와 방문 순서를 제공한다. 지역 필터는 없다.
- 영어·한국어 제목 검색은 브라우저 안에서 실행한다.
- 북마크로 저장한 코스를 `/saved`에서 모아본다. 같은 브라우저에서 새로고침과 재방문 후에도 유지되며 저장 취소도 가능하다.
- 장소마다 주요 장면, 확인된 회차, 방문 팁, 출처, Google Maps와 NAVER Map 링크가 있다.
- 실제 드라마 스틸과 촬영지 사진을 구분한다.
- 작품 추가와 장면 추가 요청을 받는다. 코스에서 요청하면 작품명이 채워진다.

`src/domains/drama/data/routes.json`에서 콘텐츠를 관리한다. 장면과 회차는 출처를 확인한 뒤 추가한다. 이동 시간은 현지 일정의 추정치이며 첫 장소까지 가는 시간은 별도다.

이미지 출처와 표시된 권리자는 각 코스에 기록했다. 현재 이미지의 상업적 재사용 허가를 확보했다는 뜻은 아니다. 광고를 켜기 전에 직접 촬영한 사진이나 허가받은 자료로 교체하거나 이용 조건을 확인한다.

## Slack 피드백

수신 채널은 [dev-flick-pg의 지정 채널](https://dev-flick-pg.slack.com/archives/C0C4Y776Z3J)이다. 채널 주소만으로 메시지를 보낼 수 없으므로 이 채널에 연결한 Slack Incoming Webhook을 만든다.

1. Slack 앱에서 Incoming Webhooks를 켜고 채널 `C0C4Y776Z3J`를 선택한다.
2. 발급된 URL을 Vercel의 서버 환경변수 `SLACK_FEEDBACK_WEBHOOK_URL`에 저장한다. Git이나 클라이언트 코드에 넣지 않는다.
3. Cloudflare Turnstile에 실제 배포 도메인을 등록한다. `NEXT_PUBLIC_TURNSTILE_SITE_KEY`와 `TURNSTILE_SECRET_KEY`를 설정한다.
4. 재배포 후 요청 하나를 보내 지정 채널에서 수신을 확인한다.

별도 데이터베이스는 없다. 요청은 Slack에 저장되고 이메일은 선택 입력이다. 서버가 Slack의 성공 응답을 확인한 뒤에만 접수 완료를 표시한다. 연결값이 없으면 폼을 닫으며 실제로 보내지 않는다.

운영 빌드에서는 Turnstile을 필수로 확인한다. 본문 크기, 입력 길이, 출처, 링크 형식도 검사한다. 이용자 입력은 Slack의 plain_text로 보내 멘션이 실행되지 않게 한다.

참고: [Slack Incoming Webhooks](https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/), [Turnstile 서버 검증](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)

## AdSense

승인 전에는 `NEXT_PUBLIC_ADSENSE_ENABLED=false`를 유지한다. 값이 없으면 광고 스크립트와 빈 광고 칸이 나타나지 않는다.

1. `NEXT_PUBLIC_ADSENSE_CLIENT_ID`에 본인 계정의 `ca-pub-` 식별자를 설정한다. 이 값으로 계정 확인 메타 태그와 `/ads.txt`가 생성된다.
2. AdSense에 실제 도메인을 등록하고 사이트 검토를 받는다.
3. 해외 이용자에게 필요한 동의 메시지를 AdSense의 Privacy & messaging에서 설정한다. EEA·영국·스위스 대상 광고에는 Google이 인증한 동의 관리 설정을 사용한다.
4. 승인된 광고 단위의 `NEXT_PUBLIC_ADSENSE_SLOT_ID`를 설정하고 광고를 켠다.

이 프로젝트는 AdSense 계정 생성이나 사이트 승인을 대신하지 않는다. 광고 수익과 노출은 검증되지 않았다.

참고: [AdSense 사이트 연결](https://support.google.com/adsense/answer/7584263?hl=en), [동의 관리 요구사항](https://support.google.com/adsense/answer/13554116?hl=en)

## GitHub와 Vercel

SEO는 서버에서 렌더링한 작품별 제목·설명, canonical URL, Open Graph·Twitter 이미지, 사이트맵, robots.txt와 JSON-LD를 포함한다. 구조화 데이터는 WebSite, ItemList, BreadcrumbList, TouristTrip을 사용한다. 개인 저장 목록과 요청 폼에는 noindex를 지정한다. Google 색인과 검색 순위는 별도로 확인해야 한다.

저장소 후보는 `eomttt/scene-korea`다. 소스 업로드는 사용자 확인 후 진행한다. Vercel 프로젝트 이름도 `scene-korea`를 사용한다.

GitHub 저장소를 Vercel에 연결하면 main 브랜치는 운영 배포, 다른 브랜치와 PR은 검토용 배포로 관리할 수 있다. `NEXT_PUBLIC_SITE_URL`은 확정된 운영 도메인으로 설정한다. 공개 환경변수를 바꾸면 다시 빌드해야 한다.

환경변수 목록은 `.env.example`에 있다. `.env.local`, `.vercel`, `node_modules`는 Git에 포함하지 않는다. Slack webhook과 Turnstile secret은 서버에서만 읽는다.

## 구조

Next.js 규칙에 따라 URL과 페이지 조합은 루트 `app/`에 둔다. 도메인 컴포넌트와 데이터는 `src/domains/`, 공통 UI는 `src/common/`에 둔다. `src/pages`는 Pages Router와 혼동되므로 만들지 않는다.

`docs/research.md`는 초기 수요 조사 기록이다. 화면의 장소와 방문 순서는 이후 수정된 `routes.json`을 기준으로 한다.
