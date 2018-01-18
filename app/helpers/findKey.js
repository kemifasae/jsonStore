function findKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
          return true;
      }
  }
  return false;
}

module.exports = findKey;
