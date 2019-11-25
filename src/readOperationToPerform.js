const updateRecord = require("./updateRecord.js").updateRecord;
const giveTransactionsRecord = require("./giveTransactionsRecord")
  .giveTransactionsRecord;

const readOperationToPerform = function(operationName) {
  const operations = {
    "--save": updateRecord,
    "--query": giveTransactionsRecord
  };
  return operations[operationName];
};

exports.readOperationToPerform = readOperationToPerform;
