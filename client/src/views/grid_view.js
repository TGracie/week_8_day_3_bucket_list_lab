const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const GridView = function(container) {
    this.container = container;
};

GridView.prototype.bindEvents = function () {
  PubSub.subscribe('Items:data-loaded', (evt) => {
    this.render(evt.detail);
  });
};

GridView.prototype.render = function (items) {
  this.container.innerHTML = '';
  const itemView = new ItemView(this.container);
  items.forEach((item) => itemView.render(item));
};

module.exports = GridView;
