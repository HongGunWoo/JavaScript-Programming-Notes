function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      } else {
        break;
      }
    }
  }
  return array;
}

arr = [4, 5, 3, 1, 2, 8, 7, 6];
arr = insertionSort(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]