export default function D0411() {
  return (
    <div>
      <ul>
        <div>
          <h1>**react typescript project 생성</h1>
          <li>npx create-react-app my-app --template typescript</li>
        </div>
        <div>
          <ul>
            <li>
              <h1>**chat gpt 에게 react prettierr 사용법을 물어보았다.</h1>{' '}
            </li>
            <li>단계 1: Prettier 설치</li>
            <li>npm install prettier --save-dev</li>
            <li>단계 2: .prettierrc 파일 생성</li>
            <li>단계 3: Prettier 설정 작성</li>
            <li>
              "trailingComma": "es5", "tabWidth": 2, "semi": true,
              "singleQuote": true, "jsxSingleQuote": false, "bracketSpacing":
              true, "jsxBracketSameLine": false, "arrowParens": "always",
              "printWidth": 80
            </li>
            <li>
              trailingComma: 객체의 마지막 속성 뒤에 쉼표를 추가할지 여부를
              결정합니다. tabWidth: 탭 간격의 크기를 설정합니다. semi:
              세미콜론을 사용할지 여부를 결정합니다. singleQuote: 문자열에 작은
              따옴표를 사용할지 여부를 결정합니다. jsxSingleQuote: JSX 속성의
              문자열에 작은 따옴표를 사용할지 여부를 결정합니다. bracketSpacing:
              객체 리터럴에서 중괄호 주위에 공백을 추가할지 여부를 결정합니다.
              jsxBracketSameLine: JSX 속성의 시작 괄호를 같은 줄에 놓을지 여부를
              결정합니다. arrowParens: 화살표 함수의 매개변수를 괄호로 감쌀지
              여부를 결정합니다. printWidth: 한 줄의 최대 길이를 설정합니다.
            </li>
            <li>단계 4: Prettier 명령어 추가(package.json)</li>
            <li>"scripts": "format": "prettier --write \"src/**/*.js\""</li>
            <li>**taillwind css</li>

            <li>단계 1: Tailwind CSS 패키지 설치 : npm install tailwindcss</li>
            <li>단계 2: Tailwind CSS 설정 파일 생성 : npx tailwindcss init</li>
            <li>단계 3: Tailwind CSS 스타일 파일 생성(index.css)</li>
            <li>@tailwind base; @tailwind components; @tailwind utilities;</li>
            <li>**반응형웹</li>
            <li>tailwind config 설정</li>
            <li>
              screens: sm: max: '767px', md: min: '768px', max: '1023px' 과 같이
              min / max 를 설정해 줘야 size를 정상적으로 인식함
            </li>
            <li>**useCallback</li>
            <li>
              React의 useCallback은 함수 컴포넌트에서 콜백 함수를 성능
              최적화하는데 사용되는 훅입니다. useCallback은 콜백 함수를
              메모이제이션하여, 해당 함수를 같은 참조로 유지하고, 불필요한
              리렌더링을 방지합니다. 이를 통해 성능 향상을 이끌어낼 수 있습니다.
              useCallback의 사용법은 다음과 같습니다:
            </li>
            <li>const handleClick = useCallback(() , []);</li>
            <li>
              위의 예시에서 handleClick 함수는 useCallback을 통해
              메모이제이션되어 같은 참조를 유지하게 됩니다. 이렇게 함으로써,
              MyComponent이 리렌더링될 때마다 handleClick 함수가 새로 생성되지
              않고, 기존의 함수 참조를 사용하게 됩니다. 또한, useCallback의 두
              번째 인자로 전달하는 배열은 콜백 함수가 의존하는 상태값들을 명시할
              수 있습니다. 해당 상태값들이 변경되었을 때만 새로운 콜백 함수를
              생성하고, 그렇지 않은 경우에는 메모이제이션된 함수를 사용합니다.
              이를 통해 불필요한 리렌더링을 방지할 수 있습니다. useCallback은
              주로 자식 컴포넌트에게 전달되는 콜백 함수들을 최적화하는데
              사용되며, 불필요한 리렌더링을 방지하여 애플리케이션의 성능을
              개선하는데 도움을 줍니다.
            </li>
          </ul>
        </div>
      </ul>
    </div>
  )
}
