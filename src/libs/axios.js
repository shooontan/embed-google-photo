// @flow
import axios from 'axios';

const baseApiUrl = 'https://query.yahooapis.com';

const http = axios.create({
  baseURL: baseApiUrl,
  timeout: 10000,
});

type query = {
  query: {
    count: number,
    created: string,
    lang: string,
    results: {
      result: string,
    },
  },
};

export const getQuery = (url: string): Promise<query> =>
  http
    .get('/v1/public/yql', {
      params: {
        q: `select * from htmlstring where url="${url}" and xpath = "//meta"`,
        format: 'json',
        env: 'store://datatables.org/alltableswithkeys',
      },
    })
    .then(res => res.data);

export default http;
