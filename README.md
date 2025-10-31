## React 퀴즈 앱 (Vite + React + TypeScript)

`useState`로 점수와 진행 상태를 관리. 버튼 클릭으로 다음 문제로 이동, 마지막에 최종 점수를 결과 화면으로 보여줌.

## 실행방법

1) 의존성 설치
npm install

2) 로컬 실행
npm run dev

Vite 개발 서버 주소 http://localhost:5173

## 빌드
npm run build


## 폴더구조

.
├─ index.html
├─ package.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
├─ .gitignore
├─ src
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ styles.css
│  ├─ data
│  │  └─ questions.ts
│  └─ components
│     ├─ Quiz.tsx
│     └─ Result.tsx


## 출처
vite문서 : `https://vitejs.dev/`
Cursor AI (https://www.cursor.sh)
- 프로젝트 초기 세팅 및 필요한 폴더 구조 생성 시 참고

ChatGPT (https://chat.openai.com
)
- 주요 코드(컴포넌트 구성, 퀴즈 데이터 관리, 정답 판정 로직, 상태관리 등) 코드 구현 참고

- React의 useState와 props를 활용한 상태 관리, 결과 페이지로 넘어가는 기능 코드 작성 도움 받음




