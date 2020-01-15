const uuidv1 = require('../node_modules/uuid/v1');
const EXTRACT_REG = /['" \[\]]/g;

util = {
  createUniqueId: () => {
    return uuidv1();
  },
  getTag: string => {
    const outputTag = string.replace(EXTRACT_REG, '').split(',');
    return outputTag;
  },
};

module.exports = util;
