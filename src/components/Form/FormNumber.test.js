// @flow
import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import FormNumber from './FormNumber';

Enzyme.configure({ adapter: new Adapter() });

test('FormNumber Component', () => {
  let testRenderer = TestRenderer.create(<FormNumber />);
  expect(testRenderer).toMatchSnapshot();

  testRenderer = TestRenderer.create(<FormNumber label="form number" />);
  expect(testRenderer).toMatchSnapshot();

  const mock = jest.fn();
  testRenderer = shallow(<FormNumber onChange={mock} />);
  testRenderer.find('input').simulate('change');
  expect(mock).toHaveBeenCalled();
});
