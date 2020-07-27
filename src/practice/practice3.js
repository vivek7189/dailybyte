import tune from "material-ui/svg-icons/image/tune";

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
// console.log(
//   "flatten array is",
//   flatteNRecursive([
//     1,
//     2,
//     3,
//     [4, 5, 6, [7, 8, 9, 10]],
//     11,
//     12,
//     [13, 14, [15, 16, [17]]]
//   ])
// );
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
//console.log("palindrom is", makeNumberPallindrom(19999994));

const isNumberFitInsudoku = (mat, i, j, num) => {
  //debugger;
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
//ratMazeMutipleJump(maze);

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
//arrangeNumberOfarrayToMakeBiggestNumber([1, 34, 3, 98, 9, 76, 45, 4]);
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
//console.log("modified tree", tree);

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
//countPossibleTraiangle([300, 21, 22, 100, 101, 200, 21]);

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
// console.log(
//   "sum is",
//   sumOfmiddleElemntSortedArr([1, 12, 15, 26, 38], [2, 13, 17, 30, 45])
// );

const wildCardPatternMatchingAlgo = (str, pattern, n, m) => {
  if (n < 0 && m < 0) {
    return true;
  } else if (m < 0) {
    return false;
  }
  if (n < 0) {
    for (let i = 0; i < m; i++) {
      if (pattern[i] !== "*") return false;
    }
    return true;
  }

  if (str[n - 1] === pattern[m - 1]) {
    return wildCardPatternMatchingAlgo(str, pattern, n - 1, m - 1);
  } else if (
    str[n - 1] !== pattern[m - 1] &&
    pattern[m - 1] !== "*" &&
    pattern[m - 1] !== "?"
  ) {
    return false;
  } else if (pattern[m - 1] === "*") {
    return (
      wildCardPatternMatchingAlgo(str, pattern, n, m - 1) ||
      wildCardPatternMatchingAlgo(str, pattern, n - 1, m)
    );
  } else if (pattern[m - 1] === "?") {
    return wildCardPatternMatchingAlgo(str, pattern, n - 1, m - 1);
  }
};
let strWild = "baaabab";
let pattern = "a*ab";
console.log(
  "wild pattern match is",
  wildCardPatternMatchingAlgo(strWild, pattern, strWild.length, pattern.length)
);

const longestPrefixWhichSufixAlso = str => {
  if (str === null) return false;
  let strLen = str.length;
  let first = str.substring(0, strLen / 2);
  let second = str.substring(strLen / 2);
  console.log(first, " ", second);

  let n = first.length;
  let m = second.length;

  let i = 0;
  let j = 0;
  let counter = 0;
  while (i < n && j < m) {
    if (first[i] === second[j]) {
      counter++;
      i++;
      j++;
    } else {
      j++;
      if (counter) {
        break;
      }
    }
  }
  return counter;
};

console.log("longest prefix is ", longestPrefixWhichSufixAlso("aaa"));

let subtree = new MakeBst();
subtree.root = new NodeBST(3);
subtree.root.left = new NodeBST(6);
subtree.root.right = new NodeBST(7);
subtree.root.right.left = new NodeBST(14);

const checkEachNode = (t1, t2) => {
  if (t1 === null || t2 === null) {
    return true;
  }

  if (t1.data !== t2.data) {
    return false;
  }
  if (
    t1.data === t2.data &&
    checkEachNode(t1.left, t2.left) &&
    checkEachNode(t1.right, t2.right)
  ) {
    return true;
  }
  return false;
};
const checkIsSubTree = (t1, t2) => {
  // console.log(t1, "", t2);
  if (t1 === null) {
    return null;
  }

  if (t1.data === t2.data) {
    return console.log(checkEachNode(t1, t2));
  }
  checkIsSubTree(t1.left, t2);
  checkIsSubTree(t1.right, t2);
};

console.log(checkIsSubTree(tree.root, subtree.root));

const transformIntoSumTree = node => {
  console.log(node);
  if (node === null) return 0;

  let left = transformIntoSumTree(node.left);
  let right = transformIntoSumTree(node.right);
  let data = node.data;
  node.data = left + right;

  return data + left + right;
};
//console.log("data node", transformIntoSumTree(tree.root), tree.root);

// implemnt graph with adjancy list
function Node(data) {
  this.data = data;
  this.next = null;
}
function Linkedlist() {
  this.root = null;
}
function Graph(node) {
  this.root = null;
  this.graph = [];
  for (let i = 1; i <= node; i++) {
    this.graph[i] = new Linkedlist();
  }
}
Graph.prototype.addEdge = function(index, b) {
  let i = index;
  if (this.graph[i].root === null) {
    this.graph[i].root = new Node(b);
  } else {
    let node = this.graph[i].root;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(b);
  }
};

const makeGraph = () => {
  let graph = new Graph(7);
  graph.addEdge(1, 3);
  graph.addEdge(1, 2);
  graph.addEdge(2, 4);
  graph.addEdge(2, 1);
  graph.addEdge(3, 1);
  graph.addEdge(3, 4);
  graph.addEdge(3, 5);
  graph.addEdge(4, 2);
  graph.addEdge(4, 3);
  graph.addEdge(4, 6);
  graph.addEdge(5, 3);
  graph.addEdge(5, 7);
  graph.addEdge(6, 4);
  graph.addEdge(6, 7);
  graph.addEdge(7, 6);
  graph.addEdge(7, 5);

  return graph;
};
makeGraph();

const doDFSIterative = (graph, node, visited) => {
  let stack = [];
  stack.push(node);
  while (stack.length > 0) {
    let pop = stack.pop();
    if (!visited[pop]) {
      console.log("dfs iterative", pop);
      visited[pop] = true;
    }
    // now here we get the linked list of at index node
    let list = graph[pop].root;
    while (list) {
      let adjacentNode = list.data;
      if (!visited[adjacentNode]) {
        stack.push(adjacentNode);
      }
      list = list.next;
    }
  }
};
const doDFSRecrisive = (graph, node, visited) => {
  console.log("node dfs recrsive", node);
  visited[node] = true;

  let list = graph[node].root;
  while (list) {
    let adjacentNode = list.data;
    if (!visited[adjacentNode]) {
      doDFSRecrisive(graph, adjacentNode, visited);
    }
    list = list.next;
  }
};
const doBFSIterative = (graph, node, visitedBFS, bsfQueue) => {
  while (bsfQueue.length > 0) {
    let pop = bsfQueue.shift();
    console.log("bfs iterative", pop);
    let list = graph[pop].root;
    while (list) {
      let adjacentNode = list.data;
      if (!visitedBFS[adjacentNode]) {
        bsfQueue.push(adjacentNode);
        visitedBFS[adjacentNode] = true;
      }
      list = list.next;
    }
  }
};

const doBFSRecrisive = (graph, node, visitedBFS, bsfQueue) => {
  if (bsfQueue.length === 0) {
    return;
  }
  let pop = bsfQueue.shift();
  console.log("bfs recvrive", pop);

  let list = graph[pop].root;
  let adjacentNode;
  while (list) {
    adjacentNode = list.data;
    if (!visitedBFS[adjacentNode]) {
      bsfQueue.push(adjacentNode);
      visitedBFS[adjacentNode] = true;
    }
    list = list.next;
  }
  doBFSRecrisive(graph, adjacentNode, visitedBFS, bsfQueue);
};

const DFSOfGraph = graphData => {
  let graph = graphData.graph;
  let nodes = graphData.graph.length;
  // here will run dfs for each node////so that some disconnected node also covered
  let visitedDFS = [];
  // here below we doing dfs of graph
  for (let i = 1; i < nodes; i++) {
    if (!visitedDFS[i]) {
      //doDFSIterative(graph, i, visited);
      doDFSRecrisive(graph, i, visitedDFS);
    }
  }
  // here below we doing bfs of graph
  // in bsf both approache we need a sepearte Queuq
  let visitedBFS = [];
  let bsfQueue = [];
  for (let i = 1; i < nodes; i++) {
    if (!visitedBFS[i]) {
      bsfQueue.push(i);
      visitedBFS[i] = true;
      //doBFSRecrisive(graph, i, visitedBFS, bsfQueue);
      //doBFSIterative(graph, i, visitedBFS, bsfQueue);
    }
  }
};

DFSOfGraph(makeGraph());

const topologicalSorting = (graph, node, visited, finalStore) => {
  if (!visited[node]) {
    visited[node] = true;
  }
  let list = graph[node] && graph[node].root;
  while (list) {
    let adjacentNode = list.data;

    if (!visited[adjacentNode]) {
      topologicalSorting(graph, adjacentNode, visited, finalStore);
    }
    list = list.next;
  }
  finalStore.push(node);
};
const topoLogicalSortingOfGraph = graphData => {
  //console.log("topological graph", graph);
  let graph = graphData.graph;
  let nodes = graphData.graph.length;
  //
  let visited = [];
  let stack = [];
  // here below we doing dfs of graph
  for (let i = 1; i < nodes; i++) {
    if (!visited[i]) {
      topologicalSorting(graph, i, visited, stack);
    }
  }

  console.log("topological sorting is", stack);
};
const makeTopoLogiclGraph = () => {
  let graph = new Graph(6);
  graph.addEdge(5, 2);
  graph.addEdge(5, 0);

  graph.addEdge(4, 0);
  graph.addEdge(4, 1);
  graph.addEdge(2, 3);
  graph.addEdge(1, 3);

  return graph;
};

topoLogicalSortingOfGraph(makeTopoLogiclGraph());
let subtree1 = new MakeBst();
subtree1.root = new NodeBST(5);
subtree1.root.left = new NodeBST(-10);
subtree1.root.left.left = new NodeBST(9);
subtree1.root.left.right = new NodeBST(8);

subtree1.root.right = new NodeBST(3);
subtree1.root.right.left = new NodeBST(-4);
subtree1.root.right.right = new NodeBST(7);
let countIS = 0;
const countSubTreeTogivenSum = (node, sum) => {
  if (node.left === null && node.right === null) {
    if (node.data === sum) {
      countIS++;
    }

    return node;
  }

  let left = countSubTreeTogivenSum(node.left, sum);
  let right = countSubTreeTogivenSum(node.right, sum);
  let add = node.data + left.data + right.data;
  if (add === sum) {
    countIS++;
  }
  console.log(add);
  return add;
};
console.log(
  "countSubTreeTogivenSum is ",
  countSubTreeTogivenSum(subtree1.root, 7)
);
console.log(countIS);

const maxSumTwoNonOverlapingArray = (arr, L, M) => {
  let arrLen = arr.length;
  let sumFirstMax = -10;
  let sum = 0;
  let sumLastMax = -10;
  let lastIndex = -1;
  //debugger;
  for (let i = 0; i < arrLen; i++) {
    if (i < L) {
      sum += arr[i];
    } else {
      sum += arr[i] - arr[i - L];
      if (sumFirstMax < sum) {
        sumFirstMax = sum;
        lastIndex = i;
      }
    }
  }
  sum = 0;
  let currentIndx = 0;
  for (let i = 0; i < arrLen; i++) {
    if (i <= lastIndex && i > lastIndex - L) {
      sum = 0;
      currentIndx = 0;
      continue;
    }
    if (currentIndx < M) {
      currentIndx++;
      sum += arr[i];
    } else {
      sum += arr[i] - arr[i - M];
      if (sumLastMax < sum) {
        sumLastMax = sum;
      }
    }
  }
  console.log("max sum is", sumLastMax + sumFirstMax, "sumLastMax", lastIndex);
};
console.log(
  "max sum is",
  maxSumTwoNonOverlapingArray([3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2)
);
// minimum ciculer rotations of lock to avoid blocked state
let blockedState = ["1543", "7434", "7300", "7321", "2427"];
const mimmRotationAvoidBlocked = (target, state) => {};
mimmRotationAvoidBlocked("7531", blockedState);

const maxProductExceptSelf = arr => {
  if (arr === null || arr.length === 0) return 0;
  let prod = 1;
  let arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    prod *= arr[i];
  }
  for (let i = 0; i < arrLen; i++) {
    //debugger;
    //console.log(prod * Math.pow(arr[i], -1));
  }
};
maxProductExceptSelf([1, 2, 3, 4, 5]);

const minimumOverlapIntewalRemove = arr => {
  // make two arr from interval
  let arrival = [];
  let departure = [];
  let row = arr.length;
  let col = arr[0].length;
  let res = [];
  for (let i = 0; i < row; i++) {
    for (let k = 0; k < col; k++) {
      arrival.push(arr[i][0]);
      departure.push(arr[1][k]);
    }
  }
  console.log("arrival", arrival, "departure", departure);
};
// minimumOverlapIntewalRemove([
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [1, 3]
// ]);

let rottenGrid = [
  [2, 1, 0, 2, 1],
  [1, 0, 1, 2, 1],
  [1, 0, 0, 2, 1],
  [1, 0, 0, 2, 1]
];
const isRottenSafe = (mat, i, j, row, col) => {
  if (i >= 0 && i < row && j >= 0 && j < col && mat[i][j] === 1) {
    return true;
  } else {
    return false;
  }
};
const rottenOrangeBFS = mat => {
  if (mat === null || mat.length === 0 || mat[0].length === 0) return 0;

  let row = mat.length;
  let col = mat[0].length;
  let queue = [];
  // insert all rotten index into queue
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  // run a while loop until queue is empty
  let rottenCount = 0;
  while (queue.length > 0) {
    let isAppear = false;
    let size = queue.length;
    while (size > 0) {
      let pop = queue.shift();
      let i = pop[0];
      let j = pop[1];
      //makeAdjacentRotten(mat, pop, rottenCount);
      if (isRottenSafe(mat, i, j + 1, row, col)) {
        mat[i][j + 1] = 2;
        queue.push([i, j + 1]);
        if (!isAppear) {
          rottenCount++;
          isAppear = true;
        }
      }
      if (isRottenSafe(mat, i - 1, j, row, col)) {
        mat[i - 1][j] = 2;
        queue.push([i - 1, j]);
        if (!isAppear) {
          rottenCount++;
          isAppear = true;
        }
      }
      if (isRottenSafe(mat, i + 1, j, row, col)) {
        mat[i + 1][j] = 2;
        queue.push([i + 1, j]);
        if (!isAppear) {
          rottenCount++;
          isAppear = true;
        }
      }
      if (isRottenSafe(mat, i, j - 1, row, col)) {
        mat[i][j - 1] = 2;
        queue.push([i, j - 1]);
        if (!isAppear) {
          rottenCount++;
          isAppear = true;
        }
      }
      size--;
    }
  }

  console.log(mat);
  return rottenCount;
};
//console.log(rottenOrangeBFS(rottenGrid));

let tree3 = new MakeBst();

tree3.root = new NodeBST(1);
tree3.root.left = new NodeBST(2);

tree3.root.right = new NodeBST(3);
tree3.root.left.left = new NodeBST(2);
tree3.root.left.right = new NodeBST(4);
tree3.root.right.left = new NodeBST(5);
tree3.root.right.left.left = new NodeBST(6);
const printNodeWhichDontHaveSiblings = node => {
  // *** first approache start ***//
  if (node === null) {
    return null;
  }
  if (node.left === null && node.right === null) {
    return node;
  }

  let left = printNodeWhichDontHaveSiblings(node.left);

  let right = printNodeWhichDontHaveSiblings(node.right);

  if (left === null && right !== null) {
    console.log(node.right.data);
  }
  if (left !== null && right === null) {
    console.log(node.left.data);
  }
  return left ? left : right;
  // *** first approache end ***//
  // *** second approache start ***//

  //   if (node === null) {
  //     return;
  //   }

  //   if (node.left === null && node.right !== null) {
  //     console.log(node.right.data);
  //   }
  //   if (node.left !== null && node.right === null) {
  //     console.log(node.left.data);
  //   }
  //   printNodeWhichDontHaveSiblings(node.left);
  //   printNodeWhichDontHaveSiblings(node.right);
  // *** second approache end ***//
};
//printNodeWhichDontHaveSiblings(tree3.root);

let tree4 = new MakeBst();

tree4.root = new NodeBST(0);
// tree4.root.left = new NodeBST(6);
// tree4.root.left.left = new NodeBST(2);
// tree4.root.left.right = new NodeBST(8);
// tree4.root.right = new NodeBST(20);
// tree4.root.right.left = new NodeBST(15);
// tree4.root.right.right = new NodeBST(25);
// tree4.root.right.right.left = new NodeBST(23);
let prev = -10;
const validateBSTtree = node => {
  //debugger;
  if (node !== null) {
    if (!validateBSTtree(node.left)) {
      return false;
    }
    if (node.data < prev) {
      console.log("not a bst");
      return false;
    }
    prev = node.data;
    return validateBSTtree(node.right);
  }
  return true;
};
console.log("bst is ", validateBSTtree(tree4.root));
const validateBSTtree2 = (node, left, right) => {
  if (node === null) return true;
  if (left !== null && left.data >= node.data) {
    return false;
  }
  if (right !== null && right.data <= node.data) {
    return false;
  }
  return (
    validateBSTtree2(node.left, left, node) &&
    validateBSTtree2(node.right, node, right)
  );
};
console.log("bst second method ", validateBSTtree2(tree4.root, null, null));
let maxSumMap = new Map();
function maxvalue(arr, index, len, prev) {
  if (index === len) {
    return 0;
  }
  let key = index + "#" + prev;
  if (!maxSumMap.get(key)) {
    let exclude = maxvalue(arr, index + 1, len, prev);

    let include = 0;
    if (prev + 1 !== index) {
      include = maxvalue(arr, index + 1, len, index) + arr[index];
    }

    maxSumMap.set(key, Math.max(include, exclude));
  }
  return maxSumMap.get(key);
}

console.log("max value is", maxvalue([], 0, 0, -10));

function findMinInsorted(arr, start, end) {
  if (start > end) {
    return arr[0];
  }
  if (start === end) {
    return arr[start];
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] > arr[mid + 1]) {
    return arr[mid + 1];
  }
  if (arr[mid] < arr[mid - 1]) {
    return arr[mid];
  }
  if (arr[mid] > arr[start]) {
    return findMinInsorted(arr, mid + 1, end);
  } else {
    return findMinInsorted(arr, start, mid - 1);
  }
}
console.log("min elemnt is", findMinInsorted([4, 5, 6, 7, 8, 1], 0, 5));

const findSumInsortedRotatedArray = (arr, sum, len) => {
  if (arr === null) return false;

  let pivot;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      pivot = i;
      break;
    }
  }
  // here we declaring two pointers
  let left = pivot + 1; // index of smallest elemnt in array
  let right = pivot; // index of largest elemnt in array

  while (left !== right) {
    //debugger;
    if (arr[left] + arr[right] === sum) {
      console.log("sum found at", arr[left], "and", arr[right]);
      return;
    }
    // sum is more then move to lesser elemnt
    if (arr[left] + arr[right] < sum) {
      left = (left + 1) % len;
    } else {
      right = (len + right - 1) % len;
    }
  }
  console.log("no sum found");
};

findSumInsortedRotatedArray([11, 15, 6, 8, 9, 10], 14, 6);

const booleanMatrix = mat => {
  if (mat === null || mat.length === 0 || mat[0].length === 0) return 0;

  let row = mat.length;
  let col = mat[0].length;
  // let isRow = false;
  let isRow = [];
  let isCol = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 0) {
        isRow[i] = 0;
        isCol[j] = 0;
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (isRow[i] === 0 || isCol[j] === 0) {
        mat[i][j] = 0;
      }
    }
  }
  return mat;
};
function inPlaceSolution(mat) {
  if (mat === null || mat.length === 0 || mat[0].length === 0) return 0;
  let row = mat.length;
  let col = mat[0].length;
  let isRow = false;
  let isCol = false;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // debugger;
      if (i === 0 && mat[i][j] === 0) {
        isRow = true;
      }
      if (j === 0 && mat[i][j] === 0) {
        isCol = true;
      }
      if (mat[i][j] === 0) {
        mat[0][j] = 0;
        mat[j][0] = 0;
      }
    }
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (mat[0][j] === 0 || mat[i][0] === 0) {
        mat[i][j] = 0;
      }
    }
  }

  if (isRow) {
    for (let i = 0; i < col; i++) {
      mat[0][i] = 0;
    }
  }
  if (isCol) {
    for (let i = 0; i < row; i++) {
      mat[i][0] = 0;
    }
  }

  return mat;
}
let matrixBol = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];
//console.log("boolean matrix is", booleanMatrix(matrixBol));

console.log("boolean matrix is", inPlaceSolution(matrixBol));

const makeGraphCyclic = () => {
  let graph = new Graph(5);
  graph.addEdge(1, 3);
  graph.addEdge(1, 2);
  graph.addEdge(2, 5);
  graph.addEdge(3, 5);
  graph.addEdge(3, 4);
  graph.addEdge(5, 4);
  graph.addEdge(3, 2);
  //graph.addEdge(2, 1);

  return graph;
};
const foundCycleRecusiveDFS = (graph, node, visited, stack) => {
  if (stack[node]) return true;
  if (visited[node]) return false;
  visited[node] = true;
  stack[node] = true;
  let list = graph[node].root;
  //console.log("cyclic data", node);
  while (list) {
    let data = list.data;
    if (foundCycleRecusiveDFS(graph, data, visited, stack)) {
      return true;
    }
    list = list.next;
  }
  stack[node] = false;
  return false;
};

const foundCycleIterativeDFS = (graph, node, visited) => {
  let stack = [];
  stack.push(node);

  while (stack.length > 0) {
    let pop = stack.pop();

    if (!visited[pop]) {
      console.log("dfsdfsdfsdfsf", pop);
      visited[pop] = true;
    }
    let list = graph[pop].root;
    while (list) {
      let data = list.data;
      if (!visited[data]) {
        stack.push(data);
      }
      list = list.next;
    }
  }
};
const detectCycleIngraph = graphData => {
  console.log("graphData", graphData);

  let nodes = graphData.graph.length;
  let graph = graphData.graph;
  let visited = [];
  let stack = [];
  //   for (let i = 1; i < nodes; i++) {
  //     if (foundCycleRecusiveDFS(graph, i, visited, stack)) {
  //       return true;
  //     }
  //   }
  for (let i = 1; i < nodes; i++) {
    if (foundCycleIterativeDFS(graph, i, visited, stack)) {
      return true;
    }
  }
  return false;
};

console.log("is graph have cycle", detectCycleIngraph(makeGraphCyclic()));

let floodMatrix = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0],
  [1, 0, 0, 1, 1, 0, 1, 1],
  [1, 2, 2, 2, 2, 0, 1, 0],
  [1, 1, 1, 2, 2, 0, 1, 0],
  [1, 1, 1, 2, 2, 2, 2, 0],
  [1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 1, 1, 1, 2, 2, 1]
];
const floodFill4dire = (mat, i, j, row, col, point) => {
  //debugger;
  if (i < 0 || i >= row || j < 0 || j >= col || mat[i][j] !== 2) {
    return;
  }
  if (mat[i][j] === 2) {
    mat[i][j] = 3;
    floodFill4dire(mat, i, j + 1, row, col, point);
    floodFill4dire(mat, i, j - 1, row, col, point);
    floodFill4dire(mat, i + 1, j, row, col, point);
    floodFill4dire(mat, i - 1, j, row, col, point);
  }
};
const floodFillAlgorithm = (mat, i, j, newPoint) => {
  debugger;
  if (mat === null || mat.length === 0 || mat[0].length === 0) return false;

  let row = mat.length;
  let col = mat[0].length;

  if (mat[i][j] === newPoint) {
    return false;
  }
  floodFill4dire(mat, i, j, row, col, newPoint);
  console.log("matrix after flood fill", mat);
};
floodFillAlgorithm(floodMatrix, 3, 4, 3);

function mergedTwoTreeIntoThirdOne(t1, t2) {
  if (t1 === null && t2 === null) {
    return null;
  }

  if (t1 === null) {
    return t2;
  }
  if (t2 === null) {
    return t1;
  }

  let val = t1.val + t2.val;
  let newNode = new TreeNode(val);

  newNode.left = merged(t1.left, t2.left);

  newNode.right = merged(t1.right, t2.right);

  return newNode;
}
