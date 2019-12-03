const giveEmpTransacs = function(key, value) {
  return function(details) {
    const keys = details[key] == value;
    return keys || new Date(details["--date"]).toJSON().slice(0, 10) == value;
  };
};

const countJuice = function(totalQty, transaction) {
  return totalQty + +transaction["--qty"];
};

const chngObjectToString = function(message, element) {
  return `${message}\n${element["--empId"]},${element["--beverage"]},${element["--qty"]},${element["--date"]}`;
};

const generateQueryMessage = function(empTransactions) {
  const totalJuice = empTransactions.reduce(countJuice, 0);
  const message = empTransactions.reduce(
    chngObjectToString,
    `Employee ID, Beverage, Quantity, Date`
  );
  return `${message}\nTotal : ${totalJuice} ${
    totalJuice == 1 ? "Juice" : "Juices"
  }`;
};

const giveTransactionsRecord = function(userArgs, fileContent) {
  let juiceTransactionsRecord = JSON.parse(fileContent);
  for (let i = 0; i < userArgs.length; i += 2) {
    let giveTransactions = giveEmpTransacs(userArgs[i], userArgs[i + 1]);
    juiceTransactionsRecord = juiceTransactionsRecord.filter(giveTransactions);
  }
  return generateQueryMessage(juiceTransactionsRecord);
};
module.exports = { giveTransactionsRecord };
