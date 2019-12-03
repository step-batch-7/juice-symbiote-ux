const timeStamp = env => (env.date ? new Date(env.date) : new Date());

const dataStoredPath = env => {
  const path = env.path || `./juiceTransactionsRecord.json`;
  return path;
};
module.exports = { timeStamp, dataStoredPath };
