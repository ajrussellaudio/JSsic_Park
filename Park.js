const Park = function() {
  this.enclosure = [];
}

Park.prototype.add = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

// Park.prototype.removeByType = function (type) {
//   // loop through dinos
//   // for (let i = this.enclosure.length - 1; i >= 0; i--) {
//   for (let i = 0; i < this.enclosure.length; i++) {
//     // if dino type matches type
//     if (this.enclosure[i].type === type) {
//       // remove dino
//       this.enclosure.splice(i, 1);
//     }
//   }
// };

Park.prototype.removeByType = function (type) {
  const newEnclosure = [];
  // loop thru dinos
  // reverse is optional!
  for (let dinosaur of this.enclosure.reverse()) {
    // if dinosaur does NOT match type
    if (dinosaur.type !== type) {
      // put dino into new array
      newEnclosure.push(dinosaur);
    }
    // set enclosure to new array
    this.enclosure = newEnclosure;
  }
};

Park.prototype.getDinosWithOffspringCountGreaterThan = function (count) {
  // make new array
  const lotsOfBabies = [];
  // loop thru dinos
  for (let dinosaur of this.enclosure) {
    // if offspring more than two
    if (dinosaur.offspringPerYear > count) {
      // add to new array
      lotsOfBabies.push(dinosaur)
    }
  }
  // return array
  return lotsOfBabies;
};

module.exports = Park;
