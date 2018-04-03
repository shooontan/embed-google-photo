// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  value?: string,
  onChange?: Function,
};

export const Form = (props: Props) => {
  const { value, onChange } = props;
  return <StyledInput value={value} onChange={onChange} {...props} />;
};

Form.defaultProps = {
  value: '',
  onChange: () => {},
};

const StyledInput = styled.input`
  width: 100%;
  padding: 4px 0.8em;
  font-size: 20px;
  line-height: 2em;
  border: none;
`;

export default Form;
