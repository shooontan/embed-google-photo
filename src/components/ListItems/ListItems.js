// @flow
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { compose, withState } from 'recompose';
import styled from 'styled-components';
import Error from '../Error';
import ImageBox from './ImageBox';
import Checkbox from '../Form/CheckBox';
import FormNumber from '../Form/FormNumber';

import * as gpp from '../../libs/google-photo-params';

export type ResultData = {
  uid: string, // eslint-disable-line
  url: string,
  originalUrl: string,
  error: boolean,
  errorMessage: string,
};

export type Props = ResultData & {
  width: number,
  height: number,
  original: boolean,
  center: boolean,
  setOriginal: Function,
  setCenter: Function,
  updateWidth: Function,
  updateHeight: Function,
};

const Enhance = compose(
  withState('original', 'setOriginal', false),
  withState('center', 'setCenter', false),
  withState('width', 'updateWidth', 300),
  withState('height', 'updateHeight', 200),
);

export const ListItemComponent = (props: Props) => {
  const {
    url,
    originalUrl,
    error,
    errorMessage,
    width,
    height,
    original,
    center,
    setOriginal,
    setCenter,
    updateWidth,
    updateHeight,
  } = props;

  let buildOpt = {};
  if (original) {
    buildOpt = {
      d: true,
    };
  } else {
    buildOpt = {
      w: width || false,
      h: height || false,
      c: center || false,
    };
  }

  const buildUrl = gpp.buildUrl(url, buildOpt);

  return (
    <StyledListItem>
      <ImageBox url={url} buildOpt={buildOpt} />
      <DetailBox>
        <p>{originalUrl}</p>
        <EmbedUrl>{buildUrl}</EmbedUrl>
        <Error error={error} message={errorMessage} />
        {!error && (
          <div>
            <Checkbox
              label="original"
              defaultChecked={false}
              onChange={(e) => {
                setOriginal(e.target.checked);
              }}
            />
            <Checkbox
              label="center"
              defaultChecked={false}
              disabled={original}
              onChange={(e) => {
                setCenter(e.target.checked);
              }}
            />
            <FormNumber
              label="width"
              disabled={original}
              value={width}
              onChange={(e) => {
                updateWidth(+e.target.value);
              }}
            />
            <FormNumber
              label="height"
              disabled={original}
              value={height}
              onChange={(e) => {
                updateHeight(+e.target.value);
              }}
            />
          </div>
        )}
      </DetailBox>
    </StyledListItem>
  );
};

const ListItem = Enhance(ListItemComponent);

const ListItems = ({ items }: { items: Array<ResultData> }) => {
  const listItems = items.map(item => <ListItem key={item.uid} {...item} />);
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

  p {
    margin: 0 0 1em;
  }
`;

const EmbedUrl = styled.p``;

export default ListItems;
