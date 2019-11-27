const giveTransactionsRecord = require("../src/giveTransactionsRecord.js")
  .giveTransactionsRecord;
const assert = require("assert");

describe("giveTransactionsRecord", function() {
  it("it should give the total transaction record of the employee as per the empId given in userArgs", function() {
    const fileContent =
      '[{"--empId":"23456","--beverage":"Orange","--qty":"2","date":"2019-11-24T13:01:48.235Z"}]';
    const actualValue = giveTransactionsRecord(
      ["--empId", "23456"],
      fileContent
    );
    const expectedValue = [
      {
        "--beverage": "Orange",
        "--empId": "23456",
        "--qty": "2",
        date: "2019-11-24T13:01:48.235Z"
      }
    ];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
  it("it should give No Record found if No file or record is present", function() {
    const fileContent =
      '[{"empId":"23456","beverage":"Orange","qty":"2","date":"2019-11-24T13:01:48.235Z"}]';
    const actualValue = giveTransactionsRecord(["empId", "23"], fileContent);
    assert.deepStrictEqual(actualValue, []);
  });
  it("it should give the total transactions of the employee on the given date", function() {
    const fileContent =
      '[{"--empId":"23456","--beverage":"Orange","--qty":"2","date":"2019-11-24T13:01:48.235Z"},{"--empId":"23456","--beverage":"Orange","--qty":"2","date":"2019-11-24T13:01:48.235Z"}]';
    const actualValue = giveTransactionsRecord(
      ["--empId", "23456", "date", "2019-11-24"],
      fileContent
    );
    const expectedValue = [
      {
        "--beverage": "Orange",
        "--empId": "23456",
        "--qty": "2",
        date: "2019-11-24T13:01:48.235Z"
      },
      {
        "--beverage": "Orange",
        "--empId": "23456",
        "--qty": "2",
        date: "2019-11-24T13:01:48.235Z"
      }
    ];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
