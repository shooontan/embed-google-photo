// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  message: string,
};

const Message = ({ message }: Props) => {
  if (!message) {
    return null;
  }

  return (
    <StyledMessage>
      <p>{message}</p>
    </StyledMessage>
  );
};

const StyledMessage = styled.div`
  width: 100%;
  margin-top: -1em;
  text-align: center;

  & p {
    display: inline-block;
    margin: 0;
    padding: 1em;
    background: #333;
    color: #fafafa;
    border-radius: 2px;
    overflow: hidden;
  }
`;

export default Message;
