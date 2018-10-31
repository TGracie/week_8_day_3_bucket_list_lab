const PubSub = require('../helpers/pub_sub.js');

const ItemView = function (container) {
  this.container = container;
};

ItemView.prototype.render = function (item) {
  const itemContainer = document.createElement('div');
  itemContainer.id = 'item';

  const name = this.createHeading(item.name);
  // console.log(name);
  itemContainer.appendChild(name);

  const timeframe = this.createTime('Timeframe', item.timeframe);
  // console.log('TimeFrame', timeframe);
  itemContainer.appendChild(timeframe);

  const category = this.createDetail('Category', item.category);
  // console.log("Category",category);
  itemContainer.appendChild(category);

  const deleteButton = this.createDeleteButton(item._id);
  itemContainer.appendChild(deleteButton);

  this.container.appendChild(itemContainer)
};

ItemView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

ItemView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  return detail;
};

ItemView.prototype.createTime = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `Within ${label} of ${text} years`;
  return detail;
};

ItemView.prototype.createDeleteButton = function (itemId) {
    const button = document.createElement('button');
    button.classList.add('delete-btn');
    button.value = itemId;

    button.addEventListener('click', (evt) =>
  {
    PubSub.publish('ItemView:item-delete-clicked', evt.target.value);
    });
  return button
};

ItemView.prototype.createToggle = function (itemId) {
  const status = document.createElement('checkbox');
  status.classList.add('slider');
  button.value = itemId;

  status.addEventListener('click', (evt) => {
    PubSub.publish('ItemView:status-update-clicked', evt.target.value);
  });
  return status
};

module.exports = ItemView;
