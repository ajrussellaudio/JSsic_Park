const assert = require("assert");
const Park = require("../Park");

describe("Park", function() {
  let park;

  beforeEach(function() {
    park = new Park();
  });

  it("enclosure should start empty", function() {
    assert.strictEqual(park.enclosure.length, 0);
  });

  it("should be able to add dinosaur");
  it("should be able to remove all dinosaurs of a particular type");
  it("should get all the dinosaurs with an offspring count of more than 2");
});
