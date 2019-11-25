const updateRecord = require("../src/updateRecord.js").updateRecord;
const assert = require("assert");
const path = "./testForWrite.json";
const date = new Date();

describe("updateRecord", function() {
  it("it should create transaction table object if transaction is entered by the employe", function() {
    const actualValue = [
      "--beverage",
      "orange",
      "--empId",
      "1",
      "--quantity",
      "1"
    ];
    const expectedValue =
      "Transaction Recorded:\nEmployee ID,Beverage,Quantity,Date\n" +
      "1,orange,1," +
      date.toJSON();
    assert.strictEqual(updateRecord(actualValue, path, date), expectedValue);
  });
  it("it should first make a new array to the empId, then save the transaction if entry is made by new employee", function() {
    const actualValue = [
      "--beverage",
      "orange",
      "--empId",
      "2",
      "--quantity",
      "1"
    ];
    const expectedValue =
      "Transaction Recorded:\nEmployee ID,Beverage,Quantity,Date\n" +
      "2,orange,1," +
      date.toJSON();
    assert.strictEqual(updateRecord(actualValue, path, date), expectedValue);
  });
  it("it should create transaction table object if transaction is entered by the employe", function() {
    const actualValue = [
      "--beverage",
      "lemon",
      "--empId",
      "1",
      "--quantity",
      "1"
    ];
    const expectedValue =
      "Transaction Recorded:\nEmployee ID,Beverage,Quantity,Date\n" +
      "1,lemon,1," +
      date.toJSON();
    assert.strictEqual(updateRecord(actualValue, path, date), expectedValue);
  });
});
