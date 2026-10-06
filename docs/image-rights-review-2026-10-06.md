# 이미지 재사용 권한 점검 · 2026-10-06

100개 투어의 대표 이미지와 추가 장소 사진 2개를 확인했다. 현재 36개 투어는 기존 사진을 유지하고 49개는 확인한 사진으로 교체한다. 15개는 사진을 표시하지 않고 코스 일러스트를 표시한다.

사진이 있는 투어는 85개다. 촬영 장소 사진 53개와 같은 장소·동네의 주변 풍경 32개로 구분했다. 같은 동네 사진은 `Nearby scenery`와 구체적인 캡션으로 장면 사진이 아니라는 점을 밝힌다.

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

## 투어별 결과

| 투어 | 결과 | 표시 구분 | 원 사진 또는 대체 사진의 근거 |
| --- | --- | --- | --- |
| `lovely` | 대체 | Filming location | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Hwahongmun_02.jpg) |
| `hometown` | 일러스트 | Cheongha and Cheongjin, Pohang | 공식 관광 소개의 사진별 재사용 조건을 확인하지 못함. 청하·사방공원 영상 재게시 후보도 원 YouTube 라이선스를 확인하지 못해 제외. [기존 출처](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=224805) |
| `goblin` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:%EC%98%81%EC%A7%84%ED%95%B4%EB%B3%80_2016-12-18_13.50.08.jpg) |
| `summer` | 대체 | Nearby scenery | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Hwahongmun_02.jpg) |
| `itaewon` | 대체 | Nearby scenery | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Noksapyeong_(%EB%85%B9%EC%82%AC%ED%8F%89)_neighborhood_-_panoramio.jpg) |
| `vincenzo` | 대체 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Seoullo_7017_night_time_city_lights.jpg) |
| `cloy` | 대체 | Filming location | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Chungju_20151104_02_(22378410587).jpg) |
| `woo` | 대체 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Jeju_Gwaneumsa_01.jpg) |
| `squid` | 일러스트 | Ssangmun-dong, Seoul | 백운시장·CU 실제 장소 사진의 허가를 확인하지 못함. 별도 건물인 쌍문1동 주민센터 사진은 이 코스의 적절한 대체 풍경으로 선택하지 않음. [기존 출처](https://english.visitkorea.or.kr/svc/contents/bbsHtmlView.do?menuSn=862&vcontsId=200823) |
| `okay` | 일러스트 | Ayajin, Goseong | 기존 카페 사진의 허가 및 아야진 해변의 적합한 허용 대체 사진을 확인하지 못함. [기존 출처](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=224503) |
| `queen-of-tears-seoul` | 기존 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:The_Hyundai_Seoul_Yeoui-dong_3.jpg) |
| `business-proposal-date` | 기존 유지 | Filming location | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Lotte_World.jpg) |
| `king-the-land-jeju` | 대체 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Gapado_scenery.JPG) |
| `twenty-five-jeonju` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Eunhaeng-ro.jpg) |
| `true-beauty-secret` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Bukchon-ro_11-gil_street_with_hanok_houses_and_blue_sky_in_Bukchon_Hanok_Village_Seoul.jpg) |
| `hotel-del-luna-memories` | 대체 | Filming location | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Corridor_of_Seoulbookbogo.jpg) |
| `my-love-star-seoul` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:View_from_N_Seoul_Tower_a2.jpg) |
| `mr-sunshine-hanseong` | 일러스트 | Sunshine Studio, Nonsan | 선샤인 스튜디오 공식 갤러리에서도 개별 사진의 재사용 조건을 확인하지 못함. [기존 출처](https://k-mice.visitkorea.or.kr/uniquevenue/main/sub.kto?lang=en&uvid=86) |
| `kingdom-palace` | 기존 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://commons.wikimedia.org/wiki/File:창경궁_통명전_전경_(2013).jpg) |
| `reply-1988-first-love` | 일러스트 | Jangchung-dong and Dogok-dong, Seoul | 태극당·브라운핸즈 도곡의 원 사진 또는 두 정거장 주변에서 허용된 대체 사진을 확인하지 못함. [기존 출처](https://english.visitseoul.net/hallyu/Finding-the-Traces-of-Reply-1988_/35497) |
| `alchemy-return` | 대체 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Mungyeong_Saejae_Open_Film_Set.jpg) |
| `glory-next-move` | 대체 | Nearby scenery | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Mangseollu.jpg) |
| `camellia-ongsan` | 대체 | Filming location | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Guryongpo_Japanese_House_Street_20240113_001.jpg) |
| `parasite-first-job` | 대체 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Doijissal_Supermarket.jpg) |
| `parasite-rain` | 대체 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Parasite_filming_location.jpg) |
| `decision-to-leave-chase` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Chinatown_in_Busan_1.jpg) |
| `pachinko-homecoming` | 대체 | Nearby scenery | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Korea-Busan-Taejongdae-03.jpg) |
| `startup-dream` | 대체 | Filming location | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Nodeulseom_(14005438206).jpg) |
| `itaewon-finally-us` | 대체 | Nearby scenery | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Noksapyeong_(%EB%85%B9%EC%82%AC%ED%8F%89)_neighborhood_-_panoramio.jpg) |
| `king-between-worlds` | 일러스트 | Gijang and Haeundae, Busan | 아홉산숲·해운대 정거장에 맞는 사진의 재사용 조건을 확인하지 못함. 부산의 다른 동네 사진으로 대체하지 않음. [기존 출처](https://www.visitbusan.net/index.do?lang_cd=en&menuCd=DOM_000000302002001000&uc_seq=852) |
| `sleeping-anguk-dream` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Bukchon-ro_11-gil_street_with_hanok_houses_and_blue_sky_in_Bukchon_Hanok_Village_Seoul.jpg) |
| `strong-girl-first-dates` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Yeouido_Hangang_Park_from_Mapo_Bridge_2.jpg) |
| `nevertheless-sol-jiwan` | 일러스트 | Yongsan & Sangsu, Seoul | 신용산·상수 식당과 가까운 동네 사진의 재사용 조건을 확인하지 못함. [기존 출처](https://english.visitseoul.net/hallyu/K-DRAMA-Inside-Nevertheless-Seoul-Filming-Locations-that-Created-the-Best-Scenes/38649) |
| `something-rain-seochon` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Seochon_scene.jpg) |
| `blue-sea-seoul-promise` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:View_from_N_Seoul_Tower_a2.jpg) |
| `romance-bonus-recognition` | 대체 | Nearby scenery | [CC BY 2.0 Korea](https://creativecommons.org/licenses/by/2.0/kr/) · [사진 출처](https://commons.wikimedia.org/wiki/File:%EC%97%B0%EB%82%A8%EB%8F%99_(20240803)_2.jpg) |
| `she-pretty-seochon` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Seochon_scene.jpg) |
| `goblin-seoul-walls` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Bukchon-ro_11-gil_street_with_hanok_houses_and_blue_sky_in_Bukchon_Hanok_Village_Seoul.jpg) |
| `lovely-bukchon-future` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Bukchon-ro_11-gil_street_with_hanok_houses_and_blue_sky_in_Bukchon_Hanok_Village_Seoul.jpg) |
| `queen-mungyeong-goodbyes` | 대체 | Nearby scenery | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://commons.wikimedia.org/wiki/File:%EB%AC%B8%EA%B2%BD_%EA%B5%AC_%EA%B0%80%EC%9D%80%EC%97%AD.jpg) |
| `my-demon-ordinary-date` | 대체 | Nearby scenery | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Seoulforest_path01.jpg) |
| `encounter-hongje-last-date` | 대체 | Nearby scenery | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Hongjecheon_Artificial_Waterfall_2023-10-31.jpg) |
| `fight-hocheon-rooftop` | 대체 | Nearby scenery | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://www.visitbusan.net/archive/dataSearch/view.nm?dataSid=METADATA005276) |
| `samdal-seongsan-homecoming` | 대체 | Filming location | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Jeju_Island_20141127_25_(15892738751).jpg) |
| `tangerines-hallim-homecoming` | 일러스트 | Hallim harbor, Jeju | 한림 수산시장·항구 사진별 재사용 조건 및 가까운 대체 풍경의 허가를 확인하지 못함. [기존 출처](https://www.visitjeju.net/en/detail/view?contentsid=CNTS_300000000013461) |
| `our-blues-hallim-hearts` | 일러스트 | Hallim and Geumneung, Jeju | 한림항·금능해변 사진의 원 출처 허가를 확인하지 못함. 재게시 후보의 라이선스 주장만으로 선택하지 않음. [기존 출처](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=216416) |
| `descendants-taebaek-uruk` | 대체 | Nearby scenery | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Korail_Tong-ri_Station.jpg) |
| `winter-sonata-nami-first-kiss` | 대체 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Nami_island_winter.jpg) |
| `dae-jang-geum-jeju-new-calling` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:%ED%91%9C%EC%84%A0%ED%95%B4%EB%B9%84%EC%B9%98%ED%95%B4%EB%B3%80_(1).jpg) |
| `kingdom-mungyeong-gates` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Mungyeong_Saejae_Open_Film_Set.jpg) |
| `hero-busan-investigation` | 기존 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Gamcheon_Cultural_Village,_Busan.jpg) |
| `architecture-seoul-first-love` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Jeongneung_Jeongjagak.jpg) |
| `christmas-gunsan-photo` | 대체 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://www.kogl.or.kr/recommend/recommendDivView.do?division=img&oc=&recommendIdx=38018) |
| `my-mister-yongsan-walk` | 일러스트 | Hangangno and Ichon-ro 29-gil, Seoul | 백빈건널목·이촌로29길의 정확한 장소 사진이나 같은 동네 대체 사진의 재사용 조건을 확인하지 못함. [기존 출처](https://english.visitseoul.net/attractions/BaekbinRailroadCrossing/ENPhmlx6l) |
| `navillera-seoul-remember` | 대체 | Filming location | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:%EC%95%99%EC%B9%B4%EB%9D%BC%EA%B3%B5%EC%9B%90_%EC%A0%84%EA%B2%BD_02.jpg) |
| `love-rain-daegu-three-seconds` | 일러스트 | Daemyeong Campus, Daegu | 대명캠퍼스 사진의 허가를 확인하지 못함. 성서캠퍼스 및 앞산에서 본 넓은 대명동 전경은 장소 불일치 또는 범위가 넓어 제외. [기존 출처](https://ameblo.jp/daegusns2014/entry-12225961787.html) |
| `winter-sonata-chuncheon-promise` | 대체 | Nearby scenery | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:%EA%B3%B5%EC%A7%80%EC%B2%9C_%EC%95%BC%EA%B2%BD_(2023).jpg) |
| `coffee-prince-buam-quiet-heart` | 대체 | Nearby scenery | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Korea-Seoul-Changuimun-01.jpg) |
| `moon-lovers-pocheon-crossing-time` | 대체 | Filming location | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Art_Valley_In_Korea_(65750913).jpeg) |
| `autumn-heart-sokcho-near-miss` | 대체 | Nearby scenery | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Abai_Village.jpg) |
| `boys-flowers-daegu-shinhwa` | 일러스트 | Daemyeong-dong, Daegu | 대명캠퍼스 사진의 허가를 확인하지 못함. 다른 캠퍼스와 대구 도심 전경을 이 장소의 대체 사진으로 사용하지 않음. [기존 출처](https://tour.daegu.go.kr/file/7999575debef43ea8705141c1a7f7154.pdf) |
| `misaeng-seoul-square-first-day` | 기존 유지 | Filming location | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Downtown_Seoul_(2)_(41087270502).jpg) |
| `avengers-sevit-lab` | 기존 유지 | Filming location | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Korea_Sevit_Island_15_(15540663165).jpg) |
| `avengers-sangam-quinjet` | 대체 | Nearby scenery | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Sangam-dong%2C_Mapo-gu%2C_Seoul.jpg) |
| `black-panther-jagalchi-pursuit` | 기존 유지 | Filming location | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Jagalchi_Fish_Market_at_Morning.jpg) |
| `black-panther-gwangalli-night` | 기존 유지 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:2012_Gwangalli_Beach.jpg) |
| `past-lives-gwacheon-memory` | 일러스트 | MMCA Gwacheon sculpture park | 원 글의 공공누리는 텍스트에만 적용. 사진 권한 별도 확인 필요. [기존 출처](https://www.korea.kr/briefing/policyBriefingView.do?newsId=148784339) |
| `broker-jeonpo-first-choice` | 대체 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Phone_booth_at_bus_stop_Jeonpo_Samgeori.jpg) |
| `oldboy-choryang-dumpling-clue` | 대체 | Nearby scenery | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Chinatown_in_Busan_1.jpg) |
| `train-to-busan-bujeon-escape` | 대체 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Korail_Bujeon_Station.jpg) |
| `twentieth-century-gyeongju-school-trip` | 기존 유지 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Cheomseongdae-Observatorium.jpg) |
| `moonlight-suwon-palace-days` | 기존 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Bongsudang_Hall_of_the_Hwaseong_Palace_IMG_2109.jpg) |
| `liberation-seonghwan-small-moments` | 기존 유지 | Filming location | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Seonghwan_Station_20240720_01.jpg) |
| `host-ichon-final-pursuit` | 기존 유지 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Wonhyo_Bridge.jpg) |
| `little-forest-gunwi-homecoming` | 기존 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://www.welchon.com/web/lay1/program/S1T11C24/travelHistory/view.do?bbs_idx=2211247) |
| `ode-to-father-busan-kept-promise` | 기존 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Kkotbuninae.jpg) |
| `romantic-pocheon-doldam-doorstep` | 기존 유지 | Filming location | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [사진 출처](https://jamesdreaming.tistory.com/101) |
| `watermelon-gangneung-first-guitar` | 기존 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:2016년_7월_26일_봉봉방앗간_DSC03943.jpg) |
| `another-oh-songdo-lonely-walk` | 기존 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Canal_City_Fountain,_Songdo,_Incheon.jpg) |
| `goblin-incheon-summons` | 기존 유지 | Filming location | [CC BY-SA 1.0](https://creativecommons.org/licenses/by-sa/1.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:드라마_도깨비_한미서점1.jpg) |
| `lovely-sapgyoho-second-ride` | 기존 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://commons.wikimedia.org/wiki/File:Sapgyoho_amusement_park,_Dangjin,_South_Chungcheong_Province,_South_Korea.jpg) |
| `queen-irwol-rooftop-garden` | 기존 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) · [사진 출처](https://commons.wikimedia.org/wiki/File:Inside_Irwol_Arboretum_Upstairs.jpg) |
| `cloy-yeongwol-first-flight` | 기존 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/license.do) · [사진 출처](https://www.kogl.or.kr/recommend/recommendDivView.do?division=img&recommendIdx=2438) |
| `hometown-wolpo-first-meeting` | 일러스트 | Wolpo Beach, Pohang | 제3자 복제 TourAPI 메타데이터만 있음. 사진별 공식 허가 확인 필요. [기존 출처](https://infotravelog.com/places/22083) |
| `summer-onbit-documentary-retreat` | 기존 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/license.do) · [사진 출처](https://support.nonsan.go.kr/kor/html/sub03/030106.html?mode=V&no=bb5b20fcc0edf0ad2fa5aa68c0b16d38) |
| `my-love-star-petite-france-kiss` | 기존 유지 | Filming location | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.en) · [사진 출처](https://commons.wikimedia.org/wiki/File:Petit-france-korea351022.jpg) |
| `business-proposal-jayu-promise` | 기존 유지 | Filming location | [Public domain](https://commons.wikimedia.org/wiki/Template:PD-user-en) · [사진 출처](https://commons.wikimedia.org/wiki/File:Jayuwalkway.jpg) |
| `king-the-land-parnas-lobby` | 기존 유지 | Filming location | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [사진 출처](https://baonana.tistory.com/107) |
| `true-beauty-namhae-seaside-date` | 기존 유지 | Filming location | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.en) · [사진 출처](https://commons.wikimedia.org/wiki/File:Sangju_Eunmorae_Beach.jpg) |
| `hotel-del-luna-mokpo-front-door` | 기존 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) · [사진 출처](https://commons.wikimedia.org/wiki/File:Mokpo_Modern_History_Museum_(Building_1)_20241005_001.jpg) |
| `goblin-yongdap-fateful-meeting` | 기존 유지 | Nearby walk | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [사진 출처](https://pxhere.com/en/photo/1635062) |
| `vincenzo-seongsu-coffee-truce` | 기존 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://www.kogl.or.kr/recommend/recommendDivView.do?division=img&recommendIdx=112698) |
| `vincenzo-chungju-riverside-confession` | 기존 유지 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:CS-Sujupalbong.jpg) |
| `mr-sunshine-andong-lets-love` | 기존 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://korean1.visitkorea.or.kr/enu/nphotogallery/photo.kto?func_name=photo_view&newphotoDTO.photo_code=1917176202211029k&newphotoDTO.searchWord=&newphotoDTO.sub_menu=new) |
| `glory-cheongna-board-of-revenge` | 기존 유지 | Filming location | [KOGL Type 1](https://www.kogl.or.kr/info/licenseType1.do) · [사진 출처](https://www.ifez.go.kr/promote/pst/view.do?pst_id=scene_photo&pst_sn=664949) |
| `okay-incheon-first-impressions` | 기존 유지 | Filming location | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [사진 출처](https://small17dae1.tistory.com/233) |
| `winter-sonata-yongpyong-mountain-love` | 기존 유지 | Filming location | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Yongpyong_Ski_Resort_Oct_2014_02.JPG) |
| `parasite-noryangjin-pizza-scheme` | 일러스트 | Noryangjin, Seoul | 제3자 복제 TourAPI 메타데이터만 있음. 사진별 공식 허가 확인 필요. [기존 출처](https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=215373) |
| `itaewon-yiseo-stairs-rooftop` | 기존 유지 | Filming location | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [사진 출처](https://urbanerd.tistory.com/entry/%EC%84%9C%EC%9A%B8-%ED%81%B4%EB%9F%BD-%EC%9E%90%EC%9D%B4%EC%96%B8-%EC%9D%B4%EC%8A%AC%EB%9E%8C%EC%82%AC%EC%9B%90-%EC%9A%B0%EC%82%AC%EB%8B%A8%EA%B8%B8-%EC%9D%B4%ED%83%9C%EC%9B%90%EA%B1%B0%EB%A6%AC-%EB%85%B9%EC%82%AC%ED%8F%89-%EB%B3%B4%EB%8F%84%EC%9C%A1%EA%B5%90-%EA%B2%BD%EB%A6%AC%EB%8B%A8%EA%B8%B8-%EB%A7%88%EC%9D%8C%EA%B3%BC-%EB%A7%88%EC%9D%8C-%EB%B9%84%EC%8A%A4%ED%85%8C%EA%B9%8C-%EC%B9%B4%ED%8E%98-%EC%8A%A4%ED%83%A0%EB%94%A9-%EC%BB%A4%ED%94%BC-%ED%8C%8C%EC%9A%B4%ED%8B%B4) |
| `avengers-gangnam-motorcycle-chase` | 기존 유지 | Filming location | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [사진 출처](https://commons.wikimedia.org/wiki/File:Gangnam-daero.jpg) |

## 새 자산 기록

새로 받은 41개 파일의 원 출처, 내려받은 URL, 저자, 라이선스, 픽셀 크기, Blob URL과 SHA-256은 [reviewed-image-assets.json](reviewed-image-assets.json)에 보존했다. 이 중 40개 파일을 49개 투어에 사용한다. 익선동 사진 1개는 해당 투어의 실제 서울책보고 사진을 확보한 뒤 사용을 중단했다. 기존 허용 사진 36개와 합쳐 공개 승인 목록에는 사진 76개가 있다.

새 WebP 파일은 총 11,546,538바이트다. 41개 파일 모두 저장 매니페스트의 해시와 일치한다. 초원사진관과 호천마을 사진은 공식 게시자가 공개한 미리보기 파일을 사용하며, 원본 다운로드의 로그인이나 이용 신청 절차를 우회하지 않았다. 초원사진관 사진은 760×507픽셀로 확대하지 않았다. 호천마을 사진은 2019년 방문객용 남일바 재현 전시로, 실제 촬영 옥상이 아니라는 점을 표시한다.

투어별 최종 이미지, 캡션, 권리 표시는 [approved-images.json](../src/domains/drama/data/approved-images.json)이 공개 화면에 전달한다. 보류한 15개 투어의 원본 이미지는 코드의 기존 데이터와 Blob 감사 기록에 남아 있지만 승인 목록에는 없다.

이 문서는 콘텐츠 권한을 점검한 기록이다. AdSense의 승인이나 거절 사유를 나타내지 않는다.
