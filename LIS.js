// Longest Increasing Subsequence(LIS)

let n = 7;
let sol = [15, 11, 4, 8, 5, 2, 4].reverse(); //내림차순으로 계산
let dp = new Array(n).fill(1);


for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (sol[j] < sol[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp)); //5