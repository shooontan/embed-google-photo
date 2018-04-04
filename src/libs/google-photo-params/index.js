// @flow

/**
 * split Google Photo URL
 *
 * in
 * https://lh3.googleusercontent.com/url=w120-h230-p-k
 *
 * out
 * {
 *   url: 'https://lh3.googleusercontent.com/url',
 *   params: [ 'w230', 'h230', 'p', 'k' ]
 * }
 */
export const splitUrl = (url: string) => {
  const lastIndex = url.lastIndexOf('=');
  if (lastIndex === -1) {
    return {
      url,
      params: [],
    };
  }

  const sliceValue = url.slice(lastIndex + 1);
  const splitParams = sliceValue.split('-');

  const originalUrl = url.substring(0, lastIndex);

  return {
    url: originalUrl,
    params: splitParams,
  };
};

/**
 * parse Google Photo URL Parameters
 *
 * in
 * [ 'w600', 'h315', 'p', 'k' ]
 *
 * out
 * { w: 600, h: 315, p: '', k: '' }
 */
export const parseParams = (params: [string]): { [string]: string | number } => {
  const urlParams = {};

  params.forEach((item) => {
    if (typeof item !== 'string') {
      return;
    }
    const key = item.slice(0, 1);
    let v = item.substr(1);
    if (v && typeof +v === 'number') {
      v = +v;
    }
    urlParams[key] = v;
  });

  return urlParams;
};

/**
 * build Google Photo URL Parameter
 *
 * in
 * ('url', { w: 600, h: 315, p: true, k: false } )
 *
 * out
 * url=w600-h10-p
 */
export const buildUrl = (photoUrl: string, newParams: { [string]: number | boolean }) => {
  const { url, params } = splitUrl(photoUrl);
  const originParams = parseParams(params);

  const assignParams = Object.assign({}, originParams, newParams);

  let buildParams = '=';

  Object.keys(assignParams).forEach((itemKey) => {
    const itemValue = assignParams[itemKey];
    if (itemValue === true) {
      buildParams = `${buildParams}${itemKey}-`;
    } else if (typeof itemValue === 'number' && !Number.isNaN(itemValue)) {
      buildParams = `${buildParams}${itemKey}${itemValue}-`;
    }
  });

  // trim last 「-」
  buildParams = buildParams.replace(/-$/, '');

  return `${url}${buildParams}`;
};
