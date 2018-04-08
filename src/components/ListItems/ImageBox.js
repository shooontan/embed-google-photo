// @flow
import React from 'react';
import styled from 'styled-components';
import * as gpp from '../../libs/google-photo-params';

type Props = {
  url: string,
  buildOpt: { [string]: number | boolean },
};

const ImageBox = ({ url, buildOpt }: Props) => {
  if (!url) {
    return <StyledImgBox />;
  }

  const resizeUrl = gpp.buildUrl(url, { w: 140 });

  const linkOpt = Object.assign({}, buildOpt);
  if (linkOpt.d) {
    linkOpt.h = true;
  }
  const linkUrl = gpp.buildUrl(url, linkOpt);

  return (
    <StyledImgBox>
      <a href={linkUrl} target="_blank">
        <img src={resizeUrl} alt="GooglePhoto-embed-url" width={140} height="auto" />
      </a>
    </StyledImgBox>
  );
};

const StyledImgBox = styled.div`
  width: 140px;
  margin-right: 8px;

  img {
    max-width: 100%;
    height: auto;
    box-shadow: 1px 1px 9px 1px rgba(0, 0, 0, 0.1);
  }
`;

export default ImageBox;
