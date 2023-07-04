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

const P03  = () => {
    const browser = useMemo(() => (
      <>
        <Li>
          웹 브라우저는 사용자가 인터넷에서 웹 사이트에 액세스하고 상호 작용할 수 있도록 하는 소프트웨어 응용 프로그램입니다. 
          웹 탐색, 웹 페이지 렌더링 및 스크립트 실행을 위한 사용자 인터페이스를 제공합니다. 
          브라우저 작동 방식에 대한 자세한 설명은 다음과 같습니다.
        </Li>
       <Li>
        01.사용자 인터페이스: 브라우저의 사용자 인터페이스에는 주소 표시줄, 뒤로 및 앞으로 버튼, 책갈피, 탭, 
        다양한 설정 및 사용자 지정 옵션과 같은 요소가 포함됩니다. 
        사용자는 이 인터페이스를 통해 브라우저와 상호 작용하여 웹을 탐색합니다.
       </Li>
       <Li>
        02.주소 표시줄 및 URL 구문 분석: 사용자가 주소 표시줄에 URL(Uniform Resource Locator)을 입력하거나 
        링크를 클릭하면 브라우저가 URL을 구문 분석하여 프로토콜(예: HTTP, HTTPS), 도메인 이름과 같은 중요한 구성 요소를 추출합니다. 
        , 및 경로. 이 구문 분석은 브라우저가 웹 페이지를 요청하는 방법을 결정하는 데 도움이 됩니다.
       </Li>
       <Li>
        03.DNS 확인: URL을 구문 분석한 후 브라우저는 도메인 이름을 해당 IP 주소로 확인해야 합니다. 
        도메인 이름을 IP 주소로 변환하는 DNS 서버에 DNS(도메인 이름 시스템) 요청을 보냅니다. 
        이 IP 주소는 웹 서버와의 연결을 설정하는 데 사용됩니다.
       </Li>
       <Li>
        04.연결 설정: 브라우저는 DNS 확인에서 얻은 IP 주소를 사용하여 웹 서버와 TCP/IP 연결을 시작합니다. 
        소켓 연결을 설정하고 서버에 HTTP 요청을 보냅니다.
       </Li>
       <Li>
        05.HTTP 요청 및 응답: 브라우저는 원하는 리소스(예: 웹 페이지, 이미지, 스크립트) 및 원하는 작업(예: GET, POST)을 
        지정하여 웹 서버에 HTTP 요청을 보냅니다. 
        요청에는 추가 헤더, 쿠키 또는 인증 정보가 포함될 수 있습니다. 
        서버는 요청을 처리하고 요청된 콘텐츠, 상태 코드, 헤더 및 기타 메타데이터를 포함하는 HTTP 응답을 생성합니다.
       </Li>
       <Li>
        06.렌더링 엔진: 브라우저가 HTTP 응답을 받으면 콘텐츠를 렌더링 엔진으로 전달합니다. 
        렌더링 엔진은 웹 페이지의 HTML 마크업을 해석하고, CSS 스타일을 적용하고, JavaScript 코드를 실행하고, 
        페이지의 DOM(문서 개체 모델) 표현을 구성합니다.
       </Li>
       <Li>
        07.레이아웃 및 렌더링: 렌더링 엔진은 DOM 및 CSS 스타일시트를 사용하여 웹 페이지의 레이아웃을 계산합니다. 
        각 요소의 위치, 크기 및 스타일을 결정합니다. 
        그런 다음 렌더링 엔진은 브라우저의 창이나 탭에 렌더링된 요소를 칠하고 표시하여 웹 페이지의 시각적 표현을 만듭니다.
       </Li>
       <Li>
        08.JavaScript 실행: 브라우저에는 웹 페이지에 있는 JavaScript 코드를 실행하는 JavaScript 엔진이 있습니다. 
        JavaScript 엔진은 코드를 해석 및 실행하여 DOM에 대한 동적 상호 작용 및 수정, 이벤트 처리, AJAX 요청 등을 허용합니다.
       </Li>
       <Li>
        09.캐싱: 브라우저는 캐싱 메커니즘을 구현하여 이미지, 스크립트 및 스타일시트와 같은 정적 리소스의 복사본을 저장합니다. 
        캐싱을 사용하면 브라우저가 서버에 추가 요청을 하는 대신 캐시에서 이러한 리소스를 검색하여 
        페이지 로드 시간을 개선하고 네트워크 트래픽을 줄일 수 있습니다.
       </Li>
       <Li>
        10.보안: 브라우저는 웹 보안을 보장하는 데 중요한 역할을 합니다.
         악성 코드가 중요한 리소스에 액세스하지 못하도록 기본 운영 체제에서 웹 콘텐츠를 격리하는 
         샌드박싱과 같은 보안 조치를 구현합니다. 
         또한 브라우저는 보안 연결(HTTPS)을 위해 SSL/TLS 암호화를 처리하고 잠재적으로 안전하지 않은 
         웹 사이트에 대해 사용자에게 경고합니다.
       </Li>
       <Li>
        최신 브라우저에는 확장 기능, 개발자 도구, 장치 간 동기화, 멀티미디어 콘텐츠 지원과 같은 추가 기능이 포함되는 경우가 많습니다. 
        브라우저마다 다른 렌더링 엔진(예: Chrome의 Blink, Firefox의 Gecko)을 사용할 수 있지만 핵심 기능과 프로세스는 
        대부분의 브라우저에서 유사합니다.
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
  
  export default P03