const Park = function() {
  this.enclosure = [];
}

Park.prototype.add = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

module.exports = Park;
