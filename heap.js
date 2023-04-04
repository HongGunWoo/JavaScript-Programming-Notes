class MinHeap {
  constructor() {
    this.heap = [ null ]; // 첫 번째 원소는 구현의 편의상 사용하지 않는다.
  }

  size = () => {
    return this.heap.length - 1;
  };

  swap = (a, b) => {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  };

  push = (value) => {
    this.heap.push(value);
    let curIdx = this.heap.length - 1; // 새로 삽입한 노드의 index
    let parentIdx = Math.floor(curIdx / 2); // 자식 노드의 부모 노드 인덱스를 구함(자식의 인덱스 / 2)

    while (curIdx > 1 && this.heap[parentIdx] > this.heap[curIdx]) { // 부모 노드의 값이 자식 노드의 값보다 큰 경우 반복
      this.swap(curIdx, parentIdx); //자식노드와 부모노드의 값을 바꿈
      curIdx = parentIdx; // 부모 노드의 인덱스를 자식 노드 인덱스로 대입
      parentIdx = Math.floor(curIdx / 2); // 새로운 자식 노드의 부모 노드 인덱스를 구함
    }
  };

  pop = () => {
    if (this.heap.length === 2) return this.heap.pop();

    const result = this.heap[1]; // 배열 첫 원소(idx 0)은 비워두므로 root는 heap[1]에 위치
    this.heap[1] = this.heap.pop(); 
    let curIdx = 1;
    let leftIdx = curIdx * 2; //왼쪽 자식의 인덱스 = 부모 인덱스 * 2
    let rightIdx = curIdx * 2 + 1; // 오른쪽 자식의 인덱스 = (부모 인덱스 * 2) + 1

    if (!this.heap[leftIdx]) return result; // 왼쪽 자식이 없음은 오른쪽 자식도 없다는 것이므로 바로 반환
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) { // 오른족 자식은 없지만 왼쪽 자식이 있는 경우
        this.swap(leftIdx, curIdx);
      }
      return result;
    }
    
    while (this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
      const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return result;
  };
}