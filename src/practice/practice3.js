const isValidParenthesis = str => {
  if (str === null) return true;

  let count = 0;
  let strLen = str.length;
  for (let i = 0; i < strLen; i++) {
    if (str[i] === "(") {
      count++;
    } else if (str[i] === ")") {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
};
console.log("is valid paranthesis", isValidParenthesis("()"));

const removeInvalidParanthessis = (str, n) => {
  if (str === null) return false;
  console.log("str", str);
};
let paranthesis = "()()(()))";
removeInvalidParanthessis(paranthesis, paranthesis.length);
let counter = 0;

// here is top down approache using hasmap to store
// not we are using if else here and returing at last
const longestCommonSubsequenceLCS = (first, second, n, m, hashMap) => {
  //console.log("hi", counter++);
  if (n === 0 || m === 0) {
    return 0;
  }
  let key = m + "I" + n;
  if (!hashMap.get(key)) {
    if (first[n - 1] === second[m - 1]) {
      // eslint-disable-next-line
      hashMap.set(
        key,
        longestCommonSubsequenceLCS(first, second, n - 1, m - 1, hashMap) + 1
      );
    } else {
      hashMap.set(
        key,
        Math.max(
          longestCommonSubsequenceLCS(first, second, n, m - 1, hashMap),
          longestCommonSubsequenceLCS(first, second, n - 1, m, hashMap)
        )
      );
    }

    // or if dont match
  }
  return hashMap.get(key);
};
let firstString = "ABCBDAB";
let secondString = "BDCABA";
let firstLen = firstString.length;
let secondLen = secondString.length;
let hashMap = new Map();
console.log(
  longestCommonSubsequenceLCS(
    firstString,
    secondString,
    firstLen,
    secondLen,
    hashMap
  ),
  hashMap
);
//

//

//
//

// function to display diff between to string..that use the LCS lookup table

// if string in dp lookup value diagaonal..str1 is gearter then two..then added the str2 char
const diffOfTwoStringUSingLCSDP = (str1, str2, n, m, dp) => {
  if (n > 0 && m > 0 && str1[n - 1] === str2[m - 1]) {
    diffOfTwoStringUSingLCSDP(str1, str2, n - 1, m - 1, dp);
    console.log(" " + str1[n - 1]);
  } else if (m > 0 && (n == 0 || dp[n][m - 1] >= dp[n - 1][m])) {
    diffOfTwoStringUSingLCSDP(str1, str2, n, m - 1, dp);
    console.log(" +", str2[m - 1]);
  } else if (n > 0 && (m === 0 || dp[n][m - 1] < dp[n - 1][m])) {
    diffOfTwoStringUSingLCSDP(str1, str2, n - 1, m, dp);
    console.log(" -", str1[n - 1]);
  }
};
const longgestLCSDP = (str1, str2, n, m) => {
  let str1Len = str1.length;
  let str2Len = str2.length;

  let dp = [];
  for (let i = 0; i <= str1Len; i++) {
    dp[i] = [];
    for (let j = 0; j <= str2Len; j++) {
      dp[i][j] = 0;
    }
  }
  for (let i = 1; i <= str1Len; i++) {
    for (let j = 1; j <= str2Len; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  diffOfTwoStringUSingLCSDP("ABCDE", "ACFDE", 5, 5, dp);
  console.log("LCS DP is", dp);
};
//longgestLCSDP("ABCDE", "ACFDE", 5, 5);

// maximum path sum in matrix from top row to boootm row

let matrix = [
  [10, 10, 2, 0, 20, 4],
  [1, 0, 0, 30, 2, 5],
  [0, 10, 4, 0, 2, 0],
  [1, 0, 2, 20, 0, 4]
];

const findMaxAtNextLevel = (mat, maxIndex, i) => {
  let max = maxIndex;
  if (max >= 0 && mat[i][max] <= mat[i][maxIndex - 1]) {
    max = max - 1;
  }
  if (max < mat[0].length && mat[i][max] < mat[i][maxIndex + 1]) {
    max = max + 1;
  }
  return max;
};
const maxPathSumMatrix = mat => {
  if (mat === null || mat.length === 0 || mat[0].length === 0) return 0;

  let row = mat.length;
  let col = mat[0].length;

  // first find the max value in fist row
  let max = -1;
  let maxIndex = -1;
  for (let i = 0; i < col; i++) {
    if (mat[0][i] > max) {
      max = mat[0][i];
      maxIndex = i;
    }
  }
  console.log("maxindex", maxIndex);
  let sum = mat[0][maxIndex];
  for (let i = 1; i < row; i++) {
    maxIndex = findMaxAtNextLevel(mat, maxIndex, i);
    sum = sum + mat[i][maxIndex];
    console.log("sum is", sum);
  }
  return sum;
};
//console.log("max path is", maxPathSumMatrix(matrix));
let board = [
  [1, 4, 7, 0, 0, 0, 0, 0, 3],
  [2, 5, 0, 0, 0, 1, 0, 0, 0],
  [3, 0, 9, 0, 0, 0, 0, 0, 0],
  [0, 8, 0, 0, 2, 0, 0, 0, 4],
  [0, 0, 0, 4, 1, 0, 0, 2, 0],
  [9, 0, 0, 0, 0, 0, 6, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 9],
  [4, 0, 0, 0, 0, 2, 0, 0, 0],
  [0, 0, 1, 0, 0, 8, 0, 0, 7]
];
let sudoku = [
  [1, 4, 7, 0, 0, 0, 0, 0, 3],
  [2, 5, 0, 0, 0, 1, 0, 0, 0],
  [3, 0, 9, 0, 0, 0, 0, 0, 0],
  [0, 8, 0, 0, 2, 0, 0, 0, 4],
  [0, 0, 0, 4, 1, 0, 0, 2, 0],
  [9, 0, 0, 0, 0, 0, 6, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 9],
  [4, 0, 0, 0, 0, 2, 0, 0, 0],
  [0, 0, 1, 0, 0, 8, 0, 0, 7]
];
let sudu = [
  [1, 2, 3, 0],
  [0, 0, 0, 0],
  [7, 0, 9, 6],
  [0, 0, 0, 8]
];
const skudokuValid = sd => {
  console.log("sudoku", sd);
  let row = sd.length;
  let col = sd[0].length;
  // in this way we can traverse the sudoku grid by grid
  for (let i = 0; i < row; i += 3) {
    for (let j = 0; j < col; j += 3) {
      let map = new Map();
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          if (sd[k][l] !== 0 && map.get(sd[k][l])) {
            console.log("error row", k, "and", l, " duplicate is", sd[k][l]);
            return;
          } else {
            if (sd[k][l] !== 0) {
              map.set(sd[k][l], true);
            }
          }
        }
      }
    }
  }

  // first we check is each row caontain unique element;
  for (let i = 0; i < row; i++) {
    let map = new Map();
    for (let j = 0; j < col; j++) {
      if (sd[i][j] !== 0 && map.get(sd[i][j])) {
        console.log("error row", i, "and", j, "elemnt duplicate is", sd[i][j]);
        return false;
      } else {
        if (sd[i][j] !== 0) {
          map.set(sd[i][j], true);
        }
      }
    }
  }

  // second we check is each col can contain unique element;
  for (let i = 0; i < row; i++) {
    let map = new Map();
    for (let j = 0; j < col; j++) {
      if (sd[j][i] !== 0 && map.get(sd[j][i])) {
        console.log("error col", j, "and", i, "elemnt duplicate is", sd[j][i]);
        return false;
      } else {
        if (sd[j][i] !== 0) {
          map.set(sd[j][i], true);
        }
      }
    }
  }
};
//console.log("yes", skudokuValid(sudoku));

const isValidRow = (index, mat, row, col) => {
  let map = new Map();
  for (let i = 0; i < col; i++) {
    if (mat[index][i] !== 0 && map.get(mat[index][i])) {
      return false;
    } else {
      if (mat[index][i] !== 0) {
        map.set(mat[index][i], true);
      }
    }
  }
  return true;
};
const isValidCol = (index, mat, row, col) => {
  let map = new Map();
  for (let i = 0; i < row; i++) {
    if (mat[i][index] !== 0 && map.get(mat[i][index])) {
      return false;
    } else {
      if (mat[index][i] !== 0) {
        map.set(mat[i][index], true);
      }
    }
  }
  return true;
};
const isSudokuValidSecondMethod = mat => {
  if (mat === null || mat.length === 0 || mat[0].length === 0) return 0;
  let row = mat.length;
  let col = mat[0].length;
  for (let i = 0; i < row; i++) {
    let isRow = isValidRow(i, mat, row, col);
    let isCol = isValidCol(i, mat, row, col);
    if (!isRow || !isCol) {
      console.log("not valid");
      return false;
    }
  }
  //   for (let i = 0; i < row; i += 3) {
  //     for (let j = 0; j < col; j += 3) {
  //       let map = new Map();
  //       for (let k = i; k < i + 3; k++) {
  //         for (let l = j; l < j + 3; l++) {
  //           if (mat[k][l] !== 0 && map.get(mat[k][l])) {
  //             console.log("error row", k, "and", l, " duplicate is", mat[k][l]);
  //             return false;
  //           } else {
  //             if (mat[k][l] !== 0) {
  //               map.set(mat[k][l], true);
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  console.log("valid board");
  return true;
};
//console.log(isSudokuValidSecondMethod(sudoku));

const matrix2 = [
  [4, 2, 3, 4],
  [2, 9, 1, 10],
  [15, 1, 3, 0],
  [16, 92, 41, 44]
];
const maxSumPathInMatrixTopDown = mat => {
  if (mat === null || mat.length === 0 || mat[0].length === 0) return 0;

  let row = mat.length;
  let col = mat[0].length;
  let dp = [];
  for (let i = 0; i < row; i++) {
    dp[i] = [];
    for (let j = 0; j < col; j++) {
      dp[i][j] = 0;
      dp[0][j] = mat[0][j];
    }
  }

  // here we're gonna transform the matrix into a dp matrix
  let res = [];
  for (let i = 1; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let largest = j;
      if (dp[i - 1][largest] < dp[i - 1][j - 1] && j - 1 >= 0) {
        largest = j - 1;
      } else if (dp[i - 1][largest] < dp[i - 1][j + 1] && j + 1 < col) {
        largest = j + 1;
      }
      //res.push(mat[i][largest]);
      dp[i][j] = dp[i - 1][largest] + mat[i][j];
      res.push(mat[i - 1][largest]);
    }
  }
  console.log("dp max sum path", dp, res);
  return Math.max(...dp[row - 1]);
};

//console.log("max sum path is", maxSumPathInMatrixTopDown(matrix2));
const flatteNRecursive = arr => {
  let arrLen = arr.length;
  let result = [];
  for (let i = 0; i < arrLen; i++) {
    if (Object.prototype.toString.call(arr[i]) === "[object Array]") {
      let res = flatteNRecursive(arr[i]);
      result = result.concat(res);
      // or can use
      // result.push(...res);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
const flattenArray = arr => {
  let result = [];
  arr.forEach(data => {
    if (Array.isArray(data)) {
      result.push(...flattenArray(data));
    } else {
      result.push(data);
    }
  });

  return result;
};
console.log(
  "flatten array is",
  flatteNRecursive([
    1,
    2,
    3,
    [4, 5, 6, [7, 8, 9, 10]],
    11,
    12,
    [13, 14, [15, 16, [17]]]
  ])
);
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
let res = 1;
let req = 2;
const makeItBetter = () => {
  let res = [];
  return {
    use: function(fn) {
      res.push(fn);
    },
    get: function(req, res, next) {
      //next(1);
    }
  };
};

makeItBetter().use(add);
makeItBetter().use(sub);
makeItBetter().use(mul);

makeItBetter().get(req, res, function() {
  console.log(req, res);
});

const makeNumberPallindrom = num => {
  if (num === null) return 0;
  if (num < 9 && num >= 0) return num;
  let number = `${num}`;
  let numLen = number.length;
  let mid = Math.floor(numLen / 2);
  if (numLen % 2 === 0) {
    let first = number.substring(0, mid);
    let lastNumber = first
      .split("")
      .reverse()
      .join("");
    let newNumber = first + lastNumber;
    console.log(newNumber);

    if (parseInt(newNumber) > parseInt(number)) {
      return newNumber;
    } else {
      // will increment the number one
      let midNumber = newNumber.substring(mid - 1, mid + 1);

      let newMid = parseInt(midNumber) + 11;
      console.log(newNumber);
      if (parseInt(midNumber) < 99) {
        return (
          newNumber.substring(0, mid - 1) +
          newMid +
          newNumber.substring(mid + 1)
        );
      } else {
        // will try to increase middle number by one

        let newNumberFormed = parseInt(newNumber.substring(0, mid + 1)) + 1;
        let finalNumber = newNumberFormed + newNumber.substring(mid + 1);
        return makeNumberPallindrom(finalNumber);
      }
    }
  } else {
    let firstHalf = number.substring(0, mid);
    let palindromSecondHalf = firstHalf
      .split("")
      .reverse()
      .join("");
    let midNumber = number[mid];
    let palllindron = firstHalf + midNumber + palindromSecondHalf;
    console.log(palllindron);

    if (parseInt(number) < parseInt(palllindron)) {
      return palllindron;
    } else {
      // increase mid number if number less than 9
      if (parseInt(midNumber) < 9) {
        midNumber = parseInt(midNumber) + 1;
        return firstHalf + midNumber + palindromSecondHalf;
      } else {
        //debugger;
        // number is greater than 9...then increase the whole first half number;
        let newfirstHalf = parseInt(firstHalf + midNumber);
        let newNumber = parseInt(parseInt(newfirstHalf) + 1 + firstHalf);
        return makeNumberPallindrom(newNumber);
      }
    }
  }
};
console.log("palindrom is", makeNumberPallindrom(19999994));

const isNumberFitInsudoku = (mat, i, j, num) => {
  debugger;
  for (let row = 0; row < 9; row++) {
    if (mat[row][j] === num) return false;
  }
  for (let col = 0; col < 9; col++)
    if (mat[i][col] === num) {
      return false;
    }

  let rowStart = i * Math.floor(i / 3);
  let colStart = j * Math.floor(j / 3);
  //   for (let row = rowStart; row < rowStart + 3; row++) {
  //     for (let col = colStart; col < colStart + 3; col++) {
  //       if (mat[row][col] === num) return false;
  //     }
  //   }

  return true;
};
const solveSudoku = mat => {
  console.log("mat", mat);
  //isSudokuValidSecondMethod(mat);
  if (mat === null || mat.length === 0 || mat[0].length === null) return 0;

  let row = mat.length;
  let col = mat[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 0) {
        for (let k = 1; k < 10; k++) {
          if (isNumberFitInsudoku(mat, i, j, k)) {
            mat[i][j] = k;

            if (solveSudoku(mat)) {
              return true;
            }
            mat[i][j] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};
//solveSudoku(board);

let maze = [
  [2, 1, 0, 0],
  [3, 0, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 0, 1]
];
const isValidJump = (mat, i, j, row, col, visited) => {
  if (mat[i][j] !== 0 && i >= 0 && i < row && j >= 0 && j < col) {
    return true;
  } else return false;
};
const solveRateMazeJump = (mat, i, j, row, col, visited) => {
  if (i === row - 1 && j === col - 1) {
    visited[i][j] = 1;
    return true;
  }

  if (isValidJump(mat, i, j, row, col, visited)) {
    for (let k = 1; k <= mat[i][j]; k++) {
      visited[i][j] = 1;
      if (solveRateMazeJump(mat, i, j + k, row, col, visited)) {
        return true;
      }
      if (solveRateMazeJump(mat, i + k, j, row, col, visited)) {
        return true;
      }
      visited[i][j] = 0;
    }
    return false;
  }
  return false;
};
const ratMazeMutipleJump = mat => {
  if (mat === null || mat.length === 0 || mat[0].length === 0) return false;

  let row = mat.length;
  let col = mat[0].length;
  let visited = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  solveRateMazeJump(mat, 0, 0, row, col, visited);
  console.log("rat jump matrix", visited);
};
ratMazeMutipleJump(maze);

const arrangeNumberOfarrayToMakeBiggestNumber = arr => {
  if (arr === null || arr.length === 0) return 0;

  // to make the biggest number we applay the login of sorting
  // if xy >yx  then put x first then y   here xy means x append to y

  arr.sort((a, b) => {
    let first = `${a}`;
    let second = `${b}`;

    let left = first + second;
    let right = second + first;
    if (parseInt(left) > parseInt(right)) {
      return -1;
    }
    if (parseInt(left) < parseInt(right)) {
      return 1;
    } else {
      return 0;
    }
  });

  console.log(arr.join(""));
};
arrangeNumberOfarrayToMakeBiggestNumber([1, 34, 3, 98, 9, 76, 45, 4]);
function NodeBST(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}
function MakeBst() {}

let tree = new MakeBst();

tree.root = new NodeBST(1);
tree.root.left = new NodeBST(2);
tree.root.left.left = new NodeBST(4);
tree.root.left.left.left = new NodeBST(8);
tree.root.left.left.right = new NodeBST(9);
tree.root.left.right = new NodeBST(5);
tree.root.left.right.left = new NodeBST(10);
tree.root.left.right.right = new NodeBST(11);

tree.root.right = new NodeBST(3);
tree.root.right.left = new NodeBST(6);
tree.root.right.left.left = new NodeBST(12);
tree.root.right.left.right = new NodeBST(13);
tree.root.right.right = new NodeBST(7);
tree.root.right.right.left = new NodeBST(14);
tree.root.right.right.right = new NodeBST(15);
let nodeArry = [];
const replaceNodeOddVal = (node, level) => {
  if (node === null) {
    return null;
  }

  replaceNodeOddVal(node.left, level + 1);
  if (level % 2 !== 0) {
    let pop = nodeArry.shift();
    node.data = pop;
  }
  replaceNodeOddVal(node.right, level + 1);
};
const stoterNodeValuesinArry = (node, level) => {
  if (node === null) {
    return null;
  }
  stoterNodeValuesinArry(node.left, level + 1);
  if (level % 2 !== 0) {
    nodeArry.push(node.data);
  }
  stoterNodeValuesinArry(node.right, level + 1);
};
const alternateValueNodeLvelFullTree = node => {
  stoterNodeValuesinArry(node, 0);
  console.log(nodeArry);
  // then reverse the array
  nodeArry.reverse();
  // again do inroder travesal to cahnge value of odd level node from starting of array

  replaceNodeOddVal(node, 0);
  console.log("modified tree", node);
};
// in two traversAL
//alternateValueNodeLvelFullTree(tree.root);

const alternateValueNodeLvelFullTreeOneTravesal = (nodeL, nodeR, level) => {
  if (nodeL === null || nodeR === null) return null;
  //debugger;
  if (1) {
    let temp = nodeL.data;
    nodeL.data = nodeR.data;
    nodeR.data = temp;
  }
  alternateValueNodeLvelFullTreeOneTravesal(nodeL.left, nodeR.right, level + 1);
  alternateValueNodeLvelFullTreeOneTravesal(nodeL.right, nodeR.left, level + 1);
};
//alternateValueNodeLvelFullTreeOneTravesal(tree.root.left, tree.root.right, 0);
console.log("modified tree", tree);

const countPossibleTraiangle = arr => {
  //start brute foce approcah
  if (arr === null || arr.length < 2) return 0;
  let counter = 0;
  let arrLen = arr.length;
  //   for (let side = 0; side < arrLen - 2; side++) {
  //     for (let j = side + 1; j < arrLen - 1; j++) {
  //       for (let k = j + 1; k < arrLen; k++) {
  //         if (
  //           arr[side] + arr[j] > arr[k] &&
  //           arr[k] + arr[j] > arr[side] &&
  //           arr[side] + arr[k] > arr[j]
  //         ) {
  //           console.log(arr[side], " ", arr[j], " ", arr[k]);
  //           counter++;
  //         }
  //       }
  //     }
  //   }

  // end brute foce approcah

  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);

  for (let i = 0; i < arrLen; i++) {
    let start = i;
    let end = arrLen - 1;

    while (start < end) {
      if (arr[i] + arr[start] > arr[end]) {
        start++;
        // end--
        counter++;
      } else {
        end--;
      }
    }
  }
  console.log(counter);
};
countPossibleTraiangle([300, 21, 22, 100, 101, 200, 21]);

const sumOfmiddleElemntSortedArr = (arr1, arr2) => {
  if (
    arr1 === null ||
    arr2 === null ||
    arr1.length === 0 ||
    arr2.length === 0
  ) {
    return 0;
  }
  let arr1Len = arr1.length;
  let arr2Len = arr2.length;

  let i = 0;
  let j = 0;
  let m1 = 0;
  let m2 = 0;
  let len = parseInt(arr1Len + arr2Len) / 2;

  console.log("length is", len);
  for (let count = 0; count <= len; count++) {
    if (i == len) {
      m2 = m1;
      m1 = arr2[0];
      break;
    } else if (j === len) {
      m2 = m1;
      m1 = arr1[0];
      break;
    }
    if (arr1[i] < arr2[j]) {
      m2 = m1;
      m1 = arr1[i];
      i++;
    } else {
      m2 = m1;
      m1 = arr2[j];
      j++;
    }
  }

  console.log("result", m1, "m2", m2, "median is", (m1 + m2) / 2);
};
console.log(
  "sum is",
  sumOfmiddleElemntSortedArr([1, 12, 15, 26, 38], [2, 13, 17, 30, 45])
);
