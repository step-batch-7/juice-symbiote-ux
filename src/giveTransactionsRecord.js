const giveEmpTransacs = function(key, value) {
  return function(details) {
    return (
      details[key] == value ||
      new Date(details["--date"]).toJSON().slice(0, 10) == value
    );
  };
};

const countJuice = function(totalQty, transaction) {
  return totalQty + +transaction["--qty"];
};

const reducer = function(message, element) {
  return (
    message +
    `\n${element["--empId"]},${element["--beverage"]},${element["--qty"]},${element["--date"]}`
  );
};

const generateQueryMessage = function(empTransactions, reducer, countJuice) {
  const totalJuice = empTransactions.reduce(countJuice, 0);
  const message = empTransactions.reduce(
    reducer,
    "Employee ID,Beverage,Quantity,Date"
  );
  return message + "\nTotal :" + totalJuice + "juice";
};

const giveTransactionsRecord = function(userArgs, fileContent) {
  let juiceTransactionsRecord = JSON.parse(fileContent);
  let giveTransactionsForOneEmp = giveEmpTransacs(userArgs[0], userArgs[1]);
  let empTransactions = juiceTransactionsRecord.filter(
    giveTransactionsForOneEmp
  );
  if (userArgs.length <= 2) {
    return generateQueryMessage(empTransactions, reducer, countJuice);
  }
  let giveEmpTransactions = giveEmpTransacs(userArgs[2], userArgs[3]);
  empTransactions = juiceTransactionsRecord.filter(giveEmpTransactions);
  return generateQueryMessage(empTransactions, reducer, countJuice);
};
exports.giveTransactionsRecord = giveTransactionsRecord;
