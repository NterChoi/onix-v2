---
trigger: always_on
---

# NestJS Structure & Coding Rules

## Architecture
- 모든 모듈은 `src/modules` 하위에 위치시킨다.
- 계층 구조를 엄격히 분리한다: Controller -> Service -> Repository -> Entity.
- Service 내부에서 다른 도메인의 Repository를 직접 참조하지 않고, 필요시 해당 도메인의 Service를 주입받는다.

## Naming Convention
- 파일명: `kebab-case` (예: `user-profile.service.ts`)
- 클래스명: `PascalCase` (예: `UserProfileService`)
- 변수/함수명: `camelCase` (예: `getUserById`)

## Validation
- 모든 POST/PUT 요청은 DTO를 통해 검증하며, `class-validator`를 필수로 사용한다.
- API 응답은 직접 객체를 반환하지 않고, `common/dto`에 정의된 공통 형식을 사용한다.