const fs = require("fs");
const getStructure = require("./createStructure.js").createStructure;

const readRecord = function(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
};

const writeRecord = function(path, transaction) {
  transaction = JSON.stringify(transaction);
  fs.writeFileSync(path, transaction, "utf8");
};

const fillEntriesInRecord = function(details, path) {
  if (!fs.existsSync(path)) {
    writeRecord(path, {});
  }
  const initialRecord = readRecord(path);
  const empId = details["empId"];
  if (initialRecord[empId] == undefined) {
    initialRecord[empId] = [];
  }
  initialRecord[empId].push(details);
  writeRecord(path, initialRecord);
};

const updateRecord = function(userArgs, path, date) {
  const details = getStructure(userArgs, date);
  fillEntriesInRecord(details, path);
  const title = "Transaction Recorded:\nEmployee ID,Beverage,Quantity,Date\n";
  const message = [details.empId, details.beverage, details.qty, details.date];
  return title + message.join(",");
};

exports.readRecord = readRecord;
exports.updateRecord = updateRecord;
