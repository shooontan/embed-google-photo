// @flow
import * as React from 'react';
import styled from 'styled-components';
import onClick from '../actions/onClick';
import Button from './Button';
import Form from './Form';
import Loading from './Loading';
import Message from './Message';
import ListItems from './ListItems';
import uid from '../libs/uid';
import type { ResultData } from './ListItems/ListItems';

type Props = {
  value: string,
  loading: boolean,
  message: string,
  results: Array<ResultData>,
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

  const handleClick = async () => {
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
        uid: uid(),
      });

      setMessage('');
    } catch (err) {
      addResult({
        url: '',
        originalUrl: value,
        error: true,
        errorMessage: 'error',
        uid: uid(),
      });
    } finally {
      // reset
      updateValue('');
      setLoadingState(false);
    }
  };

  return (
    <StyledMain>
      <MainInner>
        <FormWrapper>
          <Form
            value={value}
            onChange={(e) => {
              updateValue(e.target.value);
            }}
            onKeyPress={async (e) => {
              const enterCode = 13;
              if (e.charCode !== enterCode) {
                return;
              }
              await handleClick();
            }}
            placeholder="https://photos.app.goo.gl/your-share-photo-url"
          />
        </FormWrapper>
        <Button
          title="Get"
          onClick={async () => {
            await handleClick();
          }}
        />
        <Message message={message} />
      </MainInner>
      <ResultsWrapper>
        <Loading loading={loading} />
        <ListItems items={reversedResults} />
      </ResultsWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  margin-top: -150px;

  @media (max-width: 599px) {
    margin-top: -140px;
    padding: 0 0.5em;
  }
`;

const MainInner = styled.div`
  padding-bottom: 100px;
  width: 100%;
  text-align: center;

  @media (min-width: 600px) and (max-width: 860px) {
    padding: 0 0.5em 70px;
  }

  @media (max-width: 599px) {
    padding: 0 0 40px;
  }
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
  padding: 0 0 40px;
`;

export default Main;
