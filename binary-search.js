function binarySearch(arr, target, start, end) {
  if (start > end) return null;
  let mid = parseInt((start + end) / 2);

  // target 값을 찾은 경우 중간점 인덱스 반환
  if (arr[mid] === target) return mid;

  // arr[mid](중간점)의 값보다 target 값이 작은 경우 왼쪽 확인
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);

  // arr[mid](중간점)의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
  else return binarySearch(arr, target, mid + 1, end);
}

let n = 10;
let target = 7;
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(binarySearch(arr, target, 0, n - 1) - 1); //