// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { compose, withState, withHandlers } from 'recompose';
import Button from './components/Button';
import Form from './components/Form';
import Loading from './components/Loading';
import ListItems from './components/ListItems';
import type { Props as Result } from './components/ListItems';
import onClick from './actions/onClick';

const Enhance = compose(
  withState('value', 'updateValue', ''),
  withState('loading', 'setLoadingState', false),
  withState('results', 'updateResults', []),
  withHandlers({
    addResult: ({ updateResults }) => (data) => {
      updateResults(results => results.concat(data));
    },
    resetResults: ({ updateResults }) => () => {
      updateResults([]);
    },
  }),
);

type Props = {
  value: string,
  loading: boolean,
  results: Array<Result>,
  updateValue: Function,
  setLoadingState: Function,
  addResult: Function,
};

const App = ({
  value, loading, results, updateValue, setLoadingState, addResult,
}: Props) => (
  <div>
    <Form
      value={value}
      onChange={(e) => {
        updateValue(e.target.value);
      }}
    />
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
    <Loading loading={loading} />
    <ListItems items={results} />
  </div>
);

export default hot(module)(Enhance(App));
