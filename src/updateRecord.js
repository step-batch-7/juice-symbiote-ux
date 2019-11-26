const fs = require("fs");
const getStructure = require("./createStructure.js").createStructure;
const writeFile = require("./library").writeFile;

const fillEntriesInRecord = function(details, path, fileContent, writer) {
  const initialRecord = JSON.parse(fileContent);
  const empId = details["empId"];
  if (initialRecord[empId] == undefined) {
    initialRecord[empId] = [];
  }
  initialRecord[empId].push(details);
  writeFile(path, JSON.stringify(initialRecord), "utf8", writer);
};

const updateRecord = function(userArgs, fileContent, path, date, writer) {
  const details = getStructure(userArgs, date);
  fillEntriesInRecord(details, path, fileContent, writer);
  const title = "Transaction Recorded:\nEmployee ID,Beverage,Quantity,Date\n";
  const message = [details.empId, details.beverage, details.qty, details.date];
  return title + message.join(",");
};

exports.updateRecord = updateRecord;
