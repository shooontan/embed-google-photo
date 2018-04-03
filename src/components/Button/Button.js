// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  title?: string,
  onClick?: Function,
};

export const Button = (props: Props) => {
  const { title, onClick } = props;
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

Button.defaultProps = {
  title: 'button',
  onClick: () => {},
};

const StyledButton = styled.button`
  display: inline-block;
  position: relative;
  padding: 0.75em 1.75em;
  margin: 10px;
  background: linear-gradient(to right, #ffa013, #ffc61a);
  border: none;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  user-select: none;
  z-index: 2;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: -6px;
    left: 5%;
    height: 110%;
    width: 90%;
    opacity: 0.8;
    border-radius: 50px;
    background: linear-gradient(to right, #ffa013, #ffc61a);
    filter: blur(6px);
    transition: all 0.2s;
  }

  &:hover:after {
    filter: blur(4px);
    width: 100%;
    bottom: -3px;
    left: 0;
  }

  &:hover:active::after {
    filter: blur(10px);
  }
`;

export default Button;
