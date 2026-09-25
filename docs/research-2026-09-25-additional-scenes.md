# 80개에서 100개로 확장한 장면 투어

기존 70개 작품 안에서 다른 장면을 찾아 20코스를 추가했다. 전체 100코스, 181정거장이다. 아래는 장소와 장면을 확인한 근거이며 영업 상태를 실시간으로 보장하지 않는다.

# Scene Korea 추가 드라마 10코스 조사

확인일: 2026-09-25. 추가 데이터는 `src/domains/drama/data/routes.json`에 통합했다.

기존 80개 코스를 읽고 같은 작품의 기존 정거장을 분할하지 않았다. 새 코스는 모두 작품명을 그대로 유지한다. 시간은 현지 방문 계획 추정이며 서울 등 출발 도시에서 오가는 광역 이동 시간은 포함하지 않는다. 영월 코스의 2–3시간에는 영월 시내에서 산을 오르내리는 차량 이동 여유를 포함했다. 현재 영업과 비투숙객 출입을 보장하지 않는다.

| 작품 · 새 코스 ID | 새 장면과 동선 | 기존 코스와 구분 | 근거와 제한 |
| --- | --- | --- | --- |
| Lovely Runner · `lovely-sapgyoho-second-ride` | 삽교호놀이동산 한 곳, 생일 목걸이와 훗날 대관람차 재회. 2–3시간 | 수원 집·다리, 북촌 학교와 다른 장소 | Hey Roseanne 18번 항목의 두 장면과 KTO의 작품 촬영지 설명 일치. 가이드 저자가 삽교호를 직접 방문했다고 쓰지 않음. 회차 미기재 |
| Queen of Tears · `queen-irwol-rooftop-garden` | 일월수목원 전시온실 한 곳. 백화점 옥상정원으로 등장한 대화 장면. 1.5–2.5시간 | 서울 백화점·미술관, 문경과 다름 | KTO가 Queens Department Store 옥상정원이라고 설명. 한국 방문기는 전시온실·7화를 명시. 회차는 최종 JSON에서 생략. 현실의 옥상 시설로 오해하지 않게 안내 |
| Crash Landing on You · `cloy-yeongwol-first-flight` | 영월 별마로천문대 옆 봉래산 활공장 한 곳. 세리의 1화 이륙. 2–3시간 | 기존 충주 재회 코스와 다름 | KTO 가이드북·한국 여행 기사·영문 여행 블로그 일치. 착륙 숲은 제주로 별개. 비행 체험과 천문대 프로그램은 코스에 포함하지 않음 |
| Hometown Cha-Cha-Cha · `hometown-wolpo-first-meeting` | 월포해수욕장 한 곳. 홍반장 서핑과 혜진의 잃어버린 신발. 1–2시간 | 기존 시장·치과·언덕배 코스에 없던 해변 | KTO는 홍반장 서핑을 명시하고 PinoySeoul은 신발·만남을 설명. 해안 주소 표현과 정확한 카메라 위치가 자료마다 달라 공개 월포해변 검색어만 사용. 출입 제한된 다른 해안 구간으로 안내하지 않음 |
| Our Beloved Summer · `summer-onbit-documentary-retreat` | 논산 온빛자연휴양림 한 곳. 7–8화 다큐멘터리 별장 여행. 1–2시간 | 기존 수원 집·성곽 코스와 다름 | KTO·Creatrip·일본 팬 note 일치. 노란 건물은 관리사무소이며 숙박 가능한 펜션이 아님. 숲은 사유지로 방문로 공개 여부 확인 필요 |
| My Love from the Star · `my-love-star-petite-france-kiss` | 가평 쁘띠프랑스 한 곳. 송이를 공중으로 끌어당기는 키스. 1.5–2.5시간 | 기존 서울 학림다방·남산과 다름 | Korea Times 현장 기사에 장면과 타이베이 팬 인터뷰. 영문 개인 여행기 교차확인. 15화는 개인 블로그 한 곳에만 있어 JSON에서 생략. 공식 KTO는 장소·주소 확인 |
| Business Proposal · `business-proposal-jayu-promise` | 인천 자유공원 한 곳. 마지막 청혼. 1–2시간 | 기존 서울 꽃시장·롯데월드와 다름. Goblin도 자유공원에 가지만 작품·장면이 다름 | Tatler와 중영문 팬 블로그가 최종회 청혼을 설명. KTO는 공원 정보 근거이며 사내맞선 장면의 근거로 쓰지 않음. 벚꽃은 계절 한정, 화면과 같은 개화 보장 없음 |
| King the Land · `king-the-land-parnas-lobby` | 제주 중문 파르나스 로비 한 곳. 킹호텔 내부 장면. 1–1.5시간 | 기존 가파도·소노캄 하트나무 날짜 코스와 다름 | KTO 두 자료와 Hey Roseanne이 높은 유리천장 로비 촬영을 명시. 특정 회차·대사 추정 안 함. 비투숙객 출입 사전 문의 필요, 호텔의 허용된 로비·카페 이용 중심 |
| True Beauty · `true-beauty-namhae-seaside-date` | 설리스카이워크 → 상주은모래비치 두 곳. 데이트와 서준의 전화로 끊기는 해변 달리기. 차량 포함 3–4시간 | 기존 서울 북촌 코스와 다름 | KTO가 두 장소와 장면을 함께 설명. 2021년 한국 방문자의 Trip.com 기록도 스카이워크의 촬영지를 언급하지만 당시 정비 상황을 현재 폐쇄로 해석하지 않음. 현재 스윙 운영은 확인 필요 |
| Hotel del Luna · `hotel-del-luna-mokpo-front-door` | 목포근대역사관 1관 외관 한 곳. 호텔 입구. 1–2시간 | 기존 서울 호텔세느·책보고와 다름 | KTO가 호텔 외관을 명시. Trazy는 입구 장면, 한국 방문기는 IU 사진을 든 외국인 방문을 기록. 박물관 실내는 드라마 세트가 아니라 역사 전시. Trazy의 잘못된 남농로 주소를 사용하지 않고 시 관광 페이지의 영산로29번길6 적용 |

## 원문 확인 목록

아래 목록은 실제 본문을 열어 읽은 자료다. 몇몇 VISITKOREA 페이지는 재요청에서 400 응답을 반환했지만 앞선 정상 본문을 바탕으로 기록했다. 새 장면은 검색 결과 요약만으로 확정하지 않았다.

- Lovely Runner: [Hey Roseanne](https://heyroseanne.com/lovely-runner-filming-locations/)의 18번, [KTO 테마파크](https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=219&vcontsId=1589867) 삽교호 절. KTO 사진은 작가 이름이 있으므로 페이지에 보인다는 이유만으로 상업 재사용하지 않는다.
- Queen of Tears: [KTO 주인공 여행](https://english.visitkorea.or.kr/svc/sp/HallyuNew/contentsView.do?dataSetId=76&vcontsId=228261), [한국 방문기](https://www.springeye1.com/2024/10/IrwolArboretum.html)(2024-10-06).
- Crash Landing on You: [KTO 영문 가이드북 52쪽](https://english1.visitkorea.or.kr/e_book/access/ecatalogt.jsp?Dir=802&callmode=normal&catimage=&eclang=ko&start=54&um=s), [여행플러스](https://tripplus.mk.co.kr/domestic/article/129121/), [The Soul of Seoul](https://thesoulofseoul.net/crash-landing-on-you-filming-locations/). 강원관광 페이지는 검색 결과만 읽고 원문 실패하여 최종 JSON 근거에서 제외. KTO 가이드북의 별도 하늘다리 문장까지 채택하지 않고 별마로 이륙 부분만 다른 자료와 대조했다.
- Hometown: [KTO 공식 촬영지 코스](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=224805), [PinoySeoul](https://www.pinoyseoul.com/2022/10/lets-go-back-to-gongjin-its-been-year.html), [Reddit 실제 방문](https://www.reddit.com/r/kimseonho/comments/zkxt9b/trip_to_gongjin_hometown_cha_cha_cha_locations/). Reddit 방문 사례는 검색 본문의 전체 게시글 범위를 읽었으며 코스 장면의 주근거는 KTO·PinoySeoul이다.
- Our Beloved Summer: [KTO](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=224503), [Creatrip](https://creatrip.com/en/news/12068), [일본어 팬 note](https://note.com/yonabe_korea/n/n3ccd3b744202)(2022-01-28). note는 호감과 여행 참고 자료이며 작성자의 현장 방문 기록은 아니다.
- My Love from the Star: [KTO 쁘띠프랑스](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=93730), [Korea Times 현장 기사](https://www.koreatimes.co.kr/entertainment/shows-dramas/20140319/check-out-where-they-kissed)(2014-03-19), [FloralSprout](https://floralsprout.wordpress.com/2015/07/18/travel-guide-petite-france/)(2015-07-18).
- Business Proposal: [Tatler](https://www.tatlerasia.com/lifestyle/travel/5-k-dramas-tourist-spots), [korea.travel.art](https://koreatravelart.wordpress.com/2022/04/09/%E7%A4%BE%E5%85%A7%E7%9B%B8%E8%A6%AA%E5%85%B6%E4%BB%96%E6%8B%8D%E6%94%9D%E5%9C%B0%E9%BB%9E-business-proposal-other-filming-locations/)(2022-04-09), [KTO 자유공원](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=105439).
- King the Land: [KTO 호텔 촬영지](https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=862&vcontsId=201097), [KTO 파르나스 상세](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=194339), [Hey Roseanne 제주](https://heyroseanne.com/kdrama-filming-locations-in-jeju/). Preview 기사는 본문 확인되지 않아 채택하지 않았다.
- True Beauty: [KTO](https://english.visitkorea.or.kr/svc/sp/HallyuNew/contentsView.do?dataSetId=76&menuSn=862&vcontsId=138100), [Trip.com 한국 방문자의 공개 후기](https://us.trip.com/moments/detail/gyeongsangnam-do-21416-11167444/)(2021-09-27). Trip.com에 표시된 동적 '30 days ago' 대신 본문의 고정 게시일을 사용했다. KTO 재열기 400 발생을 기록한다.
- Hotel del Luna: [KTO 목포 코스](https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=357652&menuSn=217), [목포시 관광 페이지](https://biz.mokpo.go.kr/tour/attraction/museum?idx=7449&mode=view), [한국 방문기](https://bwolf08.tistory.com/1340)(2021 방문), [Trazy](https://blog.trazy.com/hotel-del-luna-itinerary-travel-with-boss-lady-jang-man-wol/). 목포문화도시센터 페이지는 원문 요청이 시간 초과되어 주소의 주근거로 쓰지 않았다.

## 통합 시 확인할 사항

- 본문 초안의 사진 필드는 비워 두고 별도로 장소와 재사용 조건을 확인했다. 다른 작품·다른 장소의 기존 사진을 빌려 쓰지 않았다.
- 정확한 장면·주소·회차·운영 정보를 구분했다. 확실한 회차는 CLOY 1화, Our Beloved Summer 7–8화, Business Proposal 최종회만 표시했다.
- `audience`는 개인의 호감, 여행 안내, 실제 방문을 구분한다. 작품별 기존 해외 시청·여행 수요 자료는 현재 순위로 주장하지 않는다.
- 지도 검색어는 주소 오류를 피할 수 있는 장소명과 확인한 도로명으로 구성했다. 카메라의 정확한 좌표를 모르는 곳은 방문 안내에 설명했다.
- 일부 공식 페이지에서 현재 행정구역 명칭 표기가 변경되어 있다. 제품에는 불필요한 광역 행정구역 명칭을 넣지 않고 도시명·도로명·장소명 중심으로 안내했다.


---

# Scene Korea 추가 10개 코스 검증 노트

확인일: 2026-09-25. 기존 routes.json 80개를 읽고 작품명·촬영 지점·장면을 대조했다. 검증한 10개를 `src/domains/drama/data/routes.json`에 통합했다. 이동 시간은 편집 기획 추정이며 운영 시간·실측 경로를 보증하지 않는다. 사진은 본문 조사 후 별도로 확보했고 아래 최종 결과에 기록했다.

## 추가안과 기존 코스의 차이

| 새 ID | 검증한 장면·장소 | 기존과의 차이 | 동선과 방문 범위 |
|---|---|---|---|
| goblin-yongdap-fateful-meeting | 용답역 육교, 써니와 저승사자의 만남 | 기존 주문진·월정사, 정동·북촌, 인천 한미서점·자유공원과 별도 | 45–90분. 용답역 2번 출구에서 육교와 인접 하천길. 하천 통제 시 육교 중심 |
| vincenzo-seongsu-coffee-truce | 할아버지공장 커피, 커먼그라운드 간식 | 기존 세운상가·한국은행·서울로의 도시 권력/야경 이야기와 다른 일상적 관계 장면 | 2–3시간. 성수역→건대입구역 1정거장과 도보. 영업·좌석 별도 확인 |
| vincenzo-chungju-riverside-confession | 수주팔봉 맞은편 강변의 진지한 대화 배경 | 빈센조 서울 코스와 별도 지역·장면 | 현장 1–2시간. 문주리 캠핑장 쪽 허용된 강변에서 조망. 귀환 차량 사전 준비. 등산·다리 횡단 필수 아님 |
| mr-sunshine-andong-lets-love | 만휴정 외나무다리에서 손을 잡는 장면 | 기존 논산 스튜디오의 한성/호텔과 다름 | 현장 1–1.5시간. 단일 촬영지. 안동 시내 이동 별도, 외나무다리 현장 통제 준수 |
| glory-cheongna-board-of-revenge | 청라루 옆 극중 하도영의 바둑공원 | 기존 청주 중앙공원의 바둑 배움 장면과 다른 실제 장소 | 1–1.5시간. 청라루를 기점으로 인접 구간만. 인천시가 바둑장 진입 울타리를 명시하므로 외부 조망 |
| okay-incheon-first-impressions | 라이트하우스 별관의 문영 소개 장면, 개항로통닭 재수네 치킨집 | 기존 고성 병원·해변과 별도 인천 초기 이야기 | 2–3시간. 서로 가까운 참외전로 일대 두 가게, 카페·식사 포함. 별관 2층 및 영업 확인 |
| winter-sonata-yongpyong-mountain-love | 드래곤프라자 곤돌라의 키스, 드래곤캐슬에서 함께 보낸 하루 | 기존 남이섬과 춘천 코스와 별도 | 리조트 내 3–4시간. 케이블카 왕복·운행·날씨·실내 접근 확인. 리조트까지 장거리 이동 제외 |
| parasite-noryangjin-pizza-scheme | 스카이피자, 김씨 가족이 가정부를 내보낼 계획을 나누는 식사 | 기존 돼지쌀슈퍼·계단·폭우 도주와 별도 | 1–1.5시간. 노량진역 왕복 보행과 식사. 이웃 골목은 접근로이며 추가 촬영지로 표시하지 않음 |
| itaewon-yiseo-stairs-rooftop | G게스트하우스 옆 계단에서 이서의 대치, 더파이니스트 4층 키스 | 기존 첫 단밤·육교·마지막 키스와 다름 | 2–3시간. 게스트하우스 외관→경리단 라운지, 언덕 보행 30–40분 또는 짧은 택시. 객실·게스트하우스 옥상 접근 약속 없음 |
| avengers-gangnam-motorcycle-chase | 강남역–교보타워사거리 촬영 구간, 서울 추격/오토바이 촬영 | 기존 세빛섬 연구소·상암 퀸젯과 다른 실제 도로 | 45–90분. 약 750m 인도. 모든 액션 숏의 정확한 자리를 특정하지 않으며 도로 진입 없음 |

## 직접 읽은 출처와 확인 범위

- **Goblin**: [서울시 2020-04-16](https://english.seoul.go.kr/hadong-plum-street-cheonggyecheon-stream/) 본문에서 촬영 지역·용답역 2번 출구 확인. [Joana Marie Camille 2017-12-17 방문기](https://joanamariecamille.wordpress.com/2017/12/17/korea2017-day3/)에서 실제 방문 사진과 써니·저승사자 만남 설명 확인. 회차는 넣지 않았다.
- **Vincenzo 두 코스**: [KTO 2022-02-10 독일어 원문](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=224808)에서 커피·간식·수주팔봉 대화 장면 확인. 해당 URL이 영어 도메인이지만 독일어 본문을 반환한다. [MiddleClass.sg 2021-05-25 실제 카페 방문](https://middleclass.sg/treats/grandpa-factory-seongsu/)으로 장소와 4회 확인. [한국 방문기 2021-12-29](https://invitetour.tistory.com/1803)는 실제 촬영 조망이 다리 반대편 문주리 캠핑장 쪽이라고 구분한다. 현장 표지 16회와 기사 17회가 충돌한다고 스스로 밝히므로 수주팔봉 회차는 비웠다. 다리 길이·높이 역시 자료가 달라 문안에 사용하지 않았다. 커먼그라운드를 3회 컨테이너 장면으로 쓰지 않았다.
- **Mr. Sunshine**: [KTO 2026년 안동 안내](https://german.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=1590458) 본문에서 만휴정 외나무다리 촬영 사실 확인. [Mito 2026-08-31 실제 방문기](https://note.com/serene_acacia721/n/n27290685d40d?hl=en)에서 현장 표지 사진과 손을 잡는 장면 설명 확인. 목계서원·월영교는 이 코스 촬영지에 넣지 않았다.
- **The Glory**: [인천시 안내](https://www.incheon.go.kr/world/wd020306/2215813) 본문에서 청라루 바로 옆 바둑장과 진입 울타리 확인. [KTO 2024-06-27](https://english.visitkorea.or.kr/svc/sp/HallyuNew/contentsView.do?dataSetId=70&vcontsId=198605)로 극중 세명 바둑공원 연결 확인. [CHIAKI의 실제 방문](https://us.trip.com/moments/detail/incheon-1385-119423660/)도 내부 진입 불가를 서술한다. Trip.com의 동적 날씨·오늘 영업 상태는 사용하지 않았다. 처음 찾은 koreantraveller 글은 open 시 계정 정지 페이지이므로 근거에서 제외했다.
- **It’s Okay to Not Be Okay**: [KTO 2022-05-02](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=224503)에서 라이트하우스 별관 2층·문영과 어린 팬, 개항로 치킨집 2회 장면·정확한 주소 확인. [콩알닷컴 2025년 직접 방문](https://small17dae1.tistory.com/233)은 치킨집 실제 방문·좌석 사진의 보조 근거다. [A Fangirl’s Heart 2020년 글](https://www.afangirlsheart.com/2020/08/its-okay-to-not-be-okay-filming-locations.html?m=0)은 계획된 여행이라고 본문에서 명시하므로 실제 방문으로 집계하지 않았다. 다른 지역의 주소가 섞인 부분은 사용하지 않았다.
- **Winter Sonata**: [리조트 공식 Winter Sonata Tour](https://yongpyong.co.kr/eng/about/winterTour.do)에서 곤돌라 탑승장과 드래곤캐슬 2층의 구체적 장면 확인. [Wen’s Delight 2011-09-04 방문기](https://wensdelight.blogspot.com/2011/09/koreajeju-trip-may-2011-day-5.html)로 실제 곤돌라·정상 카페 방문 확인. 오래된 방문기이므로 현재 실내 배치·운영 보장은 하지 않는다. 골프장 2번 홀은 골프 이용 제약 때문에 제외했다.
- **Parasite**: [VisitSeoul 2020-06-03, 수정 2023-09-07](https://english.visitseoul.net/hallyu/K-Picnic-Course-for-a-Daily-Seoulite-Experience/34214) 원문을 별도 agent-browser 정상 공개 페이지에서 읽었다. web.open은 방화벽 페이지였으나 일반 브라우저에서 정상 본문이 열렸다. 실제 상호·주소와 영화 연결 확인. [Atlas Obscura 2023-08-07](https://www.atlasobscura.com/places/sky-pizza-seoul-south-korea) 본문·방문자 사진으로 가정부 제거 계획 장면 확인. 상자 접기는 반지하 집의 장면이므로 가게 안에서 접는다고 쓰지 않았다.
- **Itaewon Class**: [VisitSeoul 2020-08-18, 수정 2023-06-15](https://english.visitseoul.net/hallyu/Diving-into-Itaewon-Class_/34831) 공개 본문을 agent-browser로 읽었다. [CNA Lifestyle 2021-12-10 방문 기사](https://cnalifestyle.channelnewsasia.com/travel/k-drama-locations-korea-seoul-incheon-squid-game-itaewon-class-hotel-del-luna-290241)는 한국관광공사 초청/제휴 취재임을 밝힌다. G게스트하우스가 근수의 고시원이며 이서의 따귀 장면 계단임을 확인했다. [KTO](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=224503)와 [Creatrip 실제 방문 리뷰](https://creatrip.com/en/blog/6755/The-Finest-Itaewon)로 더파이니스트 4층·4회 확인. 옛 가이드의 게스트하우스 옥상 누구나 입장 가능 문구는 현재 운영 규정으로 옮기지 않았다. 오리올은 주소 혼동을 추가 조사하지 않고 이번 초안에서 제외했다.
- **Avengers**: [서울영상위원회 제작 기록](https://english.seoulfc.or.kr/naa/msis/?f=MS_TITLE&p=26&q=)에서 강남대로 사용 확인. [연합뉴스 2014-04-06 현장 취재](https://www.yna.co.kr/view/AKR20140406025500004)는 강남역 11번 출구 앞 오토바이 촬영과 교보타워 방향 통제 구간을 명시한다. [Atlas of Wonders 장면 대조](https://www.atlasofwonders.com/2015/01/avengers-age-of-ultron-filming-locations.html)로 강남 추격 맥락 확인. 고가도로 아래 계단 숏은 안양으로 구분되어 있어 강남 코스에 넣지 않았다. 이 코스는 일반 팬 방문기 대신 제작기관·당시 현장 보도·장면 대조 사이트를 교차 사용했다.

## 검증 결과와 한계

- 새 ID 10개, 기존 ID와 충돌 없음. 기존 영문 작품명·한국어 작품명·format·category를 그대로 복사했다.
- SEO 제목 49–56자, 설명 147–164자. 모두 고유하다.
- 단일 장소 코스 6개, 2지점 코스 4개. 동일 관광지의 별도 촬영 근거 없는 주변 시설을 억지 stop으로 추가하지 않았다.
- 운영 시간·가격·예약 가능 여부는 현재 확인하지 않았다. 본문을 읽은 날짜와 운영을 실지 확인한 날짜를 혼동하지 않는다.
- 외국 수요는 기존 작품 자료를 재활용할 수 있으나 이번 JSON은 보수적으로 편집 선정 문구를 사용한다. 인기 순위를 주장하지 않는다.
- 본문 초안은 기존 사진을 재사용하지 않았다. 새로 확보한 사진의 원본과 이용 조건은 `docs/image-sources.json`에 기록했다.

## 대표사진 최종 결과

100투어로 확장할 때 새 20코스 중 10개에 실제 장소 사진을 추가했다. 삽교호, 일월수목원, 쁘띠프랑스, 상주은모래비치, 목포근대역사관, 커먼그라운드, 수주팔봉 강변, 강남대로, 만휴정, 청라루의 사진이다. 이 단계에서는 전체 100코스 중 89개에 사진이 있었고 11개에는 방문 순서 표지를 썼다.

사진마다 실제 장소와 캡션을 대조하고 CC0·CC BY-SA·공공누리 제1유형 조건을 확인했다. 작가·원본 URL·라이선스·파일 해시는 `docs/image-sources.json`에 있다. 오래된 사진을 현재 시설 상태로 설명하지 않는다.

커먼그라운드는 공개 600px 미리보기, 만휴정은 워터마크가 있는 공개 940px 미리보기를 확대 없이 썼다. 만휴정 사진은 정자를 보여주며 외나무다리 사진이라고 표시하지 않는다. 새로 확보한 10장 외에 기존 전체 사진의 이용 조건까지 새로 검증했다는 뜻은 아니다.

### 누락 사진 보강

같은 날 추가 조사로 10개 투어에 실제 장소 사진을 연결했다. 돌담병원, 영월 봉래산 활공장, 월포해변, 온빛숲, 자유공원, 파르나스 호텔 제주 로비, 개항로통닭, 용평 곤돌라 탑승장, 스카이피자, G게스트하우스 사진이다. 용답교 코스에는 기존 방문 동선의 하천 산책로 사진을 추가해 현재 100투어 모두 사진이 있다. 용답교의 정확한 촬영 다리 사진은 재사용 조건을 확인하지 못해 쓰지 않았다. 대신 CC0로 공개된 용답역 근처 징검다리 사진을 `Nearby walk`로 표시하고, 장면이 촬영된 고가 보행교는 별도 장소라는 설명을 캡션에 넣었다.

방문자가 직접 찍은 돌담병원·파르나스·개항로통닭·G게스트하우스 사진은 각 블로그 글의 CC BY 4.0 표시를 확인했다. 자유공원은 Public domain, 용평은 CC BY-SA 3.0, 영월·온빛숲은 공식 제공 페이지의 공공누리 제1유형이다. 월포해변·스카이피자는 관광공사 원본 사진 URL과 InfoTravelog에 공개된 해당 사진의 TourAPI `cpyrhtDivCd: Type1` 값을 대조했다. 이 두 사진의 이용 조건 근거는 공식 API를 직접 호출한 결과가 아닌 재게시된 사진별 메타데이터다.

사진은 확대하지 않고 WebP로 변환했다. 촬영 연도를 확인한 오래된 사진은 캡션에 연도를 표시하고, 원본 워터마크를 보존했다. 추가한 10장은 `Filming location`, 용답 하천 사진은 `Nearby walk`로 표시한다. 드라마 스틸로 표시한 사진은 없다. 파일 해시, 원본, 이용 조건과 변환 내역은 `docs/image-sources.json`에 기록했다.
