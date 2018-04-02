// @flow
/* eslint-disable */

const parse = (value: string) => {
  const params = value.split('-');

  const data = {};

  params.forEach(item => {
    const key = item.slice(0, 1);
    const v = item.substr(1);
    data[key] = v;
  });

  return data;
};

export default (url: string) => {
  const lastIndex = url.lastIndexOf('=');
  const params = url.slice(lastIndex + 1);
  return parse(params);
};
