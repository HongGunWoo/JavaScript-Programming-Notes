//  시계 방향으로 90도 회전
function rotateArr(box) {
  let box_max_index = box.length - 1;
  let new_box = Array.from({length: box.length}, () => Array.from({length: box.length}, () => 0));

  for (let i = 0; i < box.length; i++) {
    for (let k = 0; k < box[i].length; k++) {
      let after_row = k;  // 이동되기 전 행의 열은 이동된 후의 행이 된다.
      let after_col = box_max_index - i;  // 이동되기 전 행은 이동된 후의 열에 "2차원 배열의 최대 인덱스 - 이동되기 전 행의 인덱스"이 된다.
      new_box[after_row][after_col] = box[i][k];
    }
  }

  return new_box;
}

console.log(rotateArr([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
//회전하기 전 배열
// [ 1, 2, 3 ],
// [ 4, 5, 6 ],
// [ 7, 8, 9 ]

//회전 후 배열
// [ 7, 4, 1 ],
// [ 8, 5, 2 ],
// [ 9, 6, 3 ]