// @flow
import * as gpp from './index';

const url = 'https://lh3.googleusercontent.com/abc';

test('Google Photo Parameter split test', () => {
  const tesUrl = `${url}=w600-h100-d`;
  const splitTest = gpp.splitUrl(tesUrl);

  expect(splitTest.url).toBe(url);
  expect(splitTest.params).toEqual(expect.arrayContaining(['w600', 'h100', 'd']));
});

test('Google Photo Params parseParams test', () => {
  const params = ['w600', 'h0', 'p', 12, true, {}, () => {}];
  const parseTest = gpp.parseParams(params);

  expect(parseTest).toHaveProperty('w', 600);
  expect(parseTest).toHaveProperty('h', 0);
  expect(parseTest).toHaveProperty('p', '');
  expect(parseTest).not.toHaveProperty('12');
  expect(parseTest).not.toHaveProperty('o');
});

test('Google Photo Params buildParams test', () => {
  const buildUrl = `${url}=w200-k`;
  const options = {
    w: 600,
    h: 200,
    p: true,
    k: false,
  };
  const buildTest = gpp.buildUrl(buildUrl, options);

  expect(buildTest).toBe('https://lh3.googleusercontent.com/abc=w600-h200-p');
});
