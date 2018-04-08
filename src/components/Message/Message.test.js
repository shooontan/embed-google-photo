// @flow
import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Message from './Message';

test('Message Component', () => {
  let testRenderer = TestRenderer.create(<Message message="" />);
  expect(testRenderer).toMatchSnapshot();

  testRenderer = TestRenderer.create(<Message message="this is Message Component Text" />);
  expect(testRenderer).toMatchSnapshot();
});
