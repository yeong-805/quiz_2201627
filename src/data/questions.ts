export type Question = {
  id: number;
  text: string;
  options: string[];
  answerIndex: number;
};

export const questions: Question[] = [
  {
    id: 1,
    text: 'React에서 상태 관리를 위해 사용하는 훅은?',
    options: ['useFetch', 'useState', 'useHttp', 'useStyle'],
    answerIndex: 1,
  },
  {
    id: 2,
    text: 'JSX에서 요소에 클래스를 지정할 때 사용하는 속성은?',
    options: ['class', 'classes', 'className', 'styleName'],
    answerIndex: 2,
  },
  {
    id: 3,
    text: 'React 애플리케이션의 루트 DOM 컨테이너 ID는 일반적으로?',
    options: ['app', 'root', 'container', 'main'],
    answerIndex: 1,
  },
  {
    id: 4,
    text: '리스트 렌더링에서 key 속성의 주된 목적은?',
    options: ['스타일 적용', '성능 최적화 및 식별', '이벤트 바인딩', '보안 강화'],
    answerIndex: 1,
  },
  {
    id: 5,
    text: '상태 업데이트 시 불변성을 지켜야 하는 주된 이유는?',
    options: ['가독성 향상', '리렌더 트리거 및 예측 가능성', '코드 줄이기', '메모리 절약'],
    answerIndex: 1,
  },
  {
    id: 6,
    text: 'props와 state의 올바른 설명은?',
    options: [
      'props는 외부에서 전달, state는 내부에서 관리',
      '둘 다 동일하다',
      '둘 다 외부에서만 관리한다',
      '둘 다 내부에서만 관리한다'
    ],
    answerIndex: 0,
  },
  {
    id: 7,
    text: 'useEffect의 기본 실행 타이밍은?',
    options: ['렌더 이전', 'DOM 커밋 후', '이벤트 처리 중', '서버에서만'],
    answerIndex: 1,
  },
  {
    id: 8,
    text: '이벤트 핸들러에 인자를 전달하는 올바른 방법은?',
    options: ['onClick={handle(1)}', 'onClick={() => handle(1)}', 'onClick={handle}', 'onClick="handle(1)"'],
    answerIndex: 1,
  },
];
