const getCombinations = (arr, num) => {
  const results = [];

  // 1개를 고를(nC1) 경우 배열의 모든 요소들을 return
  if (num === 1) return arr.map(v => [v]);

  //fixed = 배열의 처음부터 하나씩 선택된 요소, index: 현재 fixed된 요소의 index, origin: forEach()를 호출한 배열
  arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); //fixed를 제외한 뒤의 나머지 배열 요소들
      
      // 나머지 배열(rest)을 기준으로 다시 조합을 구한다.
      // 기준값(fixed)이 있기 때문에 선택하려는 개수(r)에서 - 1 을 해준다.
      const combinations = getCombinations(rest, num - 1);

      // 기준값(fixed)에 돌아온 조합(combinations)을 붙인다.
      const attached = combinations.map(v => [fixed, ...v]);

      // 붙인 값을 결과 값에 넣어준다.
      results.push(...attached);
  });

  return results;
}

console.log(getCombinations([1, 2, 3, 4], 3)); //[ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]