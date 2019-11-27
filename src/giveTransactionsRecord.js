const giveEmpTransacs = function(key, value) {
  return function(details) {
    return (
      details[key] == value ||
      new Date(details["date"]).toJSON().slice(0, 10) == value
    );
  };
};
const giveTransactionsRecord = function(userArgs, fileContent) {
  let juiceTransactionsRecord = JSON.parse(fileContent);
  let giveTransactionsForOneEmp = giveEmpTransacs(userArgs[0], userArgs[1]);
  let empTransactions = juiceTransactionsRecord.filter(
    giveTransactionsForOneEmp
  );
  if (userArgs.length <= 2) {
    return empTransactions;
  }
  let giveEmpTransactions = giveEmpTransacs(userArgs[2], userArgs[3]);
  empTransactions = juiceTransactionsRecord.filter(giveEmpTransactions);
  return empTransactions;
};
exports.giveTransactionsRecord = giveTransactionsRecord;
