// @flow
import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from './Form';

Enzyme.configure({ adapter: new Adapter() });

test('Form Component', () => {
  let testRenderer = TestRenderer.create(<Form />);
  let testTree = testRenderer.toJSON();
  expect(testTree).toMatchSnapshot();

  testRenderer = TestRenderer.create(<Form value="test form" />);
  testTree = testRenderer.toJSON();
  expect(testTree).toMatchSnapshot();

  const mock = jest.fn();
  testRenderer = shallow(<Form onChange={mock} />);
  testRenderer.find('input').simulate('change');
  expect(mock).toHaveBeenCalled();
});
