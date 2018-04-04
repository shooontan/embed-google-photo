// @flow
import * as React from 'react';
import styled from 'styled-components';
import onClick from '../actions/onClick';
import Button from './Button';
import Form from './Form';
import Loading from './Loading';
import Message from './Message';
import ListItems from './ListItems';
import type { Props as Result } from './ListItems/ListItems';

type Props = {
  value: string,
  loading: boolean,
  message: string,
  results: Array<Result>,
  updateValue: Function,
  setLoadingState: Function,
  addResult: Function,
  setMessage: Function,
};

const Main = ({
  value,
  loading,
  message,
  results,
  updateValue,
  setLoadingState,
  addResult,
  setMessage,
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
          title="Get"
          onClick={async () => {
            if (!value) {
              setMessage('');
              return;
            }

            // google photo url validation
            if (!value || !/\.\S+?\/\S+?/.test(value)) {
              setMessage(`「${value}」is invalid url`);
              return;
            }

            setLoadingState(true);

            try {
              // get google photo embed url
              const imgUrl = await onClick(value);
              addResult({
                url: imgUrl,
                originalUrl: value,
                error: false,
                errorMessage: '',
              });

              setMessage('');
            } catch (err) {
              addResult({
                url: '',
                originalUrl: value,
                error: true,
                errorMessage: 'error',
              });
            } finally {
              // reset
              updateValue('');
              setLoadingState(false);
            }
          }}
        />
      </MainInner>
      <Message message={message} />
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
  padding: 40px 0;
`;

export default Main;
