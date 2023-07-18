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

const ReactSt  = () => {
    const browser = useMemo(() => (
      <>
        <Li>
          함수형 컴포넌트의 장점:
        </Li>
        <Li>
          1.간결성: 함수형 컴포넌트는 함수로 정의되기 때문에 코드가 더 간결하고 읽기 쉽습니다. 
          클래스 기반 컴포넌트에 비해 문법이 간단하고 적은 코드로 컴포넌트를 작성할 수 있습니다.
        </Li>
        <Li>
          2.성능: 함수형 컴포넌트는 React의 최신 기능인 Hooks를 사용할 수 있으며, 
          Hooks를 통해 상태 관리와 생명주기와 관련된 기능을 활용할 수 있습니다. 
          Hooks를 효율적으로 사용하면 불필요한 렌더링을 최소화하고 성능을 향상시킬 수 있습니다.
        </Li>
        <Li>
          3.테스트 용이성: 함수형 컴포넌트는 순수 함수로 작성되기 때문에 테스트하기 쉽습니다. 
          함수 단위로 테스트할 수 있고, 의존성 주입과 같은 테스트 기법을 적용하기 용이합니다.
        </Li>
        <Li>
          클래스 기반 컴포넌트의 장점:
        </Li>
        <Li>
          1.기능 다양성: 클래스 기반 컴포넌트는 React의 생명주기 메서드를 통해 더 세밀한 컨트롤이 가능합니다. 
          componentDidMount, componentDidUpdate, componentWillUnmount와 같은 생명주기 메서드를 사용하여 
          컴포넌트의 상태 변화에 따른 동작을 관리할 수 있습니다.
        </Li>
        <Li>
          2.상속과 재사용성: 클래스 기반 컴포넌트는 상속을 통해 다른 컴포넌트로부터 코드를 상속하고 재사용할 수 있습니다. 
          상속을 통해 코드의 재사용성과 구조화를 높일 수 있습니다.
        </Li>
        <Li>
          3.더 큰 커뮤니티 지원: 클래스 기반 컴포넌트는 React의 초기부터 사용되어 왔고, 
          더 큰 커뮤니티와 생태계의 지원을 받을 수 있습니다. 
          따라서 문제 해결과 관련된 리소스와 도구, 라이브러리를 더 쉽게 찾을 수 있습니다.   
        </Li>
        <Li>
          추가적으로, React에서는 주로 함수형 컴포넌트와 Hooks를 권장하고 있으며, 함수형 컴포넌트의 사용이 늘어나고 있습니다. 
          함수형 컴포넌트는 성능과 코드 간결성 면에서 많은 이점을 제공하며, 
          Hooks를 통해 클래스 기반 컴포넌트와 비슷한 기능을 구현할 수 있습니다. 
          그러나 프로젝트의 특성과 요구사항에 따라 클래스 기반 컴포넌트를 선택할 수도 있습니다.
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
  
  export default ReactSt