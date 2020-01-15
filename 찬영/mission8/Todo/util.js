const uuidv1 = require('../node_modules/uuid/v1');

util = {
  createUniqueId: () => {
    return uuidv1();
  },
};

module.exports = util;
