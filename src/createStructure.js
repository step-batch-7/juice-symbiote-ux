const createStructure = function(userArgs, date) {
  let table = {};
  table["--empId"] = userArgs[3];
  table["--beverage"] = userArgs[1];
  table["--qty"] = userArgs[5];
  table["--date"] = date;
  return table;
};

module.exports = { createStructure };
