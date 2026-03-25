---
trigger: always_on
---

# Git Commit & Branch Convention (Senior Standard)

## 1. Commit Message Structure (Conventional Commits)
모든 커밋 메시지는 아래의 구조를 엄격히 따릅니다.
`type(scope): subject` 형식으로 작성하며, 본문이 필요한 경우 한 줄 띄우고 작성합니다.

### Type (유형)
- **feat**: 새로운 기능 추가 (NestJS의 새로운 Module, Service, Controller 등)
- **fix**: 버그 수정
- **docs**: 문서 수정 (README.md, JSDoc, Swagger 설정 등)
- **style**: 코드 포맷팅, 세미콜론 누락 등 (로직 변경 없음)
- **refactor**: 코드 리팩토링 (기능 변경 없이 구조 개선)
- **test**: 테스트 코드 추가 및 수정
- **chore**: 빌드 업무, 패키지 매니저 설정, .gitignore 수정 등
- **perf**: 성능 개선

### Scope (범위 - 선택 사항)
- 변경이 일어난 모듈이나 레이어를 명시합니다.
- 예: `feat(auth)`, `fix(users-service)`, `docs(api-spec)`

## 2. Subject Rules (제목 작성 규칙)
- **첫 글자는 대문자**로 시작하며, **마침표(.)를 찍지 않습니다.**
- **명령형, 현재형**을 사용합니다 (Fixed X -> Fix O).
- 한국어/영어 혼용 시 팀의 룰을 따르되, Onix-v2는 **영문 작성을 원칙**으로 하되 필요한 경우 한글 설명을 병기합니다.

## 3. Branch Strategy (Git Flow / Github Flow)
- **main**: 프로덕션 배포용 (가장 안정적인 상태)
- **develop**: 다음 출시 버전을 개발하는 통합 브랜치
- **feature/**: 새로운 기능 개발 (예: `feature/sync-engine`)
- **fix/**: 버그 수정용
- **hotfix/**: 긴급 서버 장애 대응용

## 4. Commit Message Examples (실제 사례)
- `feat(notes): implement recursive tree structure for node-based layout`
- `fix(auth): resolve JWT expiration time mismatch in passport strategy`
- `refactor(sync): optimize LWW conflict resolution logic in service layer`
- `chore: update watermelon-db to v0.27.0`