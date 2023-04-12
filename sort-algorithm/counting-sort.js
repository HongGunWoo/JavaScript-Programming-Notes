function countingSort(arr) {
  const count = new Array(Math.max(...arr) + 1).fill(0);
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i]; j++) {
      result.push(i);
    }
  }

  return result;
}

// 모든 원소의 값이 0보다 크거나 같다고 가정한다.
const arr = [4, 5, 1, 3, 2, 0];
const sortedArr = countingSort(arr);
console.log(sortedArr); // [0, 1, 2, 3, 4, 5]