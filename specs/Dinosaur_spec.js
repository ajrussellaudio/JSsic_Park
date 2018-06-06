const assert = require("assert");
const Dinosaur = require("../Dinosaur");

describe("Dinosaur", function() {
  let dinosaur;

  beforeEach(function() {
    dinosaur = new Dinosaur("Triceratops");
  })

  it("should have a type", function() {
    assert.strictEqual(dinosaur.type, "Triceratops");
  });

  it("should have a number of offspring per year");
})
