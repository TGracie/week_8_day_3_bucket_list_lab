const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Items = function (url) {
    this.url = url;
};

module.exports = Items;
