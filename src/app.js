const Munros = require('./models/munros.js');
const SelectView = require('./views/select_view.js');
const MunrosListView = require('./views/munros_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munros = new Munros();
  munros.bindEvents();

  const selectContainer = document.querySelector('#region-menu')
  const selectView = new SelectView(selectContainer);
  selectView.bindEvents();

  const resultContainer = document.querySelector('#results')
  const munrosListView = new MunrosListView(resultContainer);
  munrosListView.bindEvents();

})
