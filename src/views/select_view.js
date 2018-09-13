const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (container) {
  this.container = container;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:all-regions', (event) => {
    const regions = event.detail;
    this.populate(regions);
  });

  this.container.addEventListener('change', (event) => {
    const selectedRegion = event.target.value;
    PubSub.publish('SelectView:selected-region', selectedRegion);
  });
};

SelectView.prototype.populate = function (regions) {
  regions.forEach((region) => {
    const option = document.createElement('option')
    option.textContent = region;
    option.value = region;
    this.container.appendChild(option);
  });
};

  module.exports = SelectView;
