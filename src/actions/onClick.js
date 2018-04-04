// @flow
import { getQuery } from '../libs/axios';
import * as gpp from '../libs/google-photo-params';

const onClick = async (value: string) => {
  const data = await getQuery(value);

  const metas = data.query.results.result;
  const matched = metas.match(/<meta\s[^>]+?>/g);

  if (!matched) {
    return '';
  }

  const ogImageUrls = matched.filter(item => /property="og:image"/.test(item)).map((item) => {
    const content = item.match(/content="([^"]+?)"/);
    if (content && content[1]) {
      return content[1];
    }
    return '';
  });

  // return original url without params
  const { url } = gpp.splitUrl(ogImageUrls[0]);
  return url;
};

export default onClick;
