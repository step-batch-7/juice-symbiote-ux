const createStructure = require("../src/createStructure.js").createStructure;
const assert = require("assert");

const date = new Date();
describe("createStructure", function() {
  it("it should give structure of data which has empId,beverage,qty,date when vaid user args have given", function() {
    const actualValue = ["--beverage", "orange", "empId", "12", "qty", "1"];
    const expectedValue = {
      empId: "12",
      beverage: "orange",
      qty: "1",
      date: date.toJSON()
    };
    assert.deepStrictEqual(createStructure(actualValue, date), expectedValue);
  });
});