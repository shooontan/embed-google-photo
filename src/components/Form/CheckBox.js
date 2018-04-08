// @flow
import * as React from 'react';

type Props = {
  label?: string,
};

const CheckBox = (props: Props) => {
  const { label } = props;
  return (
    <p>
      <input type="checkbox" {...props} />
      {label}
    </p>
  );
};

CheckBox.defaultProps = {
  label: '',
};

export default CheckBox;
