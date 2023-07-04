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

const P02  = () => {
    const http = useMemo(() => (
      <>
        <Li>
          HTTP는 Hypertext Transfer Protocol의 약자입니다. 
          World Wide Web에서 정보를 교환하고 전송하는 방법을 정의하는 애플리케이션 계층 프로토콜입니다. 
          HTTP는 웹용 데이터 통신의 기반이며 웹 페이지 및 기타 리소스의 검색 및 표시를 가능하게 합니다.

          HTTP의 주요 목적은 클라이언트(일반적으로 웹 브라우저)와 서버 간의 통신을 용이하게 하는 것입니다. 
          브라우저에 웹 주소(URL)를 입력하고 Enter 키를 누르면 브라우저가 웹 사이트를 호스팅하는 서버에 대한 HTTP 요청을 시작합니다. 
          그런 다음 서버는 요청을 처리하고 HTML, 이미지, CSS, JavaScript 또는 기타 유형의 파일과 같은 
          요청된 데이터가 포함된 HTTP 응답을 다시 보냅니다.

          다음은 HTTP의 몇 가지 주요 기능 및 특성입니다.
        </Li>

        <Li>
          1.상태 비저장: HTTP는 상태 비저장 프로토콜이므로 이전 요청에 대한 정보를 유지하지 않습니다.
          각 요청-응답 주기는 독립적이며 서버는 각 요청을 별도의 트랜잭션으로 취급합니다.
        </Li>
        <Li>
          2.요청 방법: HTTP는 GET, POST, PUT, DELETE, HEAD, OPTIONS 등과 같은 다양한 요청 방법 또는 동사를 정의합니다. 
          이러한 방법은 요청된 리소스에서 수행할 원하는 작업을 지정합니다. 
          예를 들어 GET은 데이터를 검색하는 데 사용되고 POST는 데이터를 제출하는 데 사용되며 PUT은 데이터를 업데이트하는 데 사용됩니다.
        </Li>
        <Li>
          3.헤더: HTTP 요청 및 응답에는 전송되는 데이터에 대한 추가 정보를 제공하는 헤더가 포함됩니다. 
          헤더에는 콘텐츠 유형, 캐싱 지시문, 인증 토큰, 쿠키 등과 같은 세부 정보가 포함될 수 있습니다.
        </Li>
        <Li>
          4.URL: HTTP는 URL(Uniform Resource Locator)을 사용하여 웹에서 리소스를 식별하고 찾습니다. 
          URL은 프로토콜(HTTP), 서버의 도메인 이름 또는 IP 주소, 특정 리소스에 대한 경로를 지정합니다.
        </Li>
        <Li>
          5.상태 코드: HTTP 응답에는 요청 결과를 나타내는 상태 코드가 포함됩니다. 
          상태 코드는 응답을 분류하는 세 자리 숫자입니다
          (예: 성공적인 요청의 경우 200, 찾을 수 없는 경우 404, 서버 오류의 경우 500 등).
        </Li>
        <Li>
          6.보안 버전: HTTP를 암호화 및 보안 프로토콜과 결합하여 HTTPS(HTTP 보안)를 생성할 수 있습니다. 
          HTTPS는 SSL(Secure Sockets Layer) 또는 TLS(Transport Layer Security)를 사용하여 
          암호화 계층을 추가하여 클라이언트와 서버 간에 안전하고 암호화된 연결을 제공합니다. 
          HTTPS는 일반적으로 온라인 뱅킹 또는 전자 상거래와 같은 보안 트랜잭션에 사용됩니다.
        </Li>
        <Li>
          HTTP는 수년에 걸쳐 여러 버전을 거쳤으며 HTTP/1.1은 오랫동안 널리 사용되었습니다. 
          그러나 성능을 개선하고 대기 시간을 줄이며 보안을 강화하기 위해 HTTP/2 및 HTTP/3과 같은 최신 버전이 도입되었습니다.

          전반적으로 HTTP는 웹 통신의 중추를 형성하여 사용자가 브라우저를 통해 웹 리소스에 액세스하고 상호 작용할 수 있도록 합니다.
        </Li>
      </>
    ), [])

   
    return (
      <div>
        <ul>
          {http}
        </ul>
      </div>
    )
  }
  
  export default P02