const assert = require(`assert`);
const { timeStamp } = require(`../src/config`);

describe(`timeStamp`, function() {
  it(`should give the default date when env date is given`, function() {
    const env = { date: `2019-11-20T05:50:28.267Z` };
    assert.deepStrictEqual(timeStamp(env), new Date(env.date));
  });
  it(`should give the new date when no date is given`, function() {
    const env = {};
    assert.deepStrictEqual(timeStamp(env), new Date());
  });
});

describe(`dataStoredPath`, function() {
  it(`should give the default path when env path is given`, function() {
    const env = {};
  });
});
