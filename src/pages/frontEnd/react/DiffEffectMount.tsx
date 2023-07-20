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

const DiffEffectMount  = () => {
    const browser = useMemo(() => (
      <>
        <Li>
            useEffect와 componentDidMount은 둘 다 React 컴포넌트의 라이프사이클 관련 메서드로서, 
            비슷한 기능을 수행하지만 사용 방법과 동작 방식에 차이가 있습니다.
        </Li>
        <Li>
            1.componentDidMount:
        </Li>
        <Li>
            componentDidMount은 클래스형 컴포넌트에서 사용되는 라이프사이클 메서드입니다.
        </Li>
        <Li>
            컴포넌트가 DOM에 마운트된 후(화면에 처음 렌더링된 후) 호출됩니다.
        </Li>
        <Li>
            주로 컴포넌트가 처음으로 화면에 나타났을 때 필요한 작업
            (예: 데이터 가져오기, 외부 라이브러리 초기화, 이벤트 리스너 등록 등)을 수행합니다.
        </Li>
        <Li>
            2.useEffect:
        </Li>
        <Li>
            useEffect는 함수형 컴포넌트에서 React Hooks를 사용하여 비슷한 기능을 수행하는 Hook입니다.
        </Li>
        <Li>
            함수형 컴포넌트에서 컴포넌트가 렌더링된 후(화면에 나타난 후) 호출되는 Hook입니다.
        </Li>
        <Li>
            useEffect는 componentDidMount와 다르게 컴포넌트가 렌더링될 때마다 실행됩니다.
        </Li>
        <Li>
            두 번째 인자로 전달된 배열을 사용하여 특정 상태나 프롭스의 변경에 따라 특정 동작을 수행할 수 있습니다.
        </Li>
        <Li>
            위의 예시에서 useEffect의 두 번째 인자로 빈 배열([])을 전달하여, 
            useEffect가 컴포넌트가 처음 렌더링된 후 한 번만 실행되도록 설정하였습니다. 
            만약 두 번째 인자로 특정 상태나 프롭스를 전달한다면, 해당 상태나 프롭스가 변경될 때마다 useEffect가 실행됩니다.
        </Li>
        <Li>
            결론적으로, componentDidMount과 useEffect는 비슷한 기능을 수행하지만, 
            사용 방법과 동작 방식에 차이가 있습니다.
            useEffect를 사용하면 함수형 컴포넌트에서도 컴포넌트 라이프사이클과 관련된 작업을 처리할 수 있으며, 
            특히 두 번째 인자를 사용하여 특정 상태의 변경에 따라 동작을 제어할 수 있습니다.
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
  
  export default DiffEffectMount