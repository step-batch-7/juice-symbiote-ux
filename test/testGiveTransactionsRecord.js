const assert = require(`chai`).assert;
const { giveTransactionsRecord } = require(`../src/giveTransactionsRecord.js`);

describe("giveTransactionsRecord", function() {
  it("it should give the total transaction record of the employee as per the empId given in userArgs", function() {
    const fileContent =
      '[{"--empId":"23456","--beverage":"Orange","--qty":"1","--date":"2019-11-24T13:01:48.235Z"}]';
    const actualValue = giveTransactionsRecord(
      ["--empId", "23456"],
      fileContent
    );
    const expectedValue =
      "Employee ID, Beverage, Quantity, Date\n23456,Orange,1,2019-11-24T13:01:48.235Z\nTotal : 1 Juice";
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("it should give 0 juices, if No file or record is present", function() {
    const fileContent =
      '[{"--empId":"23456","--beverage":"Orange","--qty":"2","--date":"2019-11-24T13:01:48.235Z"}]';
    const actualValue = giveTransactionsRecord(["--empId", "234"], fileContent);
    assert.deepStrictEqual(
      actualValue,
      "Employee ID, Beverage, Quantity, Date\nTotal : 0 Juices"
    );
  });

  it("it should give the total transactions of the employee on the given date", function() {
    const fileContent =
      '[{"--empId":"23456","--beverage":"Orange","--qty":"2","--date":"2019-11-24T13:01:48.235Z"},{"--empId":"23456","--beverage":"Orange","--qty":"2","--date":"2019-11-24T13:01:48.235Z"}]';
    const actualValue = giveTransactionsRecord(
      ["--empId", "23456", "date", "2019-11-24"],
      fileContent
    );
    const expectedValue =
      "Employee ID, Beverage, Quantity, Date\n23456,Orange,2,2019-11-24T13:01:48.235Z\n23456,Orange,2,2019-11-24T13:01:48.235Z\nTotal : 4 Juices";
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("it should give the list of the beverage consumed most", function() {
    const fileContent =
      '[{"--empId":"23456","--beverage":"Orange","--qty":"2","--date":"2019-11-24T13:01:48.235Z"}]';
    const actualValue = giveTransactionsRecord(
      ["--beverage", "Orange"],
      fileContent
    );
    assert.deepStrictEqual(
      actualValue,
      "Employee ID, Beverage, Quantity, Date\n23456,Orange,2,2019-11-24T13:01:48.235Z\nTotal : 2 Juices"
    );
  });
  it("it should give the total transactions of the given date", function() {
    const fileContent =
      '[{"--empId":"23456","--beverage":"Orange","--qty":"2","--date":"2019-11-25T13:01:48.235Z"},{"--empId":"23456","--beverage":"Orange","--qty":"2","--date":"2019-11-24T13:01:48.235Z"}]';
    const actualValue = giveTransactionsRecord(
      ["--date", "2019-11-24"],
      fileContent
    );
    const expectedValue =
      "Employee ID, Beverage, Quantity, Date\n23456,Orange,2,2019-11-24T13:01:48.235Z\nTotal : 2 Juices";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
  it("it should give the total transactions of the  given beverages on the given date", function() {
    const fileContent =
      '[{"--empId":"23456","--beverage":"Lemon","--qty":"2","--date":"2019-11-25T13:01:48.235Z"},{"--empId":"23456","--beverage":"Orange","--qty":"2","--date":"2019-11-24T13:01:48.235Z"}]';
    const actualValue = giveTransactionsRecord(
      ["--date", "2019-11-24", "--beverage", "Orange"],
      fileContent
    );
    const expectedValue =
      "Employee ID, Beverage, Quantity, Date\n23456,Orange,2,2019-11-24T13:01:48.235Z\nTotal : 2 Juices";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
  it("it should give the total transactions of the given beverages  of the employee on the given date", function() {
    const fileContent =
      '[{"--empId":"23456","--beverage":"Lemon","--qty":"2","--date":"2019-11-24T13:01:48.235Z"},{"--empId":"23456","--beverage":"Orange","--qty":"2","--date":"2019-11-24T13:01:48.235Z"}]';
    const actualValue = giveTransactionsRecord(
      ["--date", "2019-11-24", "--empId", "23456", "--beverage", "Orange"],
      fileContent
    );
    const expectedValue =
      "Employee ID, Beverage, Quantity, Date\n23456,Orange,2,2019-11-24T13:01:48.235Z\nTotal : 2 Juices";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
