const assert = require(`chai`).assert;
const { giveTransactionsRecord } = require(`../src/giveTransactionsRecord.js`);
const { updateRecord } = require(`../src/updateRecord.js`);
const { readOperationToPerform } = require(`../src/readOperationToPerform.js`);
const { wrongInput } = require(`../src/library`);

describe(`readOperationToPerform`, function() {
  describe(`it should give function reference as the user Args`, function() {
    it(`it should give  updateRecord if the option is --save in user args`, function() {
      assert.strictEqual(readOperationToPerform("--save"), updateRecord);
    });
    it(`it should give getTransQuery if the option is --query in user args`, function() {
      assert.strictEqual(
        readOperationToPerform("--query"),
        giveTransactionsRecord
      );
    });
    it(`it should give wrong input if the option is invalid `, function() {
      assert.strictEqual(readOperationToPerform("--que"), wrongInput);
    });
  });
});
