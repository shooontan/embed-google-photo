// @flow
import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Message from './Message';

test('Form Component', () => {
  let testRenderer = TestRenderer.create(<Message message="" />);
  expect(testRenderer).toMatchSnapshot();

  testRenderer = TestRenderer.create(<Message message="this is Message Component Text" />);
  expect(testRenderer).toMatchSnapshot();
});
