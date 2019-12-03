const fs = require(`fs`);
const { readOperationToPerform } = require(`./src/readOperationToPerform.js`);
const { updateRecord } = require(`./src/updateRecord.js`);
const { giveTransactionsRecord } = require(`./src/giveTransactionsRecord.js`);
const { readFile } = require(`./src/library`);
const { timeStamp, dataStoredPath } = require(`./src/config`);

const main = function() {
  const path = dataStoredPath(process.env);
  const fileContent = readFile(path, `utf8`, fs.readFileSync, fs.existsSync);
  const date = timeStamp(process.env);
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
