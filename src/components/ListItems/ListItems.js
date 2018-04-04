// @flow
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import Error from '../Error';
import ImageBox from './ImageBox';

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
      <ImageBox url={url} />
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

const DetailBox = styled.div`
  flex: 1;
  font-size: 14px;
  word-break: break-all;
`;

const EmbedUrl = styled.p``;

export default ListItems;
