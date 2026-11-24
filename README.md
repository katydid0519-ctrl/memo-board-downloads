# 메모 보드 다운로드 페이지

Windows x64 EXE, macOS Apple Silicon·Intel ZIP, Linux x64 AppImage용 메모 보드 1.12.0을 안내한다. 공개 GitHub Release에 있는 파일 네 개, 릴리즈 노트 및 SHA-256 목록을 `site/index.html`에서 연결한다.

Netlify는 `katydid0519-ctrl/memo-board-downloads`의 `main` 브랜치와 연결되어 있다. `netlify.toml`의 게시 폴더는 `site`이며 별도 빌드 명령은 없다.

캘린더 소개는 Google·Outlook 일정의 읽기 전용 연결, 앱 전용 내 일정과 날짜를 적은 메모의 일정 등록을 설명한다. `site/media/calendar.webp`는 격리된 프로필의 월간 달력에 예시 일정만 표시한 화면이다.

새 버전을 올릴 때는 검증한 GitHub Release 자산을 먼저 공개하고 HTML의 표시 버전과 링크를 함께 변경한다. 실제 앱 화면이 바뀌면 별도 테스트 프로필의 샘플 메모로 네 테마 미리보기를 갱신한다. 공개 미리보기는 `site/media`, 글꼴과 라이선스는 `site/fonts`에 있다. 저장소 변경 후 운영 사이트에서 테마 전환, 네 파일과 체크섬 링크를 확인한다.
