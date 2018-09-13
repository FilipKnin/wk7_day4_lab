const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const Munros = function () {
  this.data = null;
}

Munros.prototype.bindEvents = function () {
  this.getData();

  PubSub.subscribe('SelectView:selected-region', (event) => {
    const selectedRegion = event.detail;
    this.filterByRegion(selectedRegion);
  })
};

Munros.prototype.getData = function () {
  const url = 'https://munroapi.herokuapp.com/api/munros';
  const request = new Request(url);
  request.get()
  .then((data) => {
    this.data = data;
    const regionArray = data.map(munro => munro.region)
    const filteredArray = [...new Set(regionArray)]
    PubSub.publish('Munros:all-regions', filteredArray);
  })
  .catch((err) => {
    console.error(err);
  })
};

Munros.prototype.filterByRegion = function (selectedRegion) {
  const munrosByRegion = this.data.filter(munro => munro.region === selectedRegion)
  PubSub.publish('Munros:selected-munros', munrosByRegion);
  console.log('has munrosByRegion:', munrosByRegion);
};

module.exports = Munros;
