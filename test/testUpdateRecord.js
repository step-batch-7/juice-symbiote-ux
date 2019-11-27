const updateRecord = require("../src/updateRecord.js").updateRecord;
const assert = require("assert");
const path = "./testForWrite.json";
const date = new Date();

describe("updateRecord", function() {
  it("it should create transaction table object if transaction is entered by the employe", function() {
    const userArgs = [
      "--beverage",
      "orange",
      "--empId",
      "1",
      "--quantity",
      "1"
    ];
    const fileContent = "[]";
    const actualValue = updateRecord(
      userArgs,
      fileContent,
      path,
      date,
      function(path, content, encoder) {
        assert.strictEqual(path, "./testForWrite.json");
        assert.strictEqual(
          content,
          `[{"--empId":"1","--beverage":"orange","--qty":"1","--date":"${date.toJSON()}"}]`
        );
        assert.strictEqual(encoder, "utf8");
      }
    );
    const expectedValue =
      "Transaction Recorded:\nEmployee ID,Beverage,Quantity,Date\n" +
      "1,orange,1," +
      date.toJSON();
    assert.strictEqual(actualValue, expectedValue);
  });
  it("it should first make a new array to the empId, then save the transaction if entry is made by new employee", function() {
    const userArgs = [
      "--beverage",
      "orange",
      "--empId",
      "2",
      "--quantity",
      "1"
    ];
    const fileContent = `[{"--empId":"1","--beverage":"orange","--qty":"1","--date":"${date}"}]`;
    const actualValue = updateRecord(
      userArgs,
      fileContent,
      path,
      date,
      function(path, content, encoder) {
        assert.strictEqual(path, "./testForWrite.json");
        assert.strictEqual(
          content,
          `[{"--empId":"1","--beverage":"orange","--qty":"1","--date":"${date}"},{"--empId":"2","--beverage":"orange","--qty":"1","--date":"${date.toJSON()}"}]`
        );
        assert.strictEqual(encoder, "utf8");
      }
    );
    const expectedValue =
      "Transaction Recorded:\nEmployee ID,Beverage,Quantity,Date\n" +
      "2,orange,1," +
      date.toJSON();
    assert.strictEqual(actualValue, expectedValue);
  });
  it("it should create transaction table object if transaction is entered by the employe", function() {
    const userArgs = ["--beverage", "lemon", "--empId", "1", "--quantity", "1"];
    const fileContent = `[{"--empId":"1","--beverage":"orange","--qty":"1","--date":"${date}"},{"--empId":"2","--beverage":"orange","--qty":"1","--date":"${date}"}]`;
    const actualValue = updateRecord(
      userArgs,
      fileContent,
      path,
      date,
      function(path, content, encoder) {
        assert.strictEqual(path, "./testForWrite.json");
        assert.strictEqual(encoder, "utf8");
        assert.strictEqual(
          content,
          `[{"--empId":"1","--beverage":"orange","--qty":"1","--date":"${date}"},{"--empId":"2","--beverage":"orange","--qty":"1","--date":"${date}"},{"--empId":"1","--beverage":"lemon","--qty":"1","--date":"${date.toJSON()}"}]`
        );
      }
    );
    const expectedValue =
      "Transaction Recorded:\nEmployee ID,Beverage,Quantity,Date\n" +
      "1,lemon,1," +
      date.toJSON();
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
