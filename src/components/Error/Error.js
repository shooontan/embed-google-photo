// @flow
import React from 'react';

type ErrorProps = {
  message: string,
};

type CheckErrorProps = ErrorProps & {
  error: boolean,
};

const Error = ({ message }: ErrorProps) => <p>{message}</p>;

const isErrorCheck = ({ error, message }: CheckErrorProps) =>
  (error ? <Error message={message} /> : null);

export default isErrorCheck;
