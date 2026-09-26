# Scene Korea

외국인 팬이 한국 드라마·한국 영화·해외 영화에 등장한 한국 촬영지의 스토리를 고르고 촬영지를 순서대로 방문하는 영어 여행 서비스다. Next.js App Router로 만들었으며 Vercel에 배포한다.

## 실행

Node.js 22를 사용한다.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

검사는 `npm run build`와 `npm run check`로 실행한다. GitHub Actions도 같은 검사를 실행한다. HTTP SEO 검사는 서버를 실행한 뒤 별도로 수행한다.

```sh
npm run check:seo -- --base-url http://localhost:3104 --canonical-origin https://www.scene-trip.com
```

`--base-url`은 실제 검사할 서버이고 `--canonical-origin`은 페이지에 표시되어야 하는 정식 도메인이다. 검사할 페이지는 사이트맵에서 읽으며 최대 4개 요청을 동시에 보낸다.

## 화면과 콘텐츠

- 한 작품의 장면을 가까운 촬영지끼리 묶어 하루 안에 방문할 수 있는 로케이션 투어와 방문 순서를 제공한다. 한 작품에 여러 투어가 있을 수 있다. 지역 필터는 없다.
- 영어·한국어 작품명과 스토리·장면·장소를 조합해 검색한다. 한국 영화·드라마와 시리즈·해외 영화 분류와 소요 시간 필터를 함께 쓸 수 있다.
- 검색어·작품 유형·소요 시간은 URL에 남는다. 상세 페이지에서 뒤로 가거나 목록 링크로 돌아와도 같은 필터가 적용되며 새로고침·링크 공유도 지원한다.
- 상세 페이지는 스크롤 애니메이션 없이 열린다. 브라우저 뒤로가기는 이전 위치를 복원하며, `All stories`도 같은 탭에서 필터별로 보던 위치를 복원한다. 저장한 위치가 없으면 목록 시작점으로 이동한다.
- 북마크로 저장한 코스를 `/saved`에서 모아본다. 같은 브라우저에서 새로고침과 재방문 후에도 유지되며 저장 취소도 가능하다.
- 장소마다 주요 장면, 확인된 회차, 방문 팁, Google Maps와 NAVER Map 링크가 있다.
- 실제 드라마 스틸과 촬영지 사진을 구분한다. 사진이 없는 코스에는 방문 순서를 표시한 표지를 쓴다.
- 작품 추가와 장면 추가 요청을 받는다. 코스에서 요청하면 작품명이 채워진다.

`src/domains/drama/data/routes.json`에서 콘텐츠를 관리한다. 장면과 회차는 출처를 확인한 뒤 추가한다. 이동 시간은 현지 일정의 추정치이며 첫 장소까지 가는 시간은 별도다.

2026-09-25 운영 카탈로그는 70작품·100투어·181정거장이다. 기존 작품에 20투어·25정거장을 추가했고, 여러 투어가 있는 21작품에는 비교 가이드를 연결했다. 통합 빌드·로컬 및 운영 SEO 검사를 통과했다. Google은 사이트맵의 125개 페이지를 정상으로 읽었다. 검증과 등록 결과는 [SEO 작업 기록](docs/seo-2026-09-25.md)에 따로 남긴다.

현재 100투어 모두 사진이 있다. 용답교 코스는 동선에 포함된 인근 하천 사진을 `Nearby walk`로 구분하고, 나머지는 촬영지 사진 또는 작품 스틸로 표시한다. 이미지 출처와 표시된 권리자는 각 코스에 기록했다. 보강한 사진 90개의 원본 URL, 장소 일치 근거, 확인한 이용 조건은 `docs/image-sources.json`에 있다. 라이선스가 명시된 사진은 상세 화면에 라이선스 링크와 변환 내역도 표시한다. 나머지 이미지의 상업적 재사용 허가를 확보했다는 뜻은 아니다. 광고를 켜기 전에 직접 촬영한 사진이나 허가받은 자료로 교체하거나 이용 조건을 확인한다.

## 이미지 저장

사진 102개는 [Vercel Blob의 scene-trip-images 저장소](https://vercel.com/hyuntae-eoms-projects/~/stores/blob/store_D9Cx37rhzRr61ySO)에 둔다. 저장소는 `scene-korea`의 Production·Preview·Development에 연결되어 있다. 화면에는 Next.js Image가 크기를 조절한 사진을 보낸다.

`src/domains/drama/data/image-assets.json`이 이미지 ID와 공개 Blob URL을 연결한다. 파일 내용의 SHA-256 일부를 주소에 넣어 사진을 교체할 때 새 주소를 만든다. 이전 Blob 파일을 덮어쓰거나 지우지 않는다. 예전 `/images/<id>.webp` 주소는 Vercel이 Blob 사진을 대신 전달한다. 방문자가 열어 둔 예전 페이지의 이미지 크기 조절 요청도 계속 동작하도록 리디렉션 대신 rewrite를 쓴다.

새 사진은 이미지 ID를 파일명으로 쓴 WebP 파일로 준비한다. 아래 명령은 입력 폴더의 사진만 추가하거나 갱신하며 기존 목록을 보존한다. 각 업로드의 응답·파일 크기·SHA-256·가로와 세로 길이를 확인한 뒤 목록에 기록한다. 중간에 실패하면 같은 명령으로 이어갈 수 있다.

```sh
npm exec --yes --package=vercel -- vercel env pull .env.local --environment=development --scope hyuntae-eoms-projects
npm run images:upload -- --from /absolute/path/to/webp-files
npm run images:verify
```

환경변수를 가져오는 명령은 `.env.local`을 갱신한다. 업로드 인증값은 이 파일에만 두고 Git에 넣지 않는다. 사진을 보는 브라우저에는 공개 URL만 전달한다. 사이트 빌드와 공개 이미지 검사는 업로드 인증값 없이 실행할 수 있다.

사진 설명·출처·라이선스는 `routes.json`에서 관리한다. `docs/image-sources.json`의 `file`은 이전 Git 파일 경로이고 `storageUrl`은 현재 Blob 주소다. 사진 추가·교체 후에는 이미지 목록과 출처를 커밋하고 배포해야 화면에 반영된다. 이미지 파일 자체는 Git에 추가하지 않는다.

## Slack 피드백

수신 채널은 [dev-flick-pg의 지정 채널](https://dev-flick-pg.slack.com/archives/C0C4Y776Z3J)이다. 채널 주소만으로 메시지를 보낼 수 없으므로 이 채널에 연결한 Slack Incoming Webhook을 만든다.

1. Slack 앱에서 Incoming Webhooks를 켜고 채널 `C0C4Y776Z3J`를 선택한다.
2. 발급된 URL을 Vercel의 서버 환경변수 `SLACK_FEEDBACK_WEBHOOK_URL`에 저장한다. Git이나 클라이언트 코드에 넣지 않는다.
3. Vercel BotID Basic이 `/api/feedback`의 브라우저 요청을 검사한다. 별도 키와 유료 Deep Analysis는 사용하지 않는다. Turnstile은 두 키를 추가했을 때만 함께 검사한다.
4. 재배포 후 요청 하나를 보내 지정 채널에서 수신을 확인한다.

별도 데이터베이스는 없다. 요청은 Slack에 저장되고 이메일은 선택 입력이다. 서버가 Slack의 성공 응답을 확인한 뒤에만 접수 완료를 표시한다. 연결값이 없으면 폼을 닫으며 실제로 보내지 않는다.

운영 요청은 서버에서 BotID 검증을 통과해야 Slack에 전달된다. 검증 오류와 봇 판정은 전송을 차단한다. 본문 크기, 입력 길이, 출처, 링크 형식도 검사한다. 이용자 입력은 Slack의 plain_text로 보내 멘션이 실행되지 않게 한다.

참고: [Slack Incoming Webhooks](https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/), [Turnstile 서버 검증](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)

## AdSense

승인 전에는 `NEXT_PUBLIC_ADSENSE_ENABLED=false`를 유지한다. 값이 없으면 광고 스크립트와 빈 광고 칸이 나타나지 않는다.

1. `NEXT_PUBLIC_ADSENSE_CLIENT_ID`에 본인 계정의 `ca-pub-` 식별자를 설정한다. 이 값으로 계정 확인 메타 태그와 `/ads.txt`가 생성된다.
2. AdSense에 실제 도메인을 등록하고 사이트 검토를 받는다.
3. 해외 이용자에게 필요한 동의 메시지를 AdSense의 Privacy & messaging에서 설정한다. EEA·영국·스위스 대상 광고에는 Google이 인증한 동의 관리 설정을 사용한다.
4. 승인된 광고 단위의 `NEXT_PUBLIC_ADSENSE_SLOT_ID`를 설정하고 광고를 켠다.

이 프로젝트는 AdSense 계정 생성이나 사이트 승인을 대신하지 않는다. 광고 수익과 노출은 검증되지 않았다. 2026년 9월 24일 사이트 소유권 확인과 심사 신청을 마쳤다. Google 심사는 진행 중이다.

참고: [AdSense 사이트 연결](https://support.google.com/adsense/answer/7584263?hl=en), [동의 관리 요구사항](https://support.google.com/adsense/answer/13554116?hl=en)

## SEO와 검색 등록

정식 도메인은 [www.scene-trip.com](https://www.scene-trip.com)이다. 작업 시작 당시 이 도메인의 canonical과 사이트맵은 이전 Vercel 주소를 가리켰다. Vercel의 Production·Preview·Development 환경변수를 정식 도메인으로 바꿨으며, 운영 공개 페이지 125개의 canonical·사이트맵·응답을 검증했다.

투어마다 작품명·지역·장면을 반영한 고유 검색 제목과 설명을 작성한다. canonical·Open Graph·Twitter 주소는 정식 도메인을 사용한다. 개인 저장 목록과 요청 폼에는 noindex를 지정한다.

`/filming-locations`는 70개 작품의 탐색 목록이다. `/filming-locations/[slug]`의 21개 작품 가이드는 여러 투어의 장면·지역·이동 방법을 비교하며 개별 `/stories/[slug]`로 연결한다. 투어가 하나인 작품은 탐색 목록에서 해당 투어로 바로 연결한다.

구조화 데이터는 Organization, WebSite, CollectionPage, ItemList, BreadcrumbList, TouristTrip을 사용한다. 사이트맵에는 공개 페이지와 콘텐츠 수정일을 넣고 robots.txt에서 정식 사이트맵을 가리킨다. Google 색인·검색 결과 표시·순위는 이 코드 검사와 별도로 확인한다.

`GOOGLE_SITE_VERIFICATION`과 `BING_SITE_VERIFICATION`은 선택 값이다. 검색 서비스가 발급한 메타 태그의 `content` 값만 설정하고 재배포한다. 소유권 확인과 사이트맵 제출 결과는 [SEO 작업 기록](docs/seo-2026-09-25.md)에 남긴다.

전체 촬영지 자료 대신 카드·검색에 필요한 데이터만 브라우저에 전달한다. 저장 기능에는 코스 ID 목록만 전달하며, 폰트는 `next/font`가 준비한 파일을 사이트에서 제공한다. 이전 80투어 기준 데이터 크기와 실제 운영 검증 결과는 SEO 작업 기록에 구분했다.

## 방문 통계

Vercel Web Analytics를 운영 배포에서만 실행한다. 방문자·페이지 조회·유입 사이트·국가·기기·브라우저 통계는 [프로젝트 Analytics](https://vercel.com/hyuntae-eoms-projects/scene-korea/analytics?environment=production)에서 확인한다. 개발과 Preview에는 수집 컴포넌트를 넣지 않는다.

`SiteAnalytics`는 `@vercel/analytics/next`의 경로 전환 추적을 사용한다. 페이지 URL의 검색 파라미터와 해시는 전송 전에 제거한다. 따라서 제목 검색과 목록 필터는 수집한 페이지 URL에 남지 않는다. 별도 유입 사이트 정보는 Vercel의 기본 수집 정책을 따른다.

기본 페이지 조회만 수집하며 저장 버튼·지도 클릭·요청 제출의 custom event는 추가하지 않았다. 요청 폼 내용과 저장 목록도 전송하지 않는다. SDK를 변경하면 운영 배포 후 실제 페이지 방문과 수집 응답을 다시 확인한다.

## GitHub와 Vercel

저장소는 `eomttt/scene-korea`다. Vercel 프로젝트 `scene-korea`에 연결되어 있다. 이전 주소 [scene-korea-mauve.vercel.app](https://scene-korea-mauve.vercel.app)은 정식 도메인으로 이동하도록 관리한다.

GitHub 저장소를 Vercel에 연결하면 main 브랜치는 운영 배포, 다른 브랜치와 PR은 검토용 배포로 관리할 수 있다. `NEXT_PUBLIC_SITE_URL`은 확정된 운영 도메인으로 설정한다. 공개 환경변수를 바꾸면 다시 빌드해야 한다.

환경변수 목록은 `.env.example`에 있다. `.env.local`, `.vercel`, `node_modules`는 Git에 포함하지 않는다. Slack webhook과 Turnstile secret은 서버에서만 읽는다.

## 구조

Next.js 규칙에 따라 URL과 페이지 조합은 루트 `app/`에 둔다. 도메인 컴포넌트와 데이터는 `src/domains/`, 공통 UI는 `src/common/`에 둔다. `src/pages`는 Pages Router와 혼동되므로 만들지 않는다.

[콘텐츠 조사 방법](docs/content-research-workflow.md)에 따라 영미권·중화권·일본권·유럽 커뮤니티에서 작품을 찾는다. 한국 블로그·관광 자료·외국 블로그에서 촬영지를 조사한 뒤 가까운 장면을 하루 코스로 묶는다.

[2026-09-25 조사 결과](docs/research-2026-09-25.md)에 새 작품 후보 11개와 장면별 코스안을 정리했다. 그중 9개 작품과 기존 《도깨비》의 새 이야기를 [10개 투어로 추가했다](docs/published-tours-2026-09-25.md).

이어 기존 작품의 다른 장소·장면으로 20개 투어를 추가했다. [추가 장면 조사 기록](docs/research-2026-09-25-additional-scenes.md)에 한국·해외 블로그와 관광 자료, 장면별 확인 범위와 방문 제한을 정리했다.

`docs/research.md`는 초기 수요 조사 기록이다. 해외 팬 조사와 추가한 20개 코스의 근거는 `docs/overseas-fan-research.md`에 있다. 장면 출처는 내부 데이터에 보존하며 화면의 Scene reference 링크는 제거했다. 화면의 장소와 방문 순서는 이후 수정된 `routes.json`을 기준으로 한다.
