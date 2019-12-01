const timeStamp = env => {
  const time = env.date || new Date().toJSON();
  return new Date(time);
};

const dataStoredPath = env => {
  const path = env.path || `./juiceTransactionsRecord.json`;
  return path;
};
module.exports = { timeStamp, dataStoredPath };
