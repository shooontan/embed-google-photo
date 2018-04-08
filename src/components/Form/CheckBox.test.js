// @flow
import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import CheckBox from './CheckBox';

Enzyme.configure({ adapter: new Adapter() });

test('CheckBox Component', () => {
  let testRenderer = TestRenderer.create(<CheckBox />);
  expect(testRenderer).toMatchSnapshot();

  testRenderer = TestRenderer.create(<CheckBox label="checkbox" />);
  expect(testRenderer).toMatchSnapshot();

  const mock = jest.fn();
  testRenderer = shallow(<CheckBox onChange={mock} />);
  testRenderer.find('input').simulate('change');
  expect(mock).toHaveBeenCalled();
});
