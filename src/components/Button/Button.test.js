// @flow
import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import { Button } from './Button';

Enzyme.configure({ adapter: new Adapter() });

test('Button', () => {
  let testRenderer = TestRenderer.create(<Button />);
  expect(testRenderer).toMatchSnapshot();

  testRenderer = TestRenderer.create(<Button title="Submit!!!" />);
  expect(testRenderer).toMatchSnapshot();

  const mock = jest.fn();
  testRenderer = shallow(<Button onClick={mock} />);
  testRenderer
    .dive()
    .find('button')
    .simulate('click');
  expect(mock).toHaveBeenCalled();
});
