// @flow
import * as React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderWrapper>
    <HeaderImage>
      <img
        src="https://lh3.googleusercontent.com/YVH9XLDSBYKL8KYPwywLeU8TvT9_N6X_S0kJ7-emf8Ykd_8J26wgQrID5ZTFZ1uuIshACxUCvw8_HY162KcbId5ekB_MaTuK8zpFzmkpgHLUEPsLPFczuh21yEv9gaZzyZrCO2xlag=w3200"
        alt="card"
      />
    </HeaderImage>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header``;

const HeaderImage = styled.div`
  & img {
    max-width: 100%;

    @media (max-width: 800px) {
      max-width: 800px;
    }
  }
`;

export default Header;
