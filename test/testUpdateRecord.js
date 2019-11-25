const updateRecord = require("../src/updateRecord.js").updateRecord;
const assert = require("assert");
const path = "./testForWrite.json";
const date = new Date();

describe("updateRecord", function() {
  it("it should create transaction table object if new entry is entered by the employe", function() {
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
});
