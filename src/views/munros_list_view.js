const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunrosListView = function (container) {
  this.container = container;
};

MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:selected-munros', (event) => {
    this.selectedMunros = event.detail;
    this.render();
  })
};

MunrosListView.prototype.render = function () {
this.container.innerHTML = "";
  this.selectedMunros.forEach((munro) => {
    const munroDetail = new MunroView(this.container, munro)
    munroDetail.render();
  })
};

module.exports = MunrosListView;
