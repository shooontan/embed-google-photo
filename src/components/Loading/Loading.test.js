// @flow
import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Loading from './Loading';

test('Form Component', () => {
  let testRenderer = TestRenderer.create(<Loading loading />);
  let testTree = testRenderer.toJSON();
  expect(testTree).toMatchSnapshot();

  testRenderer = TestRenderer.create(<Loading loading={false} />);
  testTree = testRenderer.toJSON();
  expect(testTree).toMatchSnapshot();
});
