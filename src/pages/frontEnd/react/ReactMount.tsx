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
            React에서 "mount"는 컴포넌트가 DOM에 추가되어 브라우저에 렌더링되는 과정을 가리킵니다. 
            React 컴포넌트는 ReactDOM.render() 메서드를 사용하여 DOM에 마운트(추가)되어 화면에 표시됩니다.
        </Li>
        <Li>
            React 컴포넌트의 마운트 과정은 다음과 같이 이루어집니다:
        </Li>
        <Li>
            1.JSX 작성: 먼저, React 컴포넌트를 JSX 문법으로 작성합니다. 
            JSX는 JavaScript와 XML을 결합한 문법으로, 컴포넌트의 UI를 표현합니다.
        </Li>
        <Li>
            2.컴포넌트 생성: JSX로 작성된 컴포넌트를 JavaScript 객체로 변환하고, 
            해당 컴포넌트의 인스턴스를 생성합니다.
        </Li>
        <Li>
            3.DOM에 마운트: ReactDOM.render() 메서드를 사용하여 컴포넌트를 DOM에 마운트(추가)합니다. 
            이때, 마운트할 대상 DOM 요소를 지정해야 합니다.
        </Li>
        <Li>
            4.렌더링: 컴포넌트가 마운트되면, render() 메서드가 호출되어 JSX를 기반으로 가상 DOM(React의 Virtual DOM)을 생성하고, 
            실제 DOM에 변경된 부분만 업데이트합니다.
        </Li>
        <Li>
            5.이벤트 처리 및 상태 변화: 사용자와의 상호작용이나 상태(State)의 변화에 따라 컴포넌트가 다시 렌더링될 수 있습니다. 
            이때, React는 가상 DOM을 사용하여 효율적으로 변경된 부분만 실제 DOM에 업데이트합니다.
        </Li>
        <Li>
            6.Unmount: 마운트된 컴포넌트가 제거되어 DOM에서 사라질 때에는 ReactDOM.unmountComponentAtNode() 
            메서드를 사용하여 컴포넌트를 언마운트(unmount)할 수 있습니다.
        </Li>
        <Li>
            React에서 "마운트"는 컴포넌트의 생성과 초기 렌더링을 포함한 프로세스를 가리키며, 
            컴포넌트가 처음으로 화면에 나타날 때의 과정을 의미합니다.
        </Li>
        <Li>
            componentDidMount는 React 컴포넌트의 생명주기(Lifecycle) 메서드 중 하나로, 
            컴포넌트가 DOM에 마운트된 후에 호출되는 메서드입니다. 
            따라서 위에서 설명한 "React mount" 과정 중에서 componentDidMount는 DOM에 마운트된 후에 수행됩니다.
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