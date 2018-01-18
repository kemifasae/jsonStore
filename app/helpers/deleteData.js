function deleteData(array, key, value) {
  for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
          array.splice(i,1);
          return array
      }
    }

}

module.exports = deleteData;
