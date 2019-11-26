const readOperationToPerform = require("./src/readOperationToPerform.js")
  .readOperationToPerform;
const updateRecord = require("./src/updateRecord.js").updateRecord;
const giveTransactionsRecord = require("./src/giveTransactionsRecord.js")
  .getTransQuery;
const readFile = require("./src/library").readFile;
const fs = require("fs");

const main = function() {
  const path = "./juiceTransactionsRecord.json";
  const fileContent = readFile(path, "utf8", fs.readFileSync, fs.existsSync);
  const date = new Date();
  const operationName = process.argv[2];
  const userArgs = process.argv.slice(3);
  const operation = readOperationToPerform(operationName);
  const operationOutcome = operation(
    userArgs,
    fileContent,
    path,
    date,
    fs.writeFileSync
  );
  console.log(operationOutcome);
};
main();
