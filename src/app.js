// @flow
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { compose, withState, withHandlers } from 'recompose';
import Main from './components/Main';
import Header from './components/Header';
import type { Props as Result } from './components/ListItems/ListItems';

const Enhance = compose(
  withState('value', 'updateValue', ''),
  withState('loading', 'setLoadingState', false),
  withState('message', 'setMessage', ''),
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
  message: string,
  results: Array<Result>,
  updateValue: Function,
  setLoadingState: Function,
  addResult: Function,
  setMessage: Function,
};

const App = (props: Props) => (
  <React.Fragment>
    <Header />
    <Main {...props} />
  </React.Fragment>
);

export default hot(module)(Enhance(App));
