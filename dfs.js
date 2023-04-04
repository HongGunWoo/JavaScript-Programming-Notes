// 재귀 함수로 dfs 구현
function dfs(graph, v, visitied) {
  visitied[v] = true;
  console.log(v);

  for(i of graph[v]) {
    if (!visitied[i]) {
      dfs(graph, i, visitied); 
    }
  }
}

graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7]
]

visitied = Array.from({length: 9}, () => false); // 방문한 노드 확인을 위한 배열

dfs(graph, 1, visitied);
//출력 결과
// 1
// 2
// 7
// 6
// 8
// 3
// 4
// 5