// @flow
import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });

test('Button', () => {
  let testRenderer = TestRenderer.create(<Button />);
  let testTree = testRenderer.toJSON();
  expect(testTree).toMatchSnapshot();

  testRenderer = TestRenderer.create(<Button title="Submit!!!" />);
  testTree = testRenderer.toJSON();
  expect(testTree).toMatchSnapshot();

  const mock = jest.fn();
  testRenderer = shallow(<Button onClick={mock} />);
  testRenderer.find('button').simulate('click');
  expect(mock).toHaveBeenCalled();
});
