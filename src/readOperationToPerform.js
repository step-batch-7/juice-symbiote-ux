const { updateRecord } = require(`./updateRecord.js`);
const { giveTransactionsRecord } = require(`./giveTransactionsRecord`);
const { wrongInput } = require(`./library`);

const readOperationToPerform = function(operationName) {
  const operations = {
    "--save": updateRecord,
    "--query": giveTransactionsRecord
  };
  if (!operations.hasOwnProperty(operationName)) {
    operations[operationName] = wrongInput;
  }
  return operations[operationName];
};

module.exports = { readOperationToPerform, wrongInput };
