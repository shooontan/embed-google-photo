// @flow
import * as React from 'react';

const Loading = () => <p>loading...</p>;

type Props = {
  loading: boolean,
};

const isLoadingCheck = ({ loading }: Props) => (loading ? <Loading /> : null);

export default isLoadingCheck;
