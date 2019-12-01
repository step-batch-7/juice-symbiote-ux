const assert = require(`chai`).assert;
const readOperationToPerform = require("../src/readOperationToPerform.js")
  .readOperationToPerform;
const giveTransactionsRecord = require("../src/giveTransactionsRecord.js")
  .giveTransactionsRecord;
const updateRecord = require("../src/updateRecord.js").updateRecord;

describe("readOperationToPerform", function() {
  describe("it should give function reference as the user Args", function() {
    it("it should give  updateRecord if the option is --save in user args", function() {
      assert.strictEqual(readOperationToPerform("--save"), updateRecord);
    });
    it("it should give getTransQuery if the option is --query in user args", function() {
      assert.strictEqual(
        readOperationToPerform("--query"),
        giveTransactionsRecord
      );
    });
  });
});
