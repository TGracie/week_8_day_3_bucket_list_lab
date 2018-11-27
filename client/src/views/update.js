const PubSub = require('../helpers/pub_sub.js');

const Update = function(id) {
  this.id = id;
};

Update.prototype.bindEvents = function () {
  PubSub.subscribe('Items:data-loaded', (evt) => {
    this.data = (evt.detail);
  });
  PubSub.subscribe('ItemView:status-update-clicked', (evt) => {this.updateItem(evt.detail);
  });
};

Update.prototype.updateItem = function (id) {
  console.log(this.data);
};


module.exports = Update;
