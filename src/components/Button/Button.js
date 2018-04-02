// @flow
import * as React from 'react';

type Props = {
  title?: string,
  onClick?: Function,
};

const Button = (props: Props) => {
  const { title, onClick } = props;
  return <button onClick={onClick}>{title}</button>;
};

Button.defaultProps = {
  title: 'button',
  onClick: () => {},
};

export default Button;
