---
trigger: always_on
---

# Knowledge Management & Dev-Log Rules

## 1. 기록의 목적 (Core Objectives)
- **Proof of Growth**: 단순히 결과물만 내놓는 것이 아니라, 고민의 과정(Decision Making)을 증명한다.
- **Troubleshooting Archive**: 동일한 에러 발생 시 해결 시간을 단축하기 위한 나만의 '지식 창고'를 구축한다.
- **Career Asset**: 한국의 벨로그/티스토리와 일본의 Qiita/Zenn 등에 공유 가능한 수준의 고퀄리티 콘텐츠를 생산한다.

## 2. 기록해야 할 3대 요소 (The Three Pillars)
에이전트는 아래 상황이 발생하면 반드시 사용자에게 "기록 권장" 메시지를 보냅니다.

### ① 설계 근거 (Design Decisions / 設計의 根拠)
- "왜 이 라이브러리를 썼는가?", "왜 이 폴더 구조를 택했는가?"에 대한 답.
- 예: "WatermelonDB를 선택한 이유는 오프라인 우선(Local-first) 전략을 가장 잘 구현하기 위함임."

### ② 트러블 슈팅 (Troubleshooting / トラブルシューティング)
- 에러 메시지, 발생 원인, 시도했던 방법들, 그리고 최종 해결책을 기록.
- 특히 **'왜 이 에러가 발생했는지'** 원인 분석(Root Cause Analysis)에 집중.

### ③ 신규 학습 내용 (Learning Nuggets)
- 프로젝트 중 새롭게 알게 된 NestJS 기능, TypeScript 문법, DB 최적화 기법 등.

## 3. 기록 템플릿 (Recommended Format)
블로그나 옵시디언에 바로 복사해 쓸 수 있도록 아래 구조를 권장합니다.

- **Title**: [Onix-v2] {주제}
- **Context**: 어떤 기능을 구현하려 했는가?
- **Challenge**: 어떤 문제나 고민이 있었는가? (에러 코드 포함)
- **Solution**: 어떻게 해결했는가? (코드 스니펫 포함)
- **Retrospective**: 이 과정에서 배운 점은 무엇인가? (일본어 핵심 용어 병기)

## 4. 에이전트의 역할 (Agent's Duty)
- 코드를 완성한 후, 해당 로직에서 성능 최적화나 아키텍처적 고민이 있었다면 요약해서 브리핑해준다.
- 사용자가 "이거 기록해줘"라고 하면, 위 템플릿에 맞춰 마크다운 초안을 작성해준다.