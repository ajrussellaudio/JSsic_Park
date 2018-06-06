const assert = require("assert");
const Park = require("../Park");
const Dinosaur = require("../Dinosaur");

describe("Park", function() {
  let park;

  beforeEach(function() {
    park = new Park();
  });

  it("enclosure should start empty", function() {
    assert.strictEqual(park.enclosure.length, 0);
  });

  it("should be able to add dinosaur", function() {
    const dinosaur = new Dinosaur("Pterodactyl", 2);
    park.add(dinosaur);
    assert.strictEqual(park.enclosure.length, 1);
  });

  it("should be able to remove all dinosaurs of a particular type", function() {
    park.add(new Dinosaur("Pterodactyl", 2));
    park.add(new Dinosaur("Pterodactyl", 2));
    park.add(new Dinosaur("Tyrannosaurus Rex", 1));
    park.add(new Dinosaur("Tyrannosaurus Rex", 1));
    park.removeByType("Pterodactyl");
    assert.strictEqual(park.enclosure.length, 2);
  });

  it("should get all the dinosaurs with an offspring count of more than 2", function() {
    park.add(new Dinosaur("Velociraptor", 12));
    park.add(new Dinosaur("Triceratops", 1));
    park.add(new Dinosaur("Diplodocus", 3));
    const breeders = park.getDinosWithOffspringCountGreaterThan(9);
    assert.strictEqual(breeders.length, 1);
  });
});
