const assert = require("assert");
const lib = require("../src/library.js");
const readFile = lib.readFile;
const writeFile = lib.writeFile;

describe("readFile", function() {
  it("it should check path given to isExist is correct, if path doesn't exist return empty object", function() {
    const isExists = function(path) {
      assert.strictEqual(path, "correctPath");
      return false;
    };
    const reader = function() {
      return "file";
    };
    assert.deepStrictEqual(
      readFile("correctPath", "utf8", reader, isExists),
      "[]"
    );
  });
  it("when path exist,it should return content of file ", function() {
    const isExists = function(path) {
      return true;
    };
    const reader = function(path, encoder) {
      assert.strictEqual(path, "correctPath");
      assert.strictEqual(encoder, "utf8");
      return "ckecked the reader";
    };
    assert.deepStrictEqual(
      readFile("correctPath", "utf8", reader, isExists),
      "ckecked the reader"
    );
  });
});

describe("writeFile", function() {
  it("should check for the correct path, encoder and should return content of the file", function() {
    const writer = function(path, content, encoder) {
      assert.strictEqual(path, "correctPath");
      assert.strictEqual(content, "details of the file");
      assert.strictEqual(encoder, "utf8");
      return "details of the file";
    };
    assert.deepStrictEqual(
      writeFile("correctPath", "details of the file", "utf8", writer),
      "details of the file"
    );
  });
});
