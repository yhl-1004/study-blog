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
            생각해야 할것은 state를 호출하는 곳에서 관리하는게 좋으냐 . 처리하는곳에서 관리하는게 좋으냐. 
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