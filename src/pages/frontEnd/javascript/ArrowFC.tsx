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

const ArrowFC  = () => {
    const browser = useMemo(() => (
      <>
        <Li>
            <A href="https://codepen.io/kamsyyongho/pen/MWzVXXO?editors=0012" target="_blank" rel="noopener noreferrer">
                javascript call 예시
            </A>

        </Li>
        <Li>
            <A href="https://codepen.io/kamsyyongho/pen/MWzVXXr?editors=0011" target="_blank" rel="noopener noreferrer">
                javascript 화살표 함수에서의 this
            </A>
        </Li>
        <Li>
            <A href="https://codepen.io/kamsyyongho/pen/VwVXByj?editors=0011" target="_blank" rel="noopener noreferrer">
                객체 리터럴의 반환
            </A>
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
  
  export default ArrowFC