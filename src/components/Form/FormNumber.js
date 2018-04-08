// @flow
import * as React from 'react';

type Props = {
  label?: string,
};

const FormNumber = (props: Props) => {
  const { label } = props;
  return (
    <p>
      <input type="number" {...props} />
      {label}
    </p>
  );
};

FormNumber.defaultProps = {
  label: '',
};

export default FormNumber;
