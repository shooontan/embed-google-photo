// @flow
import * as React from 'react';
import styled from 'styled-components';
import onClick from '../actions/onClick';
import Button from './Button';
import Form from './Form';
import Loading from './Loading';
import ListItems from './ListItems';
import type { Props as Result } from './ListItems/ListItems';

type Props = {
  value: string,
  loading: boolean,
  results: Array<Result>,
  updateValue: Function,
  setLoadingState: Function,
  addResult: Function,
};

const Main = ({
  value, loading, results, updateValue, setLoadingState, addResult,
}: Props) => {
  // reverse result array
  const reversedResults = results.slice().reverse();
  return (
    <StyledMain>
      <MainInner>
        <FormWrapper>
          <Form
            value={value}
            onChange={(e) => {
              updateValue(e.target.value);
            }}
            placeholder="https://photos.app.goo.gl/your-share-photo-url"
          />
        </FormWrapper>
        <Button
          title="get"
          onClick={async () => {
            if (!value) {
              return;
            }

            setLoadingState(true);
            try {
              const imgUrl = await onClick(value);
              addResult({
                url: imgUrl,
                originalUrl: value,
                error: false,
                errorMessage: '',
              });
              updateValue('');
            } catch (err) {
              addResult({
                url: '',
                originalUrl: value,
                error: true,
                errorMessage: 'error',
              });
            } finally {
              setLoadingState(false);
            }
          }}
        />
      </MainInner>
      <ResultsWrapper>
        <Loading loading={loading} />
        <ListItems items={reversedResults} />
      </ResultsWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.main``;

const MainInner = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  width: 100%;
  text-align: center;
`;

const FormWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
`;

const ResultsWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export default Main;
