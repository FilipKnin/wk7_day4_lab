const MunroView = function (container, munroObject) {
  this.munroObject = munroObject;
  this.container = container;
}

MunroView.prototype.render = function () {
  const munro = this.munroObject;

  const munroTitle = document.createElement('h2');
  munroTitle.textContent = `${munro.name}`;
  this.container.appendChild(munroTitle);

  const detailsList = document.createElement('ol');
  this.container.appendChild(detailsList);

  const heightItem = document.createElement('li');
  heightItem.textContent = `Height: ${munro.height}`;

  const meaningItem = document.createElement('li');
  meaningItem.textContent = `Meaning: ${munro.meaning}`;
  detailsList.appendChild(heightItem);
  detailsList.appendChild(meaningItem);
};


module.exports = MunroView;
