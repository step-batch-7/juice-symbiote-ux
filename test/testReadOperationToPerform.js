const readOperationToPerform = require("../src/readOperationToPerform.js")
  .readOperationToPerform;
const giveTransactionsRecord = require("../src/giveTransactionsRecord.js")
  .giveTransactionsRecord;
const updateRecord = require("../src/updateRecord.js").updateRecord;
const assert = require("assert");

describe("readOperationToPerform", function() {
  describe("it should give function reference", function() {
    it("it should return updateRecord if the option is --save in user args", function() {
      assert.strictEqual(readOperationToPerform("--save"), updateRecord);
    });
    it("it should return getTransQuery if the option is --query in user args", function() {
      assert.strictEqual(
        readOperationToPerform("--query"),
        giveTransactionsRecord
      );
    });
  });
});
