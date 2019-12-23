const axios = require('axios');

const exportPathMap = async (defaultPathMap, { dev }) => {
  if (dev) {
    return defaultPathMap;
  }
  const { data: perfectVerbs } = await axios.get(`http://localhost:3000/api/verbs/perfect`);
  const paths = {};

  perfectVerbs.reduce((res, verb) => {
    const path = `/verbs/perfect/${verb.name.text}`;
    res[path] = {
      page: '/verbs/perfect/[name]',
    };
    return paths;
  }, paths);

  return paths;
};

module.exports = {
  exportPathMap,
};
