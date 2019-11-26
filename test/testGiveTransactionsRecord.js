const giveTransactionsRecord = require("../src/giveTransactionsRecord.js")
  .giveTransactionsRecord;
const assert = require("assert");

describe("giveTransactionsRecord", function() {
  it("it should give the transaction record of the employee as per the empId given in userArgs", function() {
    const fileContent =
      '{"23456":[{"empId":"23456","beverage":"Orange","qty":"2","date":"2019-11-24T13:01:48.235Z"}]}';
    const actualValue = giveTransactionsRecord(["empId", "23456"], fileContent);
    const expectedValue =
      "Employee ID, Beverage, Quantity, Date\n23456,Orange,2,2019-11-24T13:01:48.235Z\nTotal: 2 Juice";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
  it("it should give No Record found if No file or record is present", function() {
    const fileContent =
      '{"23456":[{"empId":"23456","beverage":"Orange","qty":"2","date":"2019-11-24T13:01:48.235Z"}]}';
    const actualValue = giveTransactionsRecord(["empId", "23"], fileContent);
    assert.deepStrictEqual(actualValue, "No Record");
  });
});
