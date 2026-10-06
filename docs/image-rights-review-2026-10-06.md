# 이미지 재사용 권한 점검 · 2026-10-06

100개 투어 모두 서로 다른 대표 사진을 표시한다. 촬영 장소 사진 60개, 같은 동네·인근 산책길 사진 38개, 지역 풍경 사진 2개다. 사진 속 장소와 코스의 관계를 상세 사진 설명에 밝힌다. `Nearby scenery`와 `Regional scenery`는 내부 분류로 보관하며 카드와 상세 사진에 별도 분류 표시는 붙이지 않는다.

1차 검토에서는 85개 투어에 사진을 표시하고 15개는 코스 표지를 썼다. 사용자가 지역 명소 사진으로 빈 표지를 채우고 중복 사진을 줄여 달라고 요청해 24장의 사진을 추가 검토했다. 빈 표지 15개를 채우고 중복 배정 9개를 교체했다. 같은 사진을 다르게 잘라 중복을 숨기지 않았다.

## 확인 기준

원 파일이나 원 게시물에 사진의 재사용 조건이 있는지 확인했다. CC BY, CC BY-SA, CC0, 저작자 공개 도메인 선언, 공공누리 제1유형을 선택했다. 상업적 사용 금지나 변경 금지 조건이 있는 사진은 목록에 추가하지 않았다.

Commons 전체 사이트의 라이선스와 개별 사진의 라이선스를 구분했다. 사진 설명의 저자와 라이선스를 확인하고 기존 파일 기록의 SHA-256을 Blob 매니페스트와 대조했다. 새 사진은 내려받은 픽셀을 보고 장소와 캡션을 확인했다.

CC BY-SA 가공본에는 같은 라이선스를 적용한다. 모든 승인 항목에 저자, 원 출처, 라이선스 링크와 WebP 변환 안내를 남겼다. 사진 속 장면이나 시설의 현재 상태를 촬영 시점 이후까지 보장하지 않는다.

- [CC BY 4.0 조건](https://creativecommons.org/licenses/by/4.0/)
- [CC BY-SA 4.0 조건](https://creativecommons.org/licenses/by-sa/4.0/)
- [공공누리 제1유형 조건](https://www.kogl.or.kr/info/licenseType1.do)

## 별도 판단

기존 `docs/image-sources.json` 90개 중 38개에 허용 라이선스가 기록되어 있었다. 36개는 원 게시물 또는 개별 Commons 파일에서 해당 조건을 재확인했다. 월포해변과 스카이피자는 제3자 사이트가 복제한 TourAPI `Type1` 정보만 있어 공식 응답을 확인할 때까지 기존 사진을 승인하지 않았다.

정책브리핑의 Past Lives 참고 글은 공공누리 제1유형을 텍스트에만 적용한다고 명시한다. 그 글의 사진에는 같은 허가가 적용된다고 판단하지 않았다. [원문](https://www.korea.kr/briefing/policyBriefingView.do?newsId=148784339)

Korea.net의 일부 Commons 파일은 옛 제한 문구와 별도 CC BY-SA 허가가 함께 보인다. Flickr 검토 기록과 Commons의 Korea.net 허가 확인 및 VRT 안내가 있는 파일만 해당 CC BY-SA 조건으로 선택했다. 새 중앙탑공원 사진과 광치기해변 사진은 이 경우에 해당한다.

초기 `hometown-place`와 `vincenzo-place`는 별도 재사용 기록이 없다. 이 두 보조 사진과 해당 투어의 이전 대표 사진을 공개 화면의 승인 목록에서 제외한다. 원본 데이터와 이전 Blob 기록은 감사 근거로 보존하며 승인 목록으로 간주하지 않는다.

## 추가 확인한 사진

- **A day in Gongjin**: 실제 청하시장 사진을 사용한다. Commons 재게시 정보에 더해 원 YouTube 영상의 공개 라이선스 표시가 재사용 가능한 Creative Commons Attribution임을 확인했다. 방문객 여행 영상 속 장소 사진이며 드라마 스틸이 아니다.
- **미스터 션샤인**: 논산시 보도자료의 선샤인스튜디오 야경 첨부 사진을 사용한다. 개별 게시물의 공공누리 제1유형과 사진 파일을 함께 확인했다.
- **Past Lives**: 경기도가 공공누리 제1유형으로 공개한 국립현대미술관 과천관 사진을 사용한다. 공개 미리보기 760×507픽셀을 확대하지 않았다. 연못과 미술관 주변을 보여주며 영화 장면으로 설명하지 않는다.
- **대구 캠퍼스 투어 2개**: 계명대 대명캠퍼스 주변 대명공연거리의 낮과 밤 사진을 각각 사용한다. 대구 남구의 개별 관광 갤러리에 공공누리 제1유형이 표시되어 있다. 캠퍼스 건물이나 드라마 장면이 아니라는 점을 캡션에 밝힌다.
- **한림 귀향·월포 첫 만남**: 각각 협재해변과 화진해변의 지역 풍경을 사용한다. 실제 코스의 한림항·수산시장 또는 월포해변을 찍은 사진으로 소개하지 않는다. 한림항 공식 사진 후보는 변경금지 조건이라 현재 가공 방식에 사용하지 않았다.
- **나머지 빈 표지**: 태극당·구남로·금능해변 등 실제 장소 사진과 쌍문·상수·용산·노량진의 주변 풍경을 사용한다.

드라마 스틸의 상업적 재사용 허가가 확인된 새 자료는 확보하지 못했다. 허가 없이 스틸을 복제하지 않고 실제 장소 사진을 우선한다.

## 투어별 현재 결과

| 투어 | 이번 변경 | 내부 분류 | 사진 출처와 라이선스 |
| --- | --- | --- | --- |
| `lovely` | 유지 | Filming location | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Hwahongmun_02.jpg) |
| `hometown` | 빈 표지에 사진 추가 | Filming location | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Cheongha_Market.jpg) |
| `goblin` | 유지 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:%EC%98%81%EC%A7%84%ED%95%B4%EB%B3%80_2016-12-18_13.50.08.jpg) |
| `summer` | 중복 사진 교체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Hwahongmun_20240929_003.jpg) |
| `itaewon` | 유지 | Nearby scenery | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Noksapyeong_(%EB%85%B9%EC%82%AC%ED%8F%89)_neighborhood_-_panoramio.jpg) |
| `vincenzo` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Seoullo_7017_night_time_city_lights.jpg) |
| `cloy` | 유지 | Filming location | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Chungju_20151104_02_(22378410587).jpg) |
| `woo` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Jeju_Gwaneumsa_01.jpg) |
| `squid` | 빈 표지에 사진 추가 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Seoul-metro-413-Ssangmun-station-entrance-4-20181126-110834.jpg) |
| `okay` | 빈 표지에 사진 추가 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Amlou2518_%EC%B2%AD%EA%B0%84%EC%A0%95.jpg) |
| `queen-of-tears-seoul` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:The_Hyundai_Seoul_Yeoui-dong_3.jpg) |
| `business-proposal-date` | 유지 | Filming location | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Lotte_World.jpg) |
| `king-the-land-jeju` | 유지 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Gapado_scenery.JPG) |
| `twenty-five-jeonju` | 유지 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Eunhaeng-ro.jpg) |
| `true-beauty-secret` | 유지 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Bukchon-ro_11-gil_street_with_hanok_houses_and_blue_sky_in_Bukchon_Hanok_Village_Seoul.jpg) |
| `hotel-del-luna-memories` | 유지 | Filming location | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Corridor_of_Seoulbookbogo.jpg) |
| `my-love-star-seoul` | 유지 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:View_from_N_Seoul_Tower_a2.jpg) |
| `mr-sunshine-hanseong` | 빈 표지에 사진 추가 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://www.nonsan.go.kr/kor/html/sub03/030106.html?mode=V&no=83db35ef66c339eb763d7f5466da5443) |
| `kingdom-palace` | 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://commons.wikimedia.org/wiki/File:창경궁_통명전_전경_(2013).jpg) |
| `reply-1988-first-love` | 빈 표지에 사진 추가 | Filming location | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Taegeukdang_Front_Side.jpg) |
| `alchemy-return` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Mungyeong_Saejae_Open_Film_Set.jpg) |
| `glory-next-move` | 유지 | Nearby scenery | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Mangseollu.jpg) |
| `camellia-ongsan` | 유지 | Filming location | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Guryongpo_Japanese_House_Street_20240113_001.jpg) |
| `parasite-first-job` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Doijissal_Supermarket.jpg) |
| `parasite-rain` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Parasite_filming_location.jpg) |
| `decision-to-leave-chase` | 유지 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Chinatown_in_Busan_1.jpg) |
| `pachinko-homecoming` | 유지 | Nearby scenery | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Korea-Busan-Taejongdae-03.jpg) |
| `startup-dream` | 유지 | Filming location | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Nodeulseom_(14005438206).jpg) |
| `itaewon-finally-us` | 중복 사진 교체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Itaewon_view_with_yongsan_art_hall.jpg) |
| `king-between-worlds` | 빈 표지에 사진 추가 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Haeundae_Gunam-ro_Cultural_Square.jpg) |
| `sleeping-anguk-dream` | 중복 사진 교체 | Nearby scenery | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Bukchon_Hanok_Village_01.jpg) |
| `strong-girl-first-dates` | 유지 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Yeouido_Hangang_Park_from_Mapo_Bridge_2.jpg) |
| `nevertheless-sol-jiwan` | 빈 표지에 사진 추가 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Seoul-metro-623-Sangsu-station-entrance-1-20191022-080026.jpg) |
| `something-rain-seochon` | 유지 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Seochon_scene.jpg) |
| `blue-sea-seoul-promise` | 중복 사진 교체 | Nearby scenery | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Northeast_View_from_N-Seoul_Tower.jpg) |
| `romance-bonus-recognition` | 유지 | Nearby scenery | [CC BY 2.0 Korea](https://creativecommons.org/licenses/by/2.0/kr/) · [사진 출처](https://commons.wikimedia.org/wiki/File:%EC%97%B0%EB%82%A8%EB%8F%99_(20240803)_2.jpg) |
| `she-pretty-seochon` | 중복 사진 교체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Seochon_Dae-o_Bookstore.jpg) |
| `goblin-seoul-walls` | 중복 사진 교체 | Nearby scenery | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Bukchon_Hanok_Village_04.jpg) |
| `lovely-bukchon-future` | 중복 사진 교체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Bukchon_Hanok_Village_Mar_2025_03.jpg) |
| `queen-mungyeong-goodbyes` | 유지 | Nearby scenery | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://commons.wikimedia.org/wiki/File:%EB%AC%B8%EA%B2%BD_%EA%B5%AC_%EA%B0%80%EC%9D%80%EC%97%AD.jpg) |
| `my-demon-ordinary-date` | 유지 | Nearby scenery | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Seoulforest_path01.jpg) |
| `encounter-hongje-last-date` | 유지 | Nearby scenery | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Hongjecheon_Artificial_Waterfall_2023-10-31.jpg) |
| `fight-hocheon-rooftop` | 유지 | Nearby scenery | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://www.visitbusan.net/archive/dataSearch/view.nm?dataSid=METADATA005276) |
| `samdal-seongsan-homecoming` | 유지 | Filming location | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Jeju_Island_20141127_25_(15892738751).jpg) |
| `tangerines-hallim-homecoming` | 빈 표지에 사진 추가 | Regional scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Hyeopjae_Beach_Scenery.jpg) |
| `our-blues-hallim-hearts` | 빈 표지에 사진 추가 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Jeju_Olle_Route_14_(2).jpg) |
| `descendants-taebaek-uruk` | 유지 | Nearby scenery | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Korail_Tong-ri_Station.jpg) |
| `winter-sonata-nami-first-kiss` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Nami_island_winter.jpg) |
| `dae-jang-geum-jeju-new-calling` | 유지 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:%ED%91%9C%EC%84%A0%ED%95%B4%EB%B9%84%EC%B9%98%ED%95%B4%EB%B3%80_(1).jpg) |
| `kingdom-mungyeong-gates` | 중복 사진 교체 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Mungyeong_Saejae_Second_Gate.JPG) |
| `hero-busan-investigation` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Gamcheon_Cultural_Village,_Busan.jpg) |
| `architecture-seoul-first-love` | 유지 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Jeongneung_Jeongjagak.jpg) |
| `christmas-gunsan-photo` | 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://www.kogl.or.kr/recommend/recommendDivView.do?division=img&oc=&recommendIdx=38018) |
| `my-mister-yongsan-walk` | 빈 표지에 사진 추가 | Nearby scenery | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Yongsan_Station.jpg) |
| `navillera-seoul-remember` | 유지 | Filming location | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:%EC%95%99%EC%B9%B4%EB%9D%BC%EA%B3%B5%EC%9B%90_%EC%A0%84%EA%B2%BD_02.jpg) |
| `love-rain-daegu-three-seconds` | 빈 표지에 사진 추가 | Nearby scenery | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://nam.daegu.kr/tour/index.do?menu_id=00001532) |
| `winter-sonata-chuncheon-promise` | 유지 | Nearby scenery | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:%EA%B3%B5%EC%A7%80%EC%B2%9C_%EC%95%BC%EA%B2%BD_(2023).jpg) |
| `coffee-prince-buam-quiet-heart` | 유지 | Nearby scenery | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Korea-Seoul-Changuimun-01.jpg) |
| `moon-lovers-pocheon-crossing-time` | 유지 | Filming location | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Art_Valley_In_Korea_(65750913).jpeg) |
| `autumn-heart-sokcho-near-miss` | 유지 | Nearby scenery | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Abai_Village.jpg) |
| `boys-flowers-daegu-shinhwa` | 빈 표지에 사진 추가 | Nearby scenery | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://nam.daegu.kr/tour/index.do?menu_id=00001532) |
| `misaeng-seoul-square-first-day` | 유지 | Filming location | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Downtown_Seoul_(2)_(41087270502).jpg) |
| `avengers-sevit-lab` | 유지 | Filming location | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Korea_Sevit_Island_15_(15540663165).jpg) |
| `avengers-sangam-quinjet` | 유지 | Nearby scenery | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Sangam-dong%2C_Mapo-gu%2C_Seoul.jpg) |
| `black-panther-jagalchi-pursuit` | 유지 | Filming location | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Jagalchi_Fish_Market_at_Morning.jpg) |
| `black-panther-gwangalli-night` | 유지 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:2012_Gwangalli_Beach.jpg) |
| `past-lives-gwacheon-memory` | 빈 표지에 사진 추가 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://www.kogl.or.kr/recommend/recommendDivView.do?division=img&oc=&recommendIdx=36990) |
| `broker-jeonpo-first-choice` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Phone_booth_at_bus_stop_Jeonpo_Samgeori.jpg) |
| `oldboy-choryang-dumpling-clue` | 중복 사진 교체 | Nearby scenery | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Busan_Chinatown.jpg) |
| `train-to-busan-bujeon-escape` | 유지 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Korail_Bujeon_Station.jpg) |
| `twentieth-century-gyeongju-school-trip` | 유지 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Cheomseongdae-Observatorium.jpg) |
| `moonlight-suwon-palace-days` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Bongsudang_Hall_of_the_Hwaseong_Palace_IMG_2109.jpg) |
| `liberation-seonghwan-small-moments` | 유지 | Filming location | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Seonghwan_Station_20240720_01.jpg) |
| `host-ichon-final-pursuit` | 유지 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Wonhyo_Bridge.jpg) |
| `little-forest-gunwi-homecoming` | 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://www.welchon.com/web/lay1/program/S1T11C24/travelHistory/view.do?bbs_idx=2211247) |
| `ode-to-father-busan-kept-promise` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Kkotbuninae.jpg) |
| `romantic-pocheon-doldam-doorstep` | 유지 | Filming location | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [사진 출처](https://jamesdreaming.tistory.com/101) |
| `watermelon-gangneung-first-guitar` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:2016년_7월_26일_봉봉방앗간_DSC03943.jpg) |
| `another-oh-songdo-lonely-walk` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Canal_City_Fountain,_Songdo,_Incheon.jpg) |
| `goblin-incheon-summons` | 유지 | Filming location | [CC BY-SA 1.0](https://creativecommons.org/licenses/by-sa/1.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:드라마_도깨비_한미서점1.jpg) |
| `lovely-sapgyoho-second-ride` | 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://commons.wikimedia.org/wiki/File:Sapgyoho_amusement_park,_Dangjin,_South_Chungcheong_Province,_South_Korea.jpg) |
| `queen-irwol-rooftop-garden` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) · [사진 출처](https://commons.wikimedia.org/wiki/File:Inside_Irwol_Arboretum_Upstairs.jpg) |
| `cloy-yeongwol-first-flight` | 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/license.do) · [사진 출처](https://www.kogl.or.kr/recommend/recommendDivView.do?division=img&recommendIdx=2438) |
| `hometown-wolpo-first-meeting` | 빈 표지에 사진 추가 | Regional scenery | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Hwajin_Beach,_Pohang.jpg) |
| `summer-onbit-documentary-retreat` | 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/license.do) · [사진 출처](https://support.nonsan.go.kr/kor/html/sub03/030106.html?mode=V&no=bb5b20fcc0edf0ad2fa5aa68c0b16d38) |
| `my-love-star-petite-france-kiss` | 유지 | Filming location | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.en) · [사진 출처](https://commons.wikimedia.org/wiki/File:Petit-france-korea351022.jpg) |
| `business-proposal-jayu-promise` | 유지 | Filming location | [Public domain](https://commons.wikimedia.org/wiki/Template:PD-user-en) · [사진 출처](https://commons.wikimedia.org/wiki/File:Jayuwalkway.jpg) |
| `king-the-land-parnas-lobby` | 유지 | Filming location | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [사진 출처](https://baonana.tistory.com/107) |
| `true-beauty-namhae-seaside-date` | 유지 | Filming location | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.en) · [사진 출처](https://commons.wikimedia.org/wiki/File:Sangju_Eunmorae_Beach.jpg) |
| `hotel-del-luna-mokpo-front-door` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) · [사진 출처](https://commons.wikimedia.org/wiki/File:Mokpo_Modern_History_Museum_(Building_1)_20241005_001.jpg) |
| `goblin-yongdap-fateful-meeting` | 유지 | Nearby walk | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [사진 출처](https://pxhere.com/en/photo/1635062) |
| `vincenzo-seongsu-coffee-truce` | 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://www.kogl.or.kr/recommend/recommendDivView.do?division=img&recommendIdx=112698) |
| `vincenzo-chungju-riverside-confession` | 유지 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:CS-Sujupalbong.jpg) |
| `mr-sunshine-andong-lets-love` | 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://korean1.visitkorea.or.kr/enu/nphotogallery/photo.kto?func_name=photo_view&newphotoDTO.photo_code=1917176202211029k&newphotoDTO.searchWord=&newphotoDTO.sub_menu=new) |
| `glory-cheongna-board-of-revenge` | 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://www.ifez.go.kr/promote/pst/view.do?pst_id=scene_photo&pst_sn=664949) |
| `okay-incheon-first-impressions` | 유지 | Filming location | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [사진 출처](https://small17dae1.tistory.com/233) |
| `winter-sonata-yongpyong-mountain-love` | 유지 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Yongpyong_Ski_Resort_Oct_2014_02.JPG) |
| `parasite-noryangjin-pizza-scheme` | 빈 표지에 사진 추가 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Noryangjin_Fish_Market.jpg) |
| `itaewon-yiseo-stairs-rooftop` | 유지 | Filming location | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [사진 출처](https://urbanerd.tistory.com/entry/%EC%84%9C%EC%9A%B8-%ED%81%B4%EB%9F%BD-%EC%9E%90%EC%9D%B4%EC%96%B8-%EC%9D%B4%EC%8A%AC%EB%9E%8C%EC%82%AC%EC%9B%90-%EC%9A%B0%EC%82%AC%EB%8B%A8%EA%B8%B8-%EC%9D%B4%ED%83%9C%EC%9B%90%EA%B1%B0%EB%A6%AC-%EB%85%B9%EC%82%AC%ED%8F%89-%EB%B3%B4%EB%8F%84%EC%9C%A1%EA%B5%90-%EA%B2%BD%EB%A6%AC%EB%8B%A8%EA%B8%B8-%EB%A7%88%EC%9D%8C%EA%B3%BC-%EB%A7%88%EC%9D%8C-%EB%B9%84%EC%8A%A4%ED%85%8C%EA%B9%8C-%EC%B9%B4%ED%8E%98-%EC%8A%A4%ED%83%A0%EB%94%A9-%EC%BB%A4%ED%94%BC-%ED%8C%8C%EC%9A%B4%ED%8B%B4) |
| `avengers-gangnam-motorcycle-chase` | 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Gangnam-daero.jpg) |

## 자산 기록

1차 검토 자산 41개와 이번 추가 사진 24개의 원 출처, 내려받은 URL, 저자, 라이선스, 픽셀 크기, Blob URL과 SHA-256은 [reviewed-image-assets.json](reviewed-image-assets.json)에 보존했다. 전체 65개 중 64개가 게시 중이고, 기존 허용 사진 36개와 합쳐 서로 다른 사진 100개를 표시한다. 익선동 사진 1개는 서울책보고의 실제 장소 사진을 확보한 뒤 사용을 중단했다.

이번 WebP 24개는 총 6,273,386바이트이며, 검토 자산 전체는 17,819,924바이트다. 업로드 파일의 해시·크기·픽셀 크기를 공개 Blob 응답과 대조한다. 원본 다운로드의 로그인이나 이용 신청 절차를 우회하지 않았다. 이전의 비승인 사진과 사용하지 않는 Blob 파일은 삭제하지 않았다.

투어별 현재 사진, 캡션, 권리 표시는 [approved-images.json](../src/domains/drama/data/approved-images.json)이 공개 화면에 전달한다. 승인 목록에 없는 과거 사진은 화면·구조화 데이터·사이트맵에 노출하지 않는다. 이 문서는 사진의 재사용 조건을 확인한 기록이며 AdSense의 승인이나 거절 사유를 나타내지 않는다.
