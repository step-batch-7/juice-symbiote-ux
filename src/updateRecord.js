const { createStructure } = require(`./createStructure.js`);
const { writeFile } = require(`./library`);

const fillEntriesInRecord = function(details, path, fileContent, writer) {
  const initialRecord = JSON.parse(fileContent);
  initialRecord.push(details);
  writeFile(path, JSON.stringify(initialRecord), `utf8`, writer);
};

const updateRecord = function(userArgs, fileContent, path, date, writer) {
  const details = createStructure(userArgs, date);
  fillEntriesInRecord(details, path, fileContent, writer);
  const title = `Transaction Recorded:\nEmployee ID,Beverage,Quantity,Date\n`;
  const message = [
    details["--empId"],
    details["--beverage"],
    details["--qty"],
    details["--date"].toJSON()
  ];
  return title + message.join(`,`);
};
module.exports = { updateRecord };
