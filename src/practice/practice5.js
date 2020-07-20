import star from "material-ui/svg-icons/toggle/star";
import { stat } from "fs";

const rotateMatrix = () => {
  let mat = [
    [1, 2, 3, 10],
    [4, 5, 6, 11],
    [7, 8, 9, 12],
    [13, 18, 19, 20]
  ];
  let row = mat.length;
  let col = mat[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = i; j < col; j++) {
      let temp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = temp;
    }
  }
  //anti clockwise
  for (let i = 0; i < row / 2; i++) {
    for (let j = 0; j < col; j++) {
      //   let temp = mat[i][j];
      //   mat[i][j] = mat[row - i - 1][j];
      //   mat[row - i - 1][j] = temp;
    }
  }

  // clockwise
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col / 2; j++) {
      let temp = mat[i][j];
      mat[i][j] = mat[i][col - j - 1];
      mat[i][col - j - 1] = temp;
    }
  }
  //console.log("mat is", mat);
};
rotateMatrix();

const fondTotalPathInMatrixNoObtacleAllSimple = () => {
  let matrix = [
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1],
    [1, 1, 1, 1]
  ];
  let row = matrix.length;
  let col = matrix[0].length;
  const totalPath = mat => {
    let dp = [];
    for (let i = 0; i < row; i++) {
      dp[i] = [];
      for (let j = 0; j < col; j++) {
        dp[i][j] = 1;
      }
    }
    for (let i = 1; i < row; i++) {
      for (let j = 1; j < col; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
    console.log("dp matrix is", dp);
  };
  totalPath(matrix);
};

//fondTotalPathInMatrixNoObtacleAllSimple();

let matrix = [
  [1, 1, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 0, 1],
  [1, 1, 1, 1]
];
let countPath = 0;
let pathArray = [];
const isSafe = (mat, i, j, row, col, visited) => {
  if (i >= 0 && i < row && j >= 0 && j < col && !visited[i][j]) {
    return true;
  }
  return false;
};
const helper = (mat, i, j, row, col, visited) => {
  if (i === row - 1 && j === col - 1) {
    countPath++;
    return true;
  }
  // here mat[i][j] === 1 is important to count;
  if (isSafe(mat, i, j, row, col, visited) && mat[i][j] === 1) {
    visited[i][j] = true;
    pathArray.push(mat[i][j]);
    helper(mat, i, j + 1, row, col, visited);
    helper(mat, i, j - 1, row, col, visited);
    helper(mat, i + 1, j, row, col, visited);
    helper(mat, i - 1, j, row, col, visited);
    visited[i][j] = 0;
    return true;
  }
  return false;
};
const findAllUniquePathInMatrixWithObstacle = mat => {
  if (mat === null || mat.length === 0) return 0;
  let row = mat.length;
  let col = mat[0].length;

  let visited = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  helper(mat, 0, 0, row, col, visited);
  console.log("total path is", countPath, visited);
};

//findAllUniquePathInMatrixWithObstacle(matrix);

let matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 20, 7],
  [20, 8, 20, 9],
  [10, 11, 12, 13]
];

let matrix3 = [
  [1, 2, 3],
  [5, 6, 19],
  [18, 8, 20]
];
let countPath2 = 0;
let pathArray2 = [];
const isSafe2 = (mat, i, j, row, col, visited) => {
  if (i >= 0 && i < row && j >= 0 && j < col && !visited[i][j]) {
    return true;
  }
  return false;
};
const helper2 = (mat, i, j, row, col, visited) => {
  if (i === row - 1 && j === col - 1) {
    // here important steps...fits push then print at last pop also
    pathArray2.push(mat[i][j]);
    console.log(pathArray2);
    pathArray2.pop();
    countPath2++;
    return true;
  }
  // here mat[i][j] === 1 is important to count;
  if (isSafe2(mat, i, j, row, col, visited) && mat[i][j]) {
    visited[i][j] = true;
    pathArray2.push(mat[i][j]);
    helper2(mat, i, j + 1, row, col, visited);
    // helper2(mat, i, j - 1, row, col, visited);
    helper2(mat, i + 1, j, row, col, visited);
    //helper2(mat, i - 1, j, row, col, visited);
    visited[i][j] = 0;
    pathArray2.pop(mat[i][j]);
    //return true;
  }
  //return false;
};
const printAllUniquPathWithObstacle = mat => {
  if (mat === null || mat.length === 0) return 0;
  let row = mat.length;
  let col = mat[0].length;

  let visited = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  helper2(mat, 0, 0, row, col, visited);
  console.log("total path is", countPath2, visited, pathArray2);
};

//printAllUniquPathWithObstacle(matrix2);

//############################
//############################
//############################

//############################//############################
//############################
//############################
//############################

/// shortes pathh

let minMatrix = [
  [0, 0, 0],
  [1, 0, 1],
  [0, 0, 0],
  [0, 1, 1],
  [0, 0, 0]
];
const shortestPathinBFS = mat => {
  if (mat === null || mat.length === 0) return 0;

  let row = mat.length;
  let col = mat[0].length;
  let visited = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  const isSafe = (mat, i, j, row, col, visited) => {
    if (i >= 0 && i < row && j >= 0 && j < col && !visited[i][j]) return true;
    return false;
  };
  const miniDeletion = (mat, i, j, row, col, visited) => {
    let queue = [[i, j, 0]];

    while (queue.length > 0) {
      let [i, j, dist] = queue.shift();

      if (i === row - 1 && j === col - 1) {
        return dist;
      }
      if (isSafe(mat, i, j + 1, row, col, visited) && mat[i][j + 1] == 0) {
        queue.push([i, j + 1, dist + 1]);
        visited[i][j + 1] = true;
      }
      if (isSafe(mat, i + 1, j, row, col, visited) && mat[i + 1][j] == 0) {
        queue.push([i + 1, j, dist + 1]);
        visited[i + 1][j] = true;
      }
      if (isSafe(mat, i - 1, j, row, col, visited) && mat[i - 1][j] == 0) {
        queue.push([i - 1, j, dist + 1]);
        visited[i - 1][j] = true;
      }
      if (isSafe(mat, i, j - 1, row, col, visited) && mat[i][j - 1] == 0) {
        queue.push([i, j - 1, dist + 1]);
        visited[i][j - 1] = true;
      }

      //   let R = [-1, 0, 1, 0];
      //   let C = [0, 1, 0, -1];

      //   for (let k = 0; k < R.length; k++) {
      //     let nRow = i + R[k];
      //     let nCol = j + C[k];
      //     if (
      //       isSafe(mat, nRow, nCol, row, col, visited) &&
      //       mat[nRow][nCol] === 0
      //     ) {
      //       queue.push([nRow, nCol, dist + 1]);
      //       visited[nRow][nCol] = true;
      //     }
      //   }
    }
    return -1;
  };
  return miniDeletion(mat, 0, 0, row, col, visited);
};
//console.log("min path is", shortestPathinBFS(minMatrix));

// minDeletionOf Obstacle
// minDeletionOf Obstacle
//minDeletionOf Obstacle
//minDeletionOf Obstacle
const minDeletionOfObstacle = mat => {
  if (mat === null || mat.length === 0) return 0;

  let row = mat.length;
  let col = mat[0].length;
  let visited = new Set();
  const isSafe = (mat, i, j, row, col, visited, obs, dist) => {
    if (
      i >= 0 &&
      i < row &&
      j >= 0 &&
      j < col &&
      !visited.has(`${i} ${j} ${dist}${obs}`)
    ) {
      return true;
    } else return false;
  };
  const miniDeletion1 = (mat, ii, jj, row, col, visited) => {
    let queue = [[0, 0, 0, 0]];

    while (queue.length > 0) {
      let [i, j, dist, obs] = queue.shift();
      if (i === row - 1 && j === col - 1) {
        return dist;
      }

      if (isSafe(mat, i, j + 1, row, col, visited, obs, dist) && obs <= 2) {
        if (mat[i][j + 1] == 1) {
          queue.push([i, j + 1, dist + 1, obs + 1]);
          visited.add(`${i} ${j + 1} ${dist}${obs + 1}`);
        } else if (mat[i][j + 1] == 0) {
          queue.push([i, j + 1, dist + 1, obs]);
          visited.add(`${i} ${j + 1} ${dist}${obs}`);
        }
      }
      if (isSafe(mat, i + 1, j, row, col, visited, obs, dist) && obs <= 2) {
        if (mat[i + 1][j] == 1) {
          queue.push([i + 1, j, dist + 1, obs + 1]);
          visited.add(`${i + 1} ${j} ${dist}${obs + 1}`);
        } else if (mat[i + 1][j] == 0) {
          queue.push([i + 1, j, dist + 1, obs]);
          visited.add(`${i + 1} ${j} ${dist}${obs}`);
        }
      }
    }
    return -1;
  };
  return miniDeletion1(mat, 0, 0, row, col, visited);
};
let obstcaleMatrix = [
  [0, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 0]
];
//console.log("min path is444", minDeletionOfObstacle(obstcaleMatrix));

var shortestPath = function(grid, k) {
  let X = grid.length;
  let Y = grid[0].length;

  let visited = new Set();

  let q = [{ x: 0, y: 0, s: 0, o: 0 }];
  while (q.length !== 0) {
    let cur = q.shift();
    let coord = `${cur.x} ${cur.y} ${cur.o}`;
    if (
      cur.x < 0 ||
      cur.x === X ||
      cur.y < 0 ||
      cur.y === Y ||
      visited.has(coord) ||
      cur.o > k
    ) {
      continue;
    }

    if (grid[cur.x][cur.y] === 1) {
      ++cur.o;
    }

    if (cur.x === X - 1 && cur.y === Y - 1) {
      return cur.s;
    }

    visited.add(coord);

    q.push({ x: cur.x - 1, y: cur.y, s: cur.s + 1, o: cur.o });
    q.push({ x: cur.x + 1, y: cur.y, s: cur.s + 1, o: cur.o });
    q.push({ x: cur.x, y: cur.y - 1, s: cur.s + 1, o: cur.o });
    q.push({ x: cur.x, y: cur.y + 1, s: cur.s + 1, o: cur.o });
  }
  return -1;
};

//console.log("shortestPath", shortestPath(obstcaleMatrix, 2));

// has a valid path with sign of road

const hasvalidpath = () => {
  let grid = [
    [2, 4, 3],
    [6, 5, 2]
  ];

  let row = grid.length;
  let col = grid[0].length;
  let visited = [
    [0, 0, 0],
    [0, 0, 0]
  ];
  const isSafe = (i, j, row, col, visited) => {
    if (i >= 0 && i < row && j >= 0 && j < col && !visited[i][j]) {
      return true;
    } else return false;
  };
  const checkPath = (mat, i, j, row, col, visited) => {
    if (i === row - 1 && j === col - 1) {
      console.log("reached end");
      return true;
    }
    if (isSafe(i, j, row, col, visited)) {
      visited[i][j] = true;
      if (mat[i][j] == 1) {
        checkPath(i);
      }
    }
  };
  checkPath(grid, 0, 0, row, col, visited);
};
//console.log(hasvalidpath());

let shortMat = [[1, 1, 1, 1, 1]];
const shortestpathInMatrix = () => {};
shortestpathInMatrix();

// minWindow String
//minWindowS tring
var minWindowString = function(s, t) {
  if (t === null) return "";

  function minWindowCheck(str, tar) {
    if (t == null || t.length > str.length) {
      return "";
    }
    let map = new Map();

    for (let key of tar) {
      let data = map.get(key);
      if (data) {
        map.set(key, data + 1);
      } else {
        map.set(key, 1);
      }
    }

    let strLen = str.length;
    let start = 0;
    let end = 0;
    let minStart = 0;
    let minLen = 1000000;
    let counter = tar.length;
    while (end < strLen) {
      let keyCount = map.get(str[end]);
      if (keyCount > 0) {
        counter--;
      }
      map.set(str[end], keyCount - 1);
      while (counter === 0) {
        if (minLen > end - start) {
          minLen = end - start;
          minStart = start;
        }
        let key = map.get(str[start]);
        map.set(str[start], key + 1);
        if (map.get(str[start]) > 0) {
          counter++;
        }
        start++;
      }
      end++;
    }
    console.log("minStart is ", minStart, minLen);
    return minLen == 1000000
      ? ""
      : str.substring(minStart, minStart + minLen + 1);
  }

  return minWindowCheck(s, t);
};
//console.log(minWindowString("BBBAACDBAHGHBAAAAAABCIJ", "BBC"));

//const subarraysWithKDistinct = function(arr, k) {};
//console.log("", subarraysWithKDistinct([1, 2, 1, 2, 3], 2));

var jump = function(nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let len = nums.length;
  let currMax = 0;
  let end = 0;
  let jumps = 0;
  for (let i = 0; i < len; i++) {
    currMax = Math.max(currMax, i + nums[i]);
    if (i === end) {
      jumps++;
      end = currMax;
    }
  }
  return jumps;
};

//console.log(jump([2, 3, 1, 1, 4]));

const perfectSqareSolveWithDP = num => {
  if (num <= 3) {
    return num;
  }
  let dp = [0, 1, 2, 3];
  for (let i = 4; i <= num; i++) {
    dp[i] = i;
    for (let k = 1; k <= Math.floor(Math.sqrt(i)); k++) {
      let res = k * k;
      dp[i] = Math.min(dp[i], dp[i - res] + 1);
    }
  }
  console.log("dp solution", dp);
};
//console.log("perfectsquare", perfectSqareSolveWithDP(50));

const perfectSqaureRecusive = num => {
  if (num <= 3) {
    return num;
  }
  let res = num;
  for (let i = 1; i <= num; i++) {
    let temp = i * i;
    if (temp > num) {
      break;
    }
    res = Math.min(res, 1 + perfectSqaureRecusive(num - temp));
  }
  return res;
};
//console.log("perfect square is", perfectSqaureRecusive(5));

let start = "hit";
let end = "cog";
let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

const isOneCharDiff = (first, second) => {
  if (first === second || first.length !== second.length) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      count++;
    }
  }
  return count === 1;
};
//isOneCharDiff("pio", "uio");
const wordLadderProblem = (st, end, list) => {
  let queqe = [];
  if (start === end) {
    return true;
  }
  queqe.push(st);
  let visited = [];
  visited.push(st);
  let ledder = 1;
  while (queqe.length > 0) {
    let size = queqe.length;

    while (size--) {
      let word = queqe.shift();
      if (word === end) {
        console.log("hiii", visited);
        return ledder;
      }
      // find here words which are one char far from current word
      for (let i = 0; i < list.length; i++) {
        if (isOneCharDiff(word, list[i]) && !visited.includes(list[i])) {
          visited.push(list[i]);
          queqe.push(list[i]);
        }
      }
    }
    ledder++;
  }
  return 0;
};
//console.log("word ladder solution is", wordLadderProblem(start, end, wordList));

const printpathInBFS = (st, end, list) => {
  let queqe = [];
  if (start === end) {
    return true;
  }
  queqe.push([st]);
  let visited = [];
  visited.push(st);
  while (queqe.length > 0) {
    let pathArr = queqe.shift();
    let word = pathArr[pathArr.length - 1];
    if (word === end) {
      console.log("hiii", pathArr);
      // return true;
    }
    // find here words which are one char far from current word
    for (let i = 0; i < list.length; i++) {
      if (isOneCharDiff(word, list[i]) && !visited.includes(list[i])) {
        visited.push(list[i]);
        queqe.push([...pathArr, list[i]]);
      }
    }
  }
  return false;
};
console.log(" printpathInBFS is", printpathInBFS(start, end, wordList));
