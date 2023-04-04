function bfs(graph, start, visitied) {
  let queue = [start]; // 큐를 사용하여 bfs 구현
  visitied[start] = true;

  while (queue.length) {
    v = queue.shift();
    console.log(v);
    for(i of graph[v]) {
      if (!visitied[i]) {
        queue.push(i)
        visitied[i] = true;
      }
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

bfs(graph, 1, visitied);

// 출력 결과
// 1
// 2
// 3
// 8
// 7
// 4
// 5
// 6