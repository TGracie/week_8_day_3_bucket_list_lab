const PubSub = require('../helpers/pub_sub.js');

const FormView = function (form) {
  this.form = form;
};

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
  });
};

FormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newItem = this.createItem(event.target);
  PubSub.publish('FormView:item-submitted', newItem);
  event.target.reset();
};

FormView.prototype.createItem = function (form) {
  const newItem = {
    name: form.name.value,
    timeframe: form.timeframe.value,
    category: form.category.value
  };
  return newItem;
};

module.exports = FormView;
