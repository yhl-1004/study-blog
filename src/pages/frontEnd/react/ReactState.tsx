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

/*
const A = styled.a`
    color: blue;
`;
*/

const A = styled.a.attrs({
    target: '_blank',
    rel: 'noopener noreferrer',
  })`
    color: blue;
  `;

const ReactState  = () => {
    const browser = useMemo(() => (
      <>
        <Li>
            <A href="https://codepen.io/kamsyyongho/pen/yLQjeRN?editors=1111" target="_blank" rel="noopener noreferrer">
                state 못된 ? 사용법
            </A>
        </Li>
        <Li>
            <A href="https://codepen.io/kamsyyongho/pen/MWzGyMQ?editors=0011" target="_blank" rel="noopener noreferrer">
                state 올바른 사용 예시
            </A>
        </Li>
        <Li>
            <A href="https://react-ko.dev/learn/thinking-in-react">react-ko.dev</A>
            에서는 부모 또는 satae관리 컴퍼넌트를 별도로 구성하는것을 권장한다.
        </Li>
        <Li>
            <A href="https://codepen.io/kamsyyongho/pen/gOQjVVo?editors=0010">state 사용 예시</A>
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
  
  export default ReactState