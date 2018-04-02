// @flow
import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Error from './Error';

test('Error Component', () => {
  let testRenderer = TestRenderer.create(<Error error={false} message="😈" />);
  let testTree = testRenderer.toJSON();
  expect(testTree).toMatchSnapshot();

  testRenderer = TestRenderer.create(<Error error message="💀" />);
  testTree = testRenderer.toJSON();
  expect(testTree).toMatchSnapshot();
});
