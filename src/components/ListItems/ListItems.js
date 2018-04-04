// @flow
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import Error from '../Error';

export type Props = {
  url: string,
  originalUrl: string,
  error: boolean,
  errorMessage: string,
};

export const ListItem = (props: Props) => {
  const {
    url, originalUrl, error, errorMessage,
  } = props;
  return (
    <StyledListItem>
      <ImgBox>
        {url && (
          <a href={url} target="_blank">
            <img src={url} alt={url} width={150} height="auto" />
          </a>
        )}
      </ImgBox>
      <DetailBox>
        <p>{originalUrl}</p>
        <EmbedUrl>{url}</EmbedUrl>
        <Error error={error} message={errorMessage} />
      </DetailBox>
    </StyledListItem>
  );
};

const ListItems = ({ items }: { items: Array<Props> }) => {
  const listItems = items.map((item, index) => <ListItem key={index} {...item} />);
  return listItems;
};

const StyledListItem = styled.div`
  display: flex;
  margin-bottom: 20px;

  &:last-child {
    margin: 0;
  }
`;

const ImgBox = styled.div`
  width: 140px;
  margin-right: 8px;

  img {
    max-width: 100%;
    height: auto;
    box-shadow: 1px 1px 9px 1px rgba(0, 0, 0, 0.1);
  }
`;

const DetailBox = styled.div`
  flex: 1;
  font-size: 14px;
  word-break: break-all;
`;

const EmbedUrl = styled.p``;

export default ListItems;
