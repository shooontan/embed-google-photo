// @flow
import { getQuery } from '../libs/axios';
// import urlParameter from '../libs/urlParameter';

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

  // const params = urlParameter(ogImageUrls[0]);

  const imageUrl = `${ogImageUrls[0].replace(/=\S+$/, '')}`;

  return imageUrl;
};

export default onClick;
