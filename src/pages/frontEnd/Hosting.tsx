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

const P06  = () => {
    const browser = useMemo(() => (
      <>
        <Li>
        호스팅이란 인터넷을 통해 액세스할 수 있는 서버에 웹 사이트 파일, 데이터베이스 및 기타 
        디지털 콘텐츠를 저장하고 제공하는 프로세스를 말합니다. 
        웹 사이트나 온라인 응용 프로그램을 만들 때 관련된 모든 파일과 데이터를 저장할 장소가 필요합니다. 
        그것이 호스팅이 시작되는 곳입니다.

        호스팅 서비스 공급자 또는 호스팅 회사는 전 세계 사용자가 웹 사이트에 액세스할 수 있도록 하는 데 
        필요한 인프라와 리소스를 제공합니다. 다음은 호스팅의 몇 가지 주요 측면입니다.
        </Li>
        <Li>
            01.서버 인프라: 호스팅 공급자는 웹 콘텐츠를 저장하고 제공하도록 특별히 설계된 서버 네트워크를 유지 관리합니다. 
            이러한 서버는 일반적으로 높은 가동 시간과 데이터 보호를 보장하기 위해 강력한 전원 공급 장치, 
            냉각 시스템 및 보안 조치를 갖춘 데이터 센터에 보관됩니다.
        </Li>
        <Li>
            02.저장 공간: 호스팅 서비스는 웹 사이트 파일, 데이터베이스, 이미지, 비디오 및 기타 리소스를 저장할 수 있는 디스크 공간을 제공합니다.
             사용 가능한 저장 공간의 양은 선택한 호스팅 계획과 웹 사이트의 특정 요구 사항에 따라 다릅니다.
        </Li>
        <Li>
            03.대역폭: 호스팅 공급자는 웹 사이트와 방문자 간에 전송할 수 있는 데이터 양인 대역폭을 제공합니다. 
            대역폭은 웹사이트에서 처리할 수 있는 트래픽의 양과 콘텐츠를 제공할 수 있는 속도를 결정합니다. 
            트래픽이 많은 웹사이트는 일반적으로 사용자 요청을 수용하기 위해 더 많은 대역폭이 필요합니다.
        </Li>
        <Li>
            04.서버 관리: 호스팅 회사는 하드웨어 업그레이드, 소프트웨어 업데이트, 보안 패치 및 서버 최적화를 
            포함하여 서버의 관리 및 유지 관리를 처리합니다. 
            이를 통해 서버 관리에 대한 걱정 없이 웹사이트 또는 온라인 애플리케이션 구축 및 관리에 집중할 수 있습니다.
        </Li>
        <Li>
            05.도메인 및 DNS 관리: 일부 호스팅 제공업체는 도메인 등록 서비스를 제공하여 이를 
            통해 직접 도메인 이름을 구매하고 관리할 수 있습니다.
             또한 DNS 설정을 관리하는 도구를 제공하여 도메인을 올바른 서버로 지정할 수 있습니다.
        </Li>
        <Li>
            06.보안 및 백업: 호스팅 서비스에는 종종 방화벽, DDoS 보호, 보안 연결을 위한 SSL/TLS 인증서(HTTPS)와 
            같은 사이버 위협으로부터 웹 사이트를 보호하기 위한 보안 조치가 포함됩니다. 
            또한 많은 호스팅 제공업체는 비상 시 데이터 복구를 보장하기 위해 웹 사이트 파일 및 데이터베이스의 정기적인 백업을 제공합니다.
        </Li>
        <Li>
            07.이메일 및 추가 기능: 호스팅 계획에는 도메인 이름(예: yourname@yourdomain.com)과 연결된 
            사용자 지정 이메일 주소를 만들고 관리할 수 있는 이메일 서비스도 포함될 수 있습니다. 
            일부 호스팅 제공업체는 콘텐츠 관리 시스템(CMS) 설치, 전자상거래 기능, 웹사이트 빌더 및 개발자 도구와 같은 추가 기능을 제공합니다.
        </Li>
        <Li>
            08.공유 호스팅, VPS(가상 사설 서버), 전용 서버 및 클라우드 호스팅을 포함하여 다양한 유형의 호스팅을 사용할 수 있습니다. 
            각 유형은 다양한 수준의 리소스, 제어 및 확장성을 제공하므로 필요와 예산에 가장 적합한 호스팅 솔루션을 선택할 수 있습니다.

            요약하면 호스팅은 인터넷을 통해 사용자가 웹 사이트 또는 온라인 응용 프로그램에 액세스할 수 있도록 하는 데 필요한 인프라, 
            스토리지, 대역폭 및 서버 관리를 제공합니다. 전 세계 방문자가 웹 사이트를 사용할 수 있고 안전하며 제대로 작동하는지 확인합니다.
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
  
  export default P06