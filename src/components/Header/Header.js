// @flow
/* eslint-disable no-plusplus, no-param-reassign */
import * as React from 'react';
import styled from 'styled-components';
import imgs from './imgs.json';

const shuffle = (arr: Array<any>) => {
  let len = arr.length;
  while (len) {
    const index = Math.floor(Math.random() * len--);
    const temp = arr[len];
    arr[len] = arr[index];
    arr[index] = temp;
  }
  return arr;
};

const shuffleImages = shuffle(imgs);

const Header = () => {
  const Imgs = shuffleImages.map(item => <img src={item} alt="header-item" key={item} />);

  return (
    <HeaderWrapper>
      <HeaderImage>{Imgs}</HeaderImage>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  overflow: hidden;
`;

const HeaderImage = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 120%;
  max-height: 360px;
  /* filter: blur(0.5px); */
  background: #333;
  z-index: -1;

  & img {
    padding: 1px;
    max-width: 100%;

    @media (max-width: 800px) {
      max-width: 800px;
    }
  }
`;

export default Header;
