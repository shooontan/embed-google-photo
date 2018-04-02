// @flow
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Error from './Error';

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
    <div>
      <img src={url} alt={url} width={150} height="auto" />
      <p>{originalUrl}</p>
      <p>{url}</p>
      <Error error={error} message={errorMessage} />
    </div>
  );
};

const ListItems = ({ items }: { items: Array<Props> }) => {
  const listItems = items.map((item, index) => <ListItem key={index} {...item} />);
  return listItems;
};

export default ListItems;
