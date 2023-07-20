import React, { useMemo } from 'react';
import styled from 'styled-components';

const Li = styled.li`
  position: relative;
  margin-top: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: blue;
`;

const A = styled.a`
    color: blue;
`;

const ReactMount  = () => {
    const browser = useMemo(() => (
      <>
        <Li>
            React Hooks는 React 버전 16.8에서 도입된 기능으로서, 함수형 컴포넌트에서 상태(state)와 
            라이프사이클과 같은 React 기능을 사용할 수 있도록 해줍니다. 
            이전에는 상태 관리를 위해 클래스형 컴포넌트를 사용해야 했지만, 
            React Hooks를 사용하면 함수형 컴포넌트에서도 상태를 관리하고 다양한 기능을 수행할 수 있게 되었습니다.
        </Li>
        <Li>
            React Hooks를 사용하면 다음과 같은 기능들을 활용할 수 있습니다:
        </Li>
        <Li>
            1.useState: useState는 상태(state)를 관리하기 위한 Hook입니다. 
            함수형 컴포넌트 내에서 상태 변수와 해당 상태를 변경하는 함수를 정의하여 상태를 간단하게 관리할 수 있습니다.
        </Li>
        <Li>
            2.useEffect: useEffect는 라이프사이클 메서드와 비슷한 역할을 하는 Hook으로서, 
            컴포넌트 렌더링 이후에 특정 작업을 수행하거나 상태의 변경에 따라 효과를 주는 등의 작업을 처리할 수 있습니다.
        </Li>
        <Li>
            3.useContext: useContext는 React의 Context API를 사용하여 전역적으로 상태를 공유하고 사용할 때 사용하는 Hook입니다.
        </Li>
        <Li>
            4.useReducer: useReducer는 useState 대신에 복잡한 상태 로직을 관리할 때 사용되는 Hook입니다.
        </Li>
        <Li>
            5.useCallback: useCallback은 메모이제이션된 콜백 함수를 생성하여 불필요한 렌더링을 방지할 때 사용합니다.
        </Li>
        <Li>
            6.useMemo: useMemo는 메모이제이션된 값을 계산하여 불필요한 계산을 방지할 때 사용합니다.
        </Li>
        <Li>
            7.useRef: useRef는 DOM 요소에 접근하거나 컴포넌트가 렌더링되어도 유지해야 할 값들을 관리할 때 사용합니다.
        </Li>
        <Li>
            React Hooks를 사용하면 함수형 컴포넌트에서도 상태 관리와 라이프사이클과 같은 기능들을 보다 쉽게 사용할 수 있으며, 
            코드의 가독성과 유지보수성을 향상시킬 수 있습니다. 
            따라서 최신 버전의 React에서는 함수형 컴포넌트와 Hooks를 함께 사용하는 것이 추천되는 방식입니다.
        </Li>
      </>
    ), [])


    return (
      <div>
        <ul>
          {browser}
        </ul>
      </div>
    )
  }
  
  export default ReactMount