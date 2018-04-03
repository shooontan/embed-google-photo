// @flow
import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import { Form } from './Form';

Enzyme.configure({ adapter: new Adapter() });

test('Form Component', () => {
  let testRenderer = TestRenderer.create(<Form />);
  expect(testRenderer).toMatchSnapshot();

  testRenderer = TestRenderer.create(<Form value="test form" placeholder="placeholder" />);
  expect(testRenderer).toMatchSnapshot();

  const mock = jest.fn();
  testRenderer = shallow(<Form onChange={mock} />);
  testRenderer
    .dive()
    .find('input')
    .simulate('change');
  expect(mock).toHaveBeenCalled();
});
