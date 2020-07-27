import PriorityQueue from "priorityqueuejs";
let list1 = [
  [0, 2],
  [5, 10],
  [13, 23],
  [24, 25]
];
let list2 = [
  [1, 5],
  [8, 12],
  [15, 24],
  [25, 26]
];
const isIntersection = (p1, p2) => {
  let leftBound = Math.max(p1[0], p2[0]);
  let rightBound = Math.min(p1[1], p2[1]);
  return leftBound <= rightBound;
};
const getIntersection = (p1, p2) => {
  return [Math.max(p1[0], p2[0]), Math.min(p1[1], p2[1])];
};
const intervalIntersection = (l1, l2) => {
  console.log("list section");
  let left = 0;
  let right = 0;
  let result = [];
  while (left < l1.length && right < l2.length) {
    //debugger;
    if (isIntersection(l1[left], l2[right])) {
      result.push([getIntersection(l1[left], l2[right])]);
    }

    if (l1[left][1] < l2[right][1]) {
      left++;
    } else {
      right++;
    }
  }
  console.log(result);
  return result;
};

console.log("intersection of interval", intervalIntersection(list1, list2));

var eraseOverlapIntervals = function(intervals) {
  if (intervals.length == 0) return 0;

  let count = 0;

  intervals.sort((a, b) => a[1] - b[1]); // organize by end time ascending
  console.log(intervals);
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start2, end2] = intervals[i];

    if (end <= start2) {
      // there is no overlap
      end = end2;
    } else {
      // there is an overlap
      count++;
      end = Math.min(end2, end);
    }
  }

  console.log(count);
  return count;
};

eraseOverlapIntervals([
  [1, 10],
  [2, 5],
  [3, 8],
  [3, 10],
  [4, 10],
  [5, 8]
]);

let anagrams = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupAnagrams = function(arr) {
  if (arr === null || arr.length === 0) {
    return [];
  }
  let len = arr.length;
  let map = new Map();
  let result = [];
  arr.forEach((string, index) => {
    let sortedArr = string
      .split("")
      .sort()
      .join("");
    //debugger;
    if (map.get(sortedArr)) {
      map.set(sortedArr, [...map.get(sortedArr), anagrams[index]]);
    } else {
      map.set(sortedArr, [anagrams[index]]);
    }
  });

  console.log("arr is", arr, map, Object.values(map));
};
groupAnagrams(anagrams);

const groupAnagramsSecond = function(arr) {
  if (arr === null || arr.length === 0) {
    return [];
  }
  let len = arr.length;
  let map = new Map();
  let result = [];
  let charArr = ["abcdefghijklmnopqrstuvwxyz"];
  arr.forEach((string, index) => {
    let str = [];
    for (let i = 0; i < string.length; i++) {
      str[string[1]] = 1;
    }
    let sortedArr;
    if (map.get(sortedArr)) {
      map.set(sortedArr, [...map.get(sortedArr), anagrams[index]]);
    } else {
      map.set(sortedArr, [anagrams[index]]);
    }
  });

  console.log("arr is", arr, map, Object.values(map));
};
//groupAnagramsSecond(anagrams);
// A*B =LCM (A,B) * HCM(A,B)
// hcm or gcd
const getGCDfNumber = (a, b) => {
  if (a === 0) {
    return b;
  }
  return getGCDfNumber(b % a, a);
};
console.log("GCD or HCM of a number is", getGCDfNumber(12, 25));

// 1  0  1

//2^
const makeBinarytoDecimal = str => {
  if (str === null) return null;
  let len = str.length - 1;
  let res = 0;
  for (let i = len; i >= 0; i--) {
    res = parseInt(str[i]) * Math.pow(2, len - i) + res;
  }
  return res;
};
console.log("mkake binary to decimal", makeBinarytoDecimal("101"));
let charArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
const excelTitleNumberTodecimal = str => {
  if (str === null) return null;
  if (str === null) return null;
  let len = str.length - 1;
  let res = 0;

  for (let i = len; i >= 0; i--) {
    res = (charArray.indexOf(str[i]) + 1) * Math.pow(26, len - i) + res;
  }
  return res;
};
console.log(
  "excel title to number conversion",
  excelTitleNumberTodecimal("CDA")
);
const excelTitleNumberSeondmethod = str => {
  if (str === null) return null;
  if (str === null) return null;
  let len = str.length - 1;
  let res = 0;

  for (let i = 0; i <= len; i++) {
    res = res * 26 + charArray.indexOf(str[i]) + 1;
  }
  return res;
};
console.log("excel title second method", excelTitleNumberSeondmethod("CDA"));

const convertToTitleExcel = function(n) {
  if (n === null) {
    return null;
  }
  let res = "";
  while (n > 0) {
    let rem = n % 26;
    if (rem === 0) {
      res = res + charArray[25];
      n = parseInt(n / 26) - 1;
    } else {
      res = res + charArray[rem - 1];
      n = parseInt(n / 26);
    }
  }
  return res
    .split("")
    .reverse()
    .join("");
};

console.log("convertToTitleExcel", convertToTitleExcel(26));

var wordBreak = function(s, dict1) {
  let dict = new Set(["aaaa", "aa", "sam"]);
  function checkWord(str) {
    if (str.length === 0) {
      return true;
    }
    for (let i = 0; i < str.length; i++) {
      let sub = str.substring(0, i + 1);
      if (dict.has(sub) && checkWord(str.substring(i + 1))) {
        return true;
      }
    }
    return false;
  }

  return checkWord(s);
};
console.log("word break find is", wordBreak("aaaaaaa"));

const wordBreak2 = function(s) {
  let dict = new Set(["i", "am", "vivek"]);
  let f = new Array(s.length + 1).fill(false);
  f[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (f[j] && dict.has(s.substring(j, i))) {
        f[i] = true;
        break;
      }
    }
  }

  return f[s.length];
};

console.log("word break problem", wordBreak2("icamvivek"));

const checkHappyNumber = num => {
  function getSquareofDigit(n) {
    let squareSum = 0;
    while (n > 0) {
      squareSum = squareSum + (n % 10) * (n % 10);
      n = parseInt(n / 10);
    }
    return squareSum;
  }
  //getSquareofDigit(num);

  let slow = num;
  let fast = num;

  do {
    slow = getSquareofDigit(slow);
    fast = getSquareofDigit(getSquareofDigit(fast));
  } while (slow !== fast);

  return slow === 1;
};
console.log("checkHappyNumber", checkHappyNumber(23));

const minOperationToConvertBinarytoOne = str => {
  if (str === null) {
    return null;
  }
  let len = str.length;
  let res = 0;
  let carry = 0;
  for (let i = len - 1; i > 0; i--) {
    if (parseInt(str[i]) + carry === 1) {
      carry = 1;
      res = res + 2;
    } else {
      res = res + 1;
    }
  }

  return res + carry;
};
console.log(
  "min operation to convert ",
  minOperationToConvertBinarytoOne("1101")
);

const duplicateManytimeIngivenrange = arr => {
  let len = arr.length;

  let slow = arr[0];
  let fast = arr[arr[0]];

  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[arr[fast]];
  }
  slow = 0;

  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[fast];
  }

  return slow;
};
console.log("find dupli", duplicateManytimeIngivenrange(2, 4, 2, 1, 3));

let snakeBoard = [
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 35, -1, -1, 13, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 15, -1, -1, -1, -1]
];
const getBoardvalues = (mat, num) => {
  let n = mat.length;
  let r = parseInt((num - 1) / n);
  let x = n - 1 - r;
  let y = r % 2 == 0 ? num - 1 - r * n : n + r * n - num;
  return mat[x][y];
};
const bfssnakeLadder = (mat, num, end) => {
  let queue = [];
  queue.push([num, 0]);
  let visited = [];
  while (queue.length > 0) {
    let [pos, dist] = queue.shift();
    // debugger;
    if (pos === end) {
      return dist;
    }
    for (let i = pos + 1; i <= pos + 6 && i <= end; i++) {
      let nextPos = i;

      let boardval = getBoardvalues(mat, nextPos);
      // console.log("boardval", boardval);
      if (boardval > 0) nextPos = boardval;
      // if (!visited[nextPos]) {
      // visited[nextPos] = true;
      queue.push([nextPos, dist + 1]);
      // }
    }
  }
  return -1;
};
const snakeLaddergame = mat => {
  if (mat === null || mat.length === 0) {
    return null;
  }
  let row = mat.length;
  let col = mat[0].length;
  let number = row * col;
  return bfssnakeLadder(mat, 1, number);
};
console.log("snanke ladder game min jump", snakeLaddergame(snakeBoard));

const diffWayToAddParanthesis = str => {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "+" || str[i] === "*") {
      let res1 = diffWayToAddParanthesis(str.substring(0, i));
      let res2 = diffWayToAddParanthesis(str.substring(i + 1));
      for (const first of res1) {
        for (const second of res2) {
          let final = 0;
          if (str[i] === "+") {
            final = first + second;
          } else if (str[i] === "*") {
            final = first * second;
          } else if (str[i] === "-") {
            final = first - second;
          }
          res.push(final);
        }
      }
    }
  }
  if (!res.length) {
    res.push(str);
  }
  return res;
};
console.log("diff add parantheses", diffWayToAddParanthesis("2*3-4*5"));

let countBinary = 5;
const totalUniqBinaryTreegenerate = (start, end) => {
  if (!start) return [];
  let res = [];
  if (start > end) {
    return [null];
  }
  for (let i = start; i <= end; i++) {
    let leftTree = totalUniqBinaryTreegenerate(start, i - 1);
    let rightTree = totalUniqBinaryTreegenerate(i + 1, end);
    for (const left of leftTree) {
      for (const right of rightTree) {
        // let tree = new BinaryTree(i,left,right);
        res.push(1);
      }
    }
  }
  return res;
};

console.log(
  "binary tree coun unique",
  totalUniqBinaryTreegenerate(1, countBinary)
);

const uniqueBinarTreeCount = (start, end) => {
  if (start >= end) {
    return 1;
  }
  let total = 0;
  for (let i = start; i <= end; i++) {
    let left = uniqueBinarTreeCount(start, i - 1);
    let right = uniqueBinarTreeCount(i + 1, end);
    total += left * right;
  }
  return total;
};
console.log("uniuq bst count", uniqueBinarTreeCount(1, 3));

const countTreeWayDP = num => {
  let dp = new Array(num + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = dp[i] + dp[j - 1] * dp[i - j];
    }
  }
  console.log("dp table", dp);
  return dp[dp.length - 1];
};
console.log("total way btree DP", countTreeWayDP(3));

const countPrimes = function(n) {
  let res = new Array(n + 1).fill(false);
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (res[i] === false) {
      count++;
      for (let j = 2; j * i < n; j++) {
        res[j * i] = true;
      }
    }
  }
  console.log(res);
  return count;
};

console.log("count prime number", countPrimes(10));

const numIslands = mat => {
  if (mat === null || mat.length == 0) return 0;
  let row = mat.length;
  let col = mat[0].length;
  let count = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === "1") {
        dfs(mat, i, j, row, col);
        count++;
      }
    }
  }
  return count;
};

function dfs(mat, i, j, row, col) {
  if (i < 0 || i >= row || j < 0 || j >= col || mat[i][j] !== "1") {
    return;
  }
  mat[i][j] = "0";
  dfs(mat, i + 1, j, row, col);
  dfs(mat, i - 1, j, row, col);
  dfs(mat, i, j + 1, row, col);
  dfs(mat, i, j - 1, row, col);
}

console.log("number of island", numIslands([]));

const isUgly = function(num) {
  if (num <= 0) {
    return false;
  }
  while (num % 2 === 0) num = num / 2;
  while (num % 3 === 0) num = num / 3;
  while (num % 5 === 0) num = num / 5;

  return num === 1;
};

const nthUglyNumber = function(n) {
  if (n <= 0) return 0;

  let index2 = 0;
  let index3 = 0;
  let index5 = 0;
  let dp = [1];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[index2] * 2, dp[index3] * 3, dp[index5] * 5);

    if (dp[i] === dp[index2] * 2) index2++;
    if (dp[i] === dp[index3] * 3) index3++;
    if (dp[i] === dp[index5] * 5) index5++;
  }

  return dp[dp.length - 1];
};

console.log("nth ugly number is", nthUglyNumber(10));

const nthUglyNumberSecondMthod = function(n) {
  let l2 = 0,
    l3 = 0,
    l5 = 0;
  let ugly = [1];
  let u2 = 2,
    u3 = 3,
    u5 = 5;
  for (let i = 1; i < n; i++) {
    ugly[i] = Math.min(u2, u3, u5);

    if (ugly[i] == u2) {
      l2++;
      u2 = ugly[l2] * 2;
    }
    if (ugly[i] == u3) {
      l3++;
      u3 = ugly[l3] * 3;
    }
    if (ugly[i] == u5) {
      l5++;
      u5 = ugly[l5] * 5;
    }
  }
  return ugly[n - 1];
};

const findDuplaicteInrage = arr => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    arr[arr[i] % len] = arr[arr[i] % len] + len;
  }
  for (let i = 0; i < len; i++) {
    if (arr[i] >= len * 2) {
      console.log(i + " ");
    }
  }
  console.log("dunp", arr);
};
console.log(
  "find duplcaite in range",
  findDuplaicteInrage([0, 4, 3, 2, 7, 8, 2, 3, 5, 5, 5, 1])
);

var largestRectangleArea = function(arr) {
  if (arr === null || arr.length === 0) return 0;

  let len = arr.length;
  let i = 0;
  let stack = [];
  let max = -10;
  while (i < len) {
    // debugger;
    while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
      max = Math.max(
        max,
        arr[stack.pop()] *
          (i - (stack.length !== 0 ? stack[stack.length - 1] + 1 : 0))
      );
    }
    stack.push(i++);
  }

  while (stack.length) {
    let pop = stack.pop();
    let stackTopIndex = stack[stack.length - 1];
    max = Math.max(
      max,
      arr[pop] * (i - (stack.length ? 0 : stackTopIndex + 1))
    );
  }
  return max;
};

console.log("histogram area", largestRectangleArea([2, 1, 5, 6, 2, 3]));

var maximalRectangle = function(mat) {
  if (mat === null || mat.length === 0) return 0;

  let row = mat.length;
  let col = mat[0].length;
  let rowsum = mat[0];
  // caluate here first row result
  let maxarea = largestRectangleArea(mat[0]);
  for (let i = 1; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // this case important.....add the top row elem to curr row elem  only  curr is one...
      if (mat[i][j] === "1") {
        rowsum[j] = parseInt(rowsum[j]) + parseInt(mat[i][j]);
      } else {
        rowsum[j] = parseInt(mat[i][j]);
      }
    }
    maxarea = Math.max(maxarea, largestRectangleArea(rowsum));
  }
  return maxarea;
};
console.log(
  "max area",
  maximalRectangle([
    ["0", "1"],
    ["1", "0"]
  ])
);
function largestRectangleArea1(arr) {
  if (arr === null || arr.length === 0) return 0;
  let len = arr.length;
  let i = 0;
  let stack = [];
  let maxArea = 0;
  while (i < len) {
    while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
      maxArea = Math.max(
        maxArea,
        arr[stack.pop()] *
          (i - (stack.length !== 0 ? stack[stack.length - 1] + 1 : 0))
      );
    }
    stack.push(i++);
  }
  while (stack.length) {
    maxArea = Math.max(
      maxArea,
      arr[stack.pop()] *
        (i - (stack.length !== 0 ? stack[stack.length - 1] + 1 : 0))
    );
  }
  return maxArea;
}

const firsRowColInmatrix = () => {
  let mat = [
    [1, 2, 3, 4],
    [5, 1, 1, 1],
    [6, 0, 0, 0],
    [7, 1, 1, 1]
  ];
  let dp = mat.map(arr => [...arr]); // copy a mtrix board

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      // copy only first row and colom elemnt
      if (!i || !j) {
        dp[i][j] = mat[i][j];
      }
    }
  }
  console.log(dp);
};
firsRowColInmatrix();

const floodFillofMatrix = (mat, i, j, row, col, visited) => {
  if (i < 0 || i >= row || j < 0 || j >= col || mat[i][j] === 1) return;
  mat[i][j] = 1;
  floodFillofMatrix(mat, i + 1, j, row, col);
  floodFillofMatrix(mat, i - 1, j, row, col);
  floodFillofMatrix(mat, i, j + 1, row, col);
  floodFillofMatrix(mat, i, j - 1, row, col);
};
const findClosedIslandDFS = (mat, i, j, row, col, visited) => {
  if (i < 0 || i >= row || j < 0 || j >= col || mat[i][j] === 1) return;
  mat[i][j] = 1;
  findClosedIslandDFS(mat, i + 1, j, row, col);
  findClosedIslandDFS(mat, i - 1, j, row, col);
  findClosedIslandDFS(mat, i, j + 1, row, col);
  findClosedIslandDFS(mat, i, j - 1, row, col);
};
const numberOfClosedisland = mat => {
  if (mat === null || mat.length === 0) return null;
  let row = mat.length;
  let col = mat[0].length;
  let count = 0;

  for (let i = 0; i < col; i++) {
    if (mat[0][i] === 0) {
      floodFillofMatrix(mat, 0, i, row, col);
    }
  }
  for (let i = 0; i < row; i++) {
    if (mat[i][col - 1] === 0) {
      floodFillofMatrix(mat, i, col - 1, row, col);
    }
  }
  for (let i = 0; i < col; i++) {
    if (mat[row - 1][i] === 0) {
      floodFillofMatrix(mat, row - 1, i, row, col);
    }
  }
  for (let i = 0; i < row; i++) {
    if (mat[i][0] === 0) {
      floodFillofMatrix(mat, i, 0, row, col);
    }
  }

  // fisrt visit the boundray of matrix
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 0) {
        findClosedIslandDFS(mat, i, j, row, col);
        count++;
      }
    }
  }

  return count;
};
let island = [
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 1, 0, 1],
  [1, 1, 0, 1, 1, 1, 1, 0]
];
console.log("number of closed island", numberOfClosedisland(island));

// max area of island
let islandArea = [
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
];

const maxAreaDFS = (mat, i, j, row, col) => {
  //debugger;
  if (i < 0 || i >= row || j < 0 || j >= col || mat[i][j] === 0) return 0;
  mat[i][j] = 0;

  let res = 1;
  res = res + maxAreaDFS(mat, i, j + 1, row, col);
  res = res + maxAreaDFS(mat, i + 1, j, row, col);
  res = res + maxAreaDFS(mat, i, j - 1, row, col);
  res = res + +maxAreaDFS(mat, i - 1, j, row, col);
  return res;
  // return (
  //   1 +
  //   maxAreaDFS(mat, i, j + 1, row, col) +
  //   maxAreaDFS(mat, i, j - 1, row, col) +
  //   maxAreaDFS(mat, i - 1, j, row, col) +
  //   maxAreaDFS(mat, i + 1, j, row, col)
  // );
};
const maxAreainIsland = mat => {
  if (mat === null || mat.length === 0) return 0;
  let row = mat.length;
  let col = mat[0].length;
  let result = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 1) {
        let res = maxAreaDFS(mat, i, j, row, col);
        console.log(res);
        result = Math.max(result, res);
      }
    }
  }
  return result;
};
console.log("maxArea in island1", maxAreainIsland(islandArea));

// medain of stream of array

// let queue = new PriorityQueue(function(a, b) {
//   return b.cash - a.cash;
// });
// queue.enq({ cash: 250, name: "Valentina" });
// queue.enq({ cash: 300, name: "Jano" });
// queue.enq({ cash: 150, name: "Fran" });
// queue.size(); // 3
// queue.peek(); // { cash: 300, name: 'Jano' }
// // { cash: 300, name: 'Jano' }
// console.log("priority queue size is", queue.deq());

const findMedain = (minHeap, maxHeap) => {
  if (minHeap.size() === maxHeap.size()) {
    return (minHeap.peek() + maxHeap.peek()) / 2;
  } else {
    return minHeap.peek();
  }
};
const addItemtoHeap = (item, minHeap, maxHeap) => {
  if (minHeap.size() === maxHeap.size()) {
    maxHeap.enq(item);
    minHeap.enq(maxHeap.deq());
  } else {
    minHeap.enq(item);
    maxHeap.enq(minHeap.deq());
  }
};
const medainofStreamOfIntegar = arr => {
  if (arr === null || arr.length === 0) return 0;
  let maxHeap = new PriorityQueue((a, b) => a - b);
  let minHeap = new PriorityQueue((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    addItemtoHeap(arr[i], minHeap, maxHeap);
    let median = findMedain(minHeap, maxHeap);
    console.log("medain is median", median);
  }
  console.log(minHeap, maxHeap);
};
console.log("medain is", medainofStreamOfIntegar([1, 3, -1, -3, 5, 3, 6, 7]));

//

///// dijkastra algorithm

//implemnt graph with adjancy list
function Node(data, weight) {
  this.data = data;
  this.weight = weight;
  this.next = null;
}
function Linkedlist() {}
function Graph(node) {
  this.root = null;
  this.graph = [];
  for (let i = 1; i <= node; i++) {
    this.graph[i] = new Linkedlist();
  }
}
Graph.prototype.addEdge = function(source, destination, weight) {
  let i = source;
  if (!this.graph[i]) {
    this.graph[i] = new Node(destination, weight);
  } else {
    let node = this.graph[i];
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(destination, weight);
  }
};

const makeGraph = () => {
  let graph = new Graph(5);
  graph.addEdge(0, 1, 10);
  graph.addEdge(0, 4, 3);
  graph.addEdge(1, 2, 2);
  graph.addEdge(1, 4, 4);
  graph.addEdge(2, 3, 9);
  graph.addEdge(3, 2, 7);
  graph.addEdge(4, 1, 1);
  graph.addEdge(4, 2, 8);
  graph.addEdge(4, 3, 2);
  graph.addEdge(4, 4, 2);
  graph.addEdge(0, 0, 2);
  return graph;
};
console.log("adjancy list graph", makeGraph());

const dijkastraAlgo = (graph, N) => {
  let queue = new PriorityQueue((a, b) => b.dist - a.dist);
  let visited = [];
  let distance = [0, 100, 100, 100, 100, 100];
  queue.enq({ currNode: 0, dist: 0 });
  while (queue.size()) {
    let { currNode, dist } = queue.deq();
    //if (visited[currNode]) continue;
    //visited[currNode] = true;
    let adjacentList = graph.graph[currNode];
    while (adjacentList) {
      let adJacentNode = adjacentList.data;
      if (dist + adjacentList.weight < distance[adJacentNode]) {
        let updatedDist = dist + adjacentList.weight;
        queue.enq({ currNode: adJacentNode, dist: updatedDist });
        distance[adJacentNode] = updatedDist;
      }
      adjacentList = adjacentList.next;
    }
  }
  console.log(distance);
};
console.log("dijkastra path ", dijkastraAlgo(makeGraph(), 5));
