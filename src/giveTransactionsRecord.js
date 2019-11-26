const fs = require("fs");

const giveTrasactionDetails = function(transaction) {
  return Object.values(transaction);
};

const countJuice = function(total, details) {
  return total + +details[2];
};

const giveTransactionsRecord = function(userArgs, fileContent) {
  const juiceTransactionsRecord = JSON.parse(fileContent);
  if (Object.keys(juiceTransactionsRecord).includes(userArgs[1])) {
    let empJuiceTransacsactions = juiceTransactionsRecord[userArgs[1]];
    let transacsationList = empJuiceTransacsactions.map(giveTrasactionDetails);
    let totalJuice = transacsationList.reduce(countJuice, 0);
    const title = "Employee ID, Beverage, Quantity, Date\n";
    let message = transacsationList.join("\n");
    const footer = "\nTotal: " + totalJuice + " Juice";
    return title + message + footer;
  }
  return "No Record";
};

exports.giveTransactionsRecord = giveTransactionsRecord;
