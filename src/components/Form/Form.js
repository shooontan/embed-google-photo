// @flow
import * as React from 'react';

type Props = {
  value?: string,
  onChange?: Function,
};

const Form = (props: Props) => {
  const { value, onChange } = props;
  return <input value={value} onChange={onChange} />;
};

Form.defaultProps = {
  value: '',
  onChange: () => {},
};

export default Form;
