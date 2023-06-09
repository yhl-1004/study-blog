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

const P01  = () => {
    const internetWork = useMemo(() => (
      <>
        <Li>
          인터넷은 정보의 전송과 교환을 가능하게 하는 상호 연결된 컴퓨터와 장치의 방대한 네트워크입니다. 
          이러한 장치 간의 통신을 가능하게 하는 하드웨어, 소프트웨어 및 프로토콜의 조합을 통해 작동합니다.
          높은 수준에서 인터넷은 다음과 같은 주요 구성 요소 및 프로세스를 사용하여 작동합니다.
        </Li>
        <Li>
          1.장치: 컴퓨터, 스마트폰, 서버, 라우터 및 기타 장치는 인터넷의 기반을 형성합니다. 
          이러한 장치는 직접 또는 Wi-Fi 또는 이더넷과 같은 네트워크를 통해 인터넷에 연결됩니다.
        </Li>
        <Li>
          2.P 주소: 인터넷에 연결된 각 장치에는 인터넷 프로토콜(IP) 주소라는 고유 식별자가 할당됩니다. 
          IP 주소는 네트워크에서 장치를 식별하고 찾는 데 도움이 되는 IPv4(예: 192.168.0.1) 또는 
          IPv6(예: 2001:0db8:85a3:0000:0000:8a2e:0370:7334)일 수 있습니다.
        </Li>
        <Li>
          3.프로토콜: 인터넷은 데이터 전송, 수신 및 해석 방법을 제어하는 ​​규칙 및 표준 집합인 다양한 프로토콜에 의존합니다. 
          가장 기본적인 프로토콜은 장치 간의 데이터 패킷 라우팅을 담당하는 인터넷 프로토콜(IP)입니다. 
          다른 중요한 프로토콜에는 TCP(Transmission Control Protocol), UDP(User Datagram Protocol), HTTP(Hypertext Transfer Protocol) 
          등이 포함됩니다.
        </Li>
        <Li>
          4.라우터: 라우터는 인터넷을 통해 네트워크 트래픽을 전달하는 장치입니다. 
          데이터 패킷의 IP 주소를 검사하고 패킷이 목적지에 도달하는 가장 효율적인 경로를 결정합니다. 
          라우터는 장치 간에 패킷을 전달하여 데이터가 네트워크를 통해 이동하도록 합니다.
        </Li>
        <Li>
          5.패킷 전환: 인터넷은 데이터를 연속 스트림으로 보내는 대신 패킷이라는 더 작은 단위로 정보를 나눕니다. 
          각 패킷에는 데이터의 일부와 필요한 주소 지정 및 제어 정보가 포함되어 있습니다. 
          이러한 패킷은 네트워크를 통해 개별적으로 전송되며 목적지에 도달하기 위해 다른 경로를 사용할 수 있습니다. 
          도착하면 원본 데이터로 다시 어셈블됩니다.
        </Li>
        <Li>
          6.인터넷 서비스 공급자(ISP): ISP는 개인과 조직에 인터넷 액세스를 제공하는 회사입니다. 
          DSL, 케이블, 광섬유 또는 무선 연결과 같은 다양한 기술을 통해 고객을 인터넷에 연결합니다. 
          ISP는 서로 다른 네트워크 간의 데이터 라우팅도 관리합니다.
        </Li>
        <Li>
          7.도메인 이름 및 DNS: DNS(도메인 이름 시스템)는 도메인 이름(예: www.example.com)을 IP 주소와 연결하는 계층적 명명 시스템입니다. 
          어려울 수 있는 IP 주소를 기억하는 대신 사용자는 도메인 이름을 입력하기만 하면 웹 사이트나 리소스에 액세스할 수 있습니다. 
          도메인 이름이 브라우저에 입력되면 DNS는 이를 해당 IP 주소로 변환하여 사용자가 원하는 웹 사이트에 연결할 수 있도록 합니다.
        </Li>
        <Li>
          인터넷은 이러한 구성 요소와 프로세스를 활용하여 전 세계적으로 정보 교환을 촉진하고 이메일, 웹 브라우징, 
          파일 공유, 비디오 스트리밍, 온라인 게임 등과 같은 서비스를 강화합니다.
        </Li>
      </>
    ), [])

    

    return (
      <div>
        <ul>
          {internetWork}
        </ul>
      </div>
    )
  }
  
  export default P01