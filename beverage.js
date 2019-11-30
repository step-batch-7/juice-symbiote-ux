const readOperationToPerform = require("./src/readOperationToPerform.js")
  .readOperationToPerform;
const updateRecord = require("./src/updateRecord.js").updateRecord;
const giveTransactionsRecord = require("./src/giveTransactionsRecord.js")
  .getTransQuery;
const readFile = require("./src/library").readFile;
const fs = require("fs");

const main = function() {
  const path = process.env.path || "./juiceTransactionsRecord.json";
  const fileContent = readFile(path, "utf8", fs.readFileSync, fs.existsSync);
  const time = process.env.date || new Date().toJSON();
  const date = new Date(time);
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
