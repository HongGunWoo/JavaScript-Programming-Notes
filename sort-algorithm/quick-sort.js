function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
}

const arr = [4, 5, 3, 1, 2, 8, 7, 6];
const sortedArr = quickSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8]
