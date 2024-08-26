// Given an m x n matrix, return all elements of the matrix in spiral order.
// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

function spiralOrder(matrix: number[][]): number[] {
  let res: number[] = [];
  let maxN = matrix.length;
  let maxM = matrix[0].length;
  let length = maxM*maxN
  let roundNum = Math.ceil(Math.min(maxM, maxN) / 2);
  for (let i = 0; i < roundNum; i++) {

    for (let m = 0; m < maxM; m++) {
      res.push(matrix[i][i + m]);
    }
    maxM --;
    for (let n = 1; n < maxN; n++) {
      res.push(matrix[i + n][i + maxM]);
    }
    maxN --;
    if (res.length == length) {
      break;
    }
    for (let m = maxM - 1; m >= 0; m--) {
      res.push(matrix[i + maxN][i + m]);
    }
    maxM--;
    for (let n = maxN - 1; n > 0; n--) {
      res.push(matrix[i + n][i]);
    }
    maxN--;
  }
  return res;
}

