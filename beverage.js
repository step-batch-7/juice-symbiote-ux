const readOperationToPerform = require("./src/readOperationToPerform.js")
  .readOperationToPerform;
const updateRecord = require("./src/updateRecord.js").updateRecord;
const giveTransactionsRecord = require("./src/giveTransactionsRecord.js")
  .getTransQuery;
const path = "./juiceTransactionsRecord.json";

const main = function() {
  const date = new Date();
  const operationName = process.argv[2];
  const userArgs = process.argv.slice(3);
  const operation = readOperationToPerform(operationName);
  const operationOutcome = operation(userArgs, path, date);
  console.log(operationOutcome);
};
main();
