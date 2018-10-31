const FormView = require('./views/form_view.js');
const GridView = require('./views/grid_view.js');
const Items = require('./models/items.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Good Morning Thomas (and Jordan). How are things today? I believe in you! JS is loaded by the way.'));
  const inputForm = document.querySelector('#list-form');
  const formView = new formView(inputForm);
  formView.bindEvents();

  const listContainer = document.querySelector('#list');
  const gridView = new GridView(listContainer);
  gridView.bindEvents();

  const listUrl = 'http://localhost:3000/api/list';
  const items = new Items(listUrl);
  items.bindEvents();
  items.getData();
});
