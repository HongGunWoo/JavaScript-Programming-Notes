function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}

arr = [4, 5, 3, 1, 2, 8, 7, 6];
arr = selectionSort(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]