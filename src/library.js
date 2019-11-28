const readFile = function(path, encoder, reader, isExist) {
  if (!isExist(path)) {
    return "[]";
  }
  return reader(path, encoder);
};

const writeFile = function(path, content, encoder, writer) {
  return writer(path, content, encoder);
};

exports.readFile = readFile;
exports.writeFile = writeFile;
