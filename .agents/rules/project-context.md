---
trigger: always_on
---

Onix-v2 Project Context & Mission (Enhanced)


  1. 기획 의도 (Vision)
   - Problem: 기존 메모 서비스의 서버 의존성으로 인한 네트워크 지연 및 데이터 주권 부재.
   - Solution: Local-first, Sync-later 아키텍처. WatermelonDB를 활용한 즉각적인 반응성 제공.
   - Goal: "내 데이터는 내 기기에" - 사용자 중심의 데이터 소유권과 오프라인 연속성 보장.


  2. 기술 철학 및 원칙 (Technical Principles) - 중요
   - Strict Typing: 백엔드(NestJS)와 프론트엔드 간의 모든 통신은 DTO 및 Interface로 엄격히 정의함.
   - Single Source of Truth: 모든 상태의 근원은 로컬 DB(WatermelonDB)이며, 서버는 '상태 동기화 및 백업'의 역할을 수행함.
   - Atomic Operations: 동기화 충돌을 방지하기 위해 데이터 변경은 원자적(Atomic)으로 처리하며, updated_at 기반의 LWW(Last Write Wins) 또는 커스텀 충돌 해결 로직을 따름.


  3. 핵심 비즈니스 로직 (Business Rules)
   - Node-based Structure:
       - 모든 데이터는 'Node' 단위로 관리됨.
       - 각 Node는 parent_id를 가질 수 있으며, 이를 통해 무한 계층 구조(Tree)를 형성함.
       - 특정 노드 이동 시 순환 참조(Circular Reference) 방지 로직이 필수임.
   - Soft Delete (Trash):
       - 사용자가 삭제한 메모는 즉시 물리적으로 삭제되지 않고 deleted_at 필드를 통해 '휴지통' 상태로 관리됨.
       - 30일(설정값) 이후 영구 삭제되거나 사용자가 직접 비울 수 있음.
   - Image & Media Handling:
       - 이미지는 서버 업로드 전 로컬에서 유효성 검사(크기, 확장자)를 수행함.
       - 에디터 내 드래그 앤 드롭 및 붙여넣기를 통한 업로드를 기본으로 지원함.
   - Memo History (Versioning):
       - 메모 수정 시 변경 이력(memo_history)을 저장하여 이전 버전으로의 복구를 지원함. (필요 시 선택적 활성화)


  4. 동기화 전략 (Sync Strategy)
   - Incremental Sync: 전체 데이터를 매번 주고받지 않고, last_pulled_at 타임스탬프 이후의 변경분만 동기화함.
   - Push & Pull: 
       - 클라이언트는 로컬 변경 사항을 서버에 push하고, 서버의 새로운 변경 사항을 pull함.
       - 오프라인 상태에서 발생한 대량의 변경 사항은 온라인 복귀 시 일괄 처리(Bulk Processing)함.


  5. UI/UX 디자인 원칙
   - Multi-platform Consistency: Web, Desktop(Electron), Mobile(Expo)에서 동일한 에디터 경험을 제공해야 함.
   - Optimistic UI: 서버 응답을 기다리지 않고 로컬 DB 업데이트를 즉시 UI에 반영하여 지연 없는 사용자 경험 제공.
   - Markdown Friendly: 모든 메모는 마크다운 형식을 기본으로 하며, 실시간 프리뷰 또는 위지윅(WYSIWYG) 경험을 제공함.


  6. 타겟 시장별 특화 전략
   - 한국 (Stability Focus): NestJS 아키텍처의 견고함과 빠른 API 반응 속도 강조.
   - 일본 (Documentation Focus): README.md 및 코드 내 JSDoc/TSDoc의 상세한 작성. 직관적인 타입 정의를 통한 협업 효율성 강조.

[백엔드 제약 사항] 
- "모든 API 응답은 WatermelonDB의 Sync 프로토콜(Pull/Push 형식)을 준수하며, changes와 timestamp를 포함한 JSON 객체 구조를 유지한다."

  ---