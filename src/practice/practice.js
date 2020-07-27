// import { Divider } from "material-ui";
// function Linkedlist(data) {
//   this.root = new Node1(data);
// }
const longestIncreasingSubRecursive = (arr, n, prev) => {
  //console.log("inside practice test");

  if (n === arr.length) {
    return 0;
  }
  //  first try to inculde the number
  let include = 0;
  if (prev < arr[n]) {
    prev = arr[n];
    include = 1 + longestIncreasingSubRecursive(arr, n + 1, prev);
  }
  let exclude = longestIncreasingSubRecursive(arr, n + 1, prev);

  return Math.max(include, exclude);
};
// console.log(
//   "longest incresing subsequence",
//   longestIncreasingSubRecursive([50, 3, 10, 7, 40, 80], 0, -1)
// );

// const longestIncreasingSubSequenseDP = arr => {
//   if (!arr) {
//     return "pass some val";
//   }
//   if (Object.prototype.toString.call(arr) !== "[object Array]") {
//     return "not array";
//   }
//   let arrLen = arr.length;
//   let tempArr = new Array(arrLen);

//   for (let i = 0; i < arrLen; i++) {
//     tempArr[i] = 1;
//   }
//   let j = 0;
//   for (let i = 1; i < arrLen; i++) {
//     while (j < i) {
//       if (arr[i] > arr[j]) {
//         tempArr[i] = Math.max(tempArr[i], tempArr[j] + 1);
//       }
//       j++;
//     }
//     j = 0;
//   }
//   console.log("final solution is", tempArr[tempArr.length - 1]);
// };
// console.log(
//   "longestIncreasingSubSequenseDP",
//   longestIncreasingSubSequenseDP([50, 3, 10, 7, 40, 80])
// );

// /// find free time in interval
// const freeTime = [
//   { start: 0, end: 1 },
//   { start: 1, end: 2 },
//   { start: 3, end: 4 },
//   { start: 5, end: 7 },
//   { start: 5, end: 8 },
//   { start: 5, end: 9 }
// ];
// const mergeTimeInterval = arr => {
//   // sort the inteval with satring time

//   arr.sort((a, b) => {
//     if (a.start > b.start) {
//       return 1;
//     }
//     if (a.start < b.start) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });

//   console.log("sorted values", arr);

//   let list = [];
//   let freeTime = [];
//   list.push(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     let stack = list[list.length - 1];
//     if (arr[i].start <= stack.end && arr[i].end <= stack.end) {
//       continue;
//     } else if (arr[i].start <= stack.end && arr[i].end >= stack.end) {
//       stack.end = arr[i].end;
//     } else {
//       console.log("freee");
//       freeTime.push({ start: arr[i].end, end: arr[i + 1].start });
//       list.push({ start: arr[i].start, end: arr[i].end });
//     }
//   }
//   console.log("merged intevals is", list, "freeTime", freeTime);
// };

// //mergeTimeInterval(freeTime);
// const findFreeTimeInterval = arr => {
//   arr.sort((a, b) => {
//     if (a.start > b.start) {
//       return 1;
//     }
//     if (a.start < b.start) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
//   let freeTime = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i].end < arr[i + 1].start && arr[i].end < arr[i + 1].end) {
//       freeTime.push({ start: arr[i].end, end: arr[i + 1].start });
//     }
//   }

//   console.log("free time", freeTime);
// };
// findFreeTimeInterval(freeTime);

// // merge two unsorted array

// const mergeUnsortedArray = (arr1, arr2) => {
//   arr1.sort((a, b) => {
//     return a - b;
//   });
//   arr2.sort((a, b) => {
//     return a - b;
//   });
//   let arr1Len = arr1.length;
//   let arr2Len = arr2.length;

//   // here onward merge two sorted array
//   let i = 0;
//   let j = 0;
//   let mergedArr = [];
//   while (i < arr1Len && j < arr2Len) {
//     if (arr1[i] <= arr2[j]) {
//       mergedArr.push(arr1[i]);
//       i++;
//     } else {
//       mergedArr.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1Len) {
//     mergedArr.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2Len) {
//     mergedArr.push(arr2[j]);
//     j++;
//   }

//   console.log("merged array final", mergedArr);
// };
// //mergeUnsortedArray([3, 5, 2, 4, 6, 8, 4, 56], [4, 7, 4, 6, 9, 6, 77, 34]);

// // find three number in array sum equal to given number

// const findSumInarrTok = (arr, sum) => {
//   arr.sort((a, b) => a - b);
//   console.log("increasng data", arr);

//   for (let i = 0; i < arr.length - 2; i++) {
//     let left = i + 1;
//     let right = arr.length - 1;
//     while (left < right) {
//       if (arr[i] + arr[left] + arr[right] === sum) {
//         console.log("found sum", arr[i], "and", arr[left], "and", arr[right]);
//         right--;
//         left++;
//         //return;
//       } else if (arr[i] + arr[left] + arr[right] > sum) {
//         right--;
//       } else {
//         left++;
//       }
//     }
//   }
//   console.log("no sum found");
//   // return;
// };
// //findSumInarrTok([3, 5, 2, 4, 6, 8, 4, 10, 11, 50, 20, 15, 14], 68);

// // three loop

// const findAllsumTrplte = arr => {
//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (arr[i] + arr[j] + arr[k] === 68) {
//           console.log("found soluctions", arr[i], "and", arr[j], "and", arr[k]);
//         }
//       }
//     }
//   }
// };
// //findAllsumTrplte([3, 5, 2, 4, 6, 8, 4, 10, 11, 50, 20, 15, 14], 68);

// //find common elem

// const firstOccurenceSortedElement = (arr, low, high, key) => {
//   if (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (mid === 10 || (arr[mid] === key && arr[mid - 1] < arr[mid])) {
//       console.log("find elem33", mid);
//       return mid;
//     } else if (arr[mid] < key) {
//       return firstOccurenceSortedElement(arr, mid + 1, high, key);
//     } else {
//       return firstOccurenceSortedElement(arr, low, mid - 1, key);
//     }
//   }
//   return -1;
// };
// console.log(
//   "elemnt binary index is",
//   firstOccurenceSortedElement([1, 2, 3, 3, 3, 3, 3, 4, 4, 4], 0, 10, 3)
// );
// let midiid = 0;
const findcosestElement = (arr, low, high, key) => {
  if (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key || (arr[mid - 1] < key && arr[mid + 1] > key)) {
      if (key - arr[mid - 1] > arr[mid + 1] - key) {
        return mid + 1;
      } else if (key - arr[mid - 1] < arr[mid + 1] - key) {
        return mid - 1;
      }
      console.log("find elem33", mid);

      return mid;
    } else if (arr[mid] < key) {
      return findcosestElement(arr, mid + 1, high, key);
    } else {
      return findcosestElement(arr, low, mid - 1, key);
    }
  }
  return -1;
};
// console.log(
//   " 56564564564",
//   findcosestElement([1, 4, 7, 10, 13, 15, 18, 19, 23, 27, 29], 0, 10, 26),
//   "midiid",
//   midiid
// );

// // find only missing number with xor

const findMissingNumberXor = arr => {
  let xor1 = arr[0];
  let xor2 = 1;
  for (let i = 1; i < arr.length; i++) {
    xor1 = xor1 ^ arr[i];
  }
  for (let i = 2; i < 11; i++) {
    xor2 = xor2 ^ i;
  }
  let final = xor1 ^ xor2;
  console.log("final mssing element is", final);
};
//findMissingNumberXor([1, 2, 7, 4, 9, 6, 3, 5, 10]);

// const makeDigitPlace = (number, d) => {
//   let num = number.toString();
//   let numLen = num.length;
//   let final = "";
//   if (d === 0) {
//     final = num + 0;
//   }
//   if (num[0] >= d) {
//     //return (final = d + num);
//   }
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] <= d) {
//       return (final = num.substring(0, i) + d + num.substring(i));
//     }
//   }
//   return (final = num + d);
//   console.log("final substring is", final);
// };
// console.log("final string", makeDigitPlace(878, 8));

// // minimum coin change problem

// const minCoinChange = (arr, m, sum) => {
//   if (sum === 0) {
//     return 1;
//   }
//   if (sum < 0) {
//     return 0;
//   }
//   if (m < 0) {
//     return 0;
//   }
//   let include = minCoinChange(arr, m, sum - arr[m]);

//   // first we are exculding the current coin
//   let exculde = minCoinChange(arr, m - 1, sum);

//   // now include the coin

//   return exculde + include;
// };
// console.log("mincoin change problem", minCoinChange([1, 2, 3], 2, 4));
// const climbingStairsWays = ln => {
//   // either take 1 setp or 2 or 3

//   if (ln === 1 || ln === 2 || ln === 3) {
//     return 1;
//   }
//   if (ln <= 0) {
//     return 0;
//   }
//   return (
//     climbingStairsWays(ln - 1) +
//     climbingStairsWays(ln - 2) +
//     climbingStairsWays(ln - 3)
//   );
// };
// console.log("climbingStairsWays(7)", climbingStairsWays(7));
// const minstepStairCase = (arr, sum) => {
//   if (sum === 0) {
//     return 1;
//   }
//   if (sum < 0) {
//     return 0;
//   }
//   let totalWay = 0;
//   for (let i = 0; i < arr.length; i++) {
//     totalWay += minstepStairCase(arr, sum - arr[i]);
//   }
//   return totalWay;

//   // have two choice
// };
// console.log("minstepStairCase", minstepStairCase([1, 2, 3, 4], 4));
// function NodeBST(data) {
//   this.data = data;
//   this.left = null;
//   this.right = null;
// }
// function MakeBst() {}
// let tree = new MakeBst();
// tree.root = new NodeBST(1);
// tree.root.left = new NodeBST(2);
// tree.root.right = new NodeBST(3);

// tree.root.left.left = new NodeBST(4);
// tree.root.left.right = new NodeBST(5);

// tree.root.right.left = new NodeBST(6);
// tree.root.right.right = new NodeBST(7);
// console.log("tree is", tree);
// let custome = [1, 2, 5];
// const arrayPathInBtree = (node, index, arr) => {
//   if (node === null) {
//     console.log("path arr", arr);
//     return;
//   }
//   let arrLen = arr.length;
//   if (
//     node.left === null &&
//     node.right === null &&
//     node.data === arr[arrLen - 1]
//   ) {
//     return true;
//   }
//   //   if (node.data) {
//   //     arr.push(node.data);
//   //   }

//   if (node.data === arr[index]) {
//     return (
//       arrayPathInBtree(node.left, index + 1, arr) ||
//       arrayPathInBtree(node.right, index + 1, arr)
//     );
//   }

//   //return false;
//   //let right =
//   //arr.pop();
// };
// console.log(
//   "arrayPathInBtree(tree.root, 0, []);",
//   arrayPathInBtree(tree.root, 0, [])
// );

// const preorderIterative = node => {
//   let stack = [];
//   if (node === null) {
//     return;
//   }

//   let current = node;
//   stack.push(node);
//   while (stack.length) {
//     while (current) {
//       console.log("curren item", current.data);
//       stack.push(current);

//       current = current.left;
//     }
//     current = stack.pop().right;
//     console.log("current", current);
//   }
// };
// preorderIterative(tree.root);

// const printStepToStair = (arr, start, end) => {
//   if (start < end) {
//     return;
//   }
//   for (let i = start; i <= start + 1; i++) {
//     console.log("dddddd", arr[i]);
//     printStepToStair(start + 1, end);
//   }
//   console.log("next subset");
// };
// printStepToStair([1, 2, 3, 4], 0, 3);

// const diceWithIterative = (arr, sum, time) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       for (let k = 0; k < arr.length; k++) {
//         if (arr[i] + arr[j] + arr[k] === sum) {
//           console.log("hii fund", ++count);
//         }
//       }
//     }
//   }
// };
// diceWithIterative([1, 2, 3, 4, 5, 6], 8, 3);

// const diceThrowwithDPTable = (face, dice, sum) => {
//   // create a dp table dice+1 * sum+1
//   let dp = [];
//   for (let i = 0; i < dice; i++) {
//     dp[i] = [];
//     for (let j = 0; j < sum + 1; j++) {
//       dp[i][j] = 0;
//     }
//   }
//   for (let k = 1; k <= sum && k <= face; k++) {
//     dp[0][k] = 1;
//   }

//   for (let i = 1; i < dice; i++) {
//     for (let j = 1; j < sum + 1; j++) {
//       for (let k = 1; k <= j && k <= face; k++) {
//         dp[i][j] += dp[i - 1][j - k];
//       }
//     }
//   }
//   console.log("filled dp table", dp);
// };
// diceThrowwithDPTable(6, 3, 8);

// const runLengthEncoding = str => {
//   if (!str) {
//     console.log("need string");
//     return;
//   }
//   let first = str[0];
//   let count = 1;
//   let encodedStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       encodedStr = encodedStr + str[i] + count;
//       count = 1;
//     }
//   }
//   return encodedStr;
// };
// //w

// console.log("run length encoding", runLengthEncoding("geeksforgeeks"));

// const MisingNumberWithXOR = (arr, m) => {
//   let xor = arr[0];
//   let second = 1;
//   for (let i = 1; i < arr.length; i++) {
//     xor = xor ^ arr[i];
//   }
//   for (let i = 2; i <= m; i++) {
//     second = second ^ i;
//   }

//   return xor ^ second;
// };
// console.log("MisingNumberWithXOR", MisingNumberWithXOR([1, 2, 3, 5]));
// // function LinkedList() {
// //   this.head = null;
// // }
// // function Node(data) {
// //   this.data = data;
// //   this.next = null;
// // }
// const deleteNodeWithOnlyPointer = node => {
//   let current = node;
//   //   let pre
//   //   while (current.next) {
//   //     pre = current;
//   //     current.data = current.next.data;
//   //     current = current.next;
//   //   }
//   //   pre.next = null;
//   //node.next = node.next.next;
//   //   mat[i][j] = mat[j][row - i - 1];
//   //   mat[j][row - i - 1] = mat[row - i - 1][row - j - 1];
//   //   mat[row - i - 1][row - j - 1] = mat[row - j - 1][i];
//   //   mat[row - j - 1][i] = temp;
//   //other way
//   if (current.next) {
//     current.data = current.next.data;
//     current.next = current.next.next;
//   } else {
//     //or change last value to ummy value so it cant be used more
//   }
// };
// // let list = new LinkedList();
// // list.head = new Node(1);
// // list.head.next = new Node(2);
// // list.head.next.next = new Node(3);
// // list.head.next.next.next = new Node(4);
// // list.head.next.next.next.next = new Node(5);
// // console.log("list2", list);
// // //deleteNodeWithOnlyPointer(list.head.next.next.next.next);
// // console.log("list2 after deletions", list);

// // inplace rotate a matrix
// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ];
// const inplaceRotateMatrix = mat => {
//   let row = mat.length;
//   let col = mat[0].length;

//   for (let i = 0; i < row / 2; i++) {
//     for (let j = i; j < row - i - 1; j++) {
//       console.log(mat[i][j]);
//       let temp = mat[i][j];
//       //start to replace from top-right

//       // move right side to top
//       mat[i][j] = mat[j][row - i - 1];

//       // move bottom to right side
//       mat[j][row - i - 1] = mat[row - i - 1][row - j - 1];

//       // move left side to bottom

//       mat[row - i - 1][row - j - 1] = mat[row - j - 1][i];
//       mat[row - j - 1][i] = temp;
//     }
//   }
//   console.log("matrix is", mat);
// };
// //console.log("inplace rotate matrix", inplaceRotateMatrix(matrix));

// const rotateMatrixWithTranspose = mat => {
//   console.table(mat);
//   // find transpose of matix e.g replace coloum with row or vice-versa

//   let row = mat.length;
//   let col = mat[0].length;

//   // here we getting transpose of matrix
//   for (let i = 0; i < row; i++) {
//     for (let j = i; j < row; j++) {
//       let temp = mat[i][j];
//       mat[i][j] = mat[j][i];
//       mat[j][i] = temp;
//     }
//   }
//   console.table(mat);

//   // now we reverse the every colum from top to bottom to get the desired rotation e.g. 90 degree

//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < row / 2; j++) {
//       let temp = mat[j][i];
//       mat[j][i] = mat[row - j - 1][i];
//       mat[row - j - 1][i] = temp;
//     }
//   }
//   console.table(mat);
// };

// rotateMatrixWithTranspose(matrix);
// //console.table("transpose matrix is", matrix);

// // [1] [2] [1,2] [3] [1,2] [2,3] [1,3]
// const printSubset = (arr, start, end) => {
//   for (let i = 0; i < arr.length; i++) {}
// };
// printSubset([1, 2, 3], 0, 1);

// // find max difference in array
// const findMaxDiffInarray1 = arr => {
//   let min_val = arr[0];
//   let max_val = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min_val) {
//       min_val = arr[i];
//     }
//     if (arr[i] > max_val) {
//       max_val = arr[i];
//     }
//   }
//   console.log("max difference is", max_val - min_val);
// };
// findMaxDiffInarray1([29, 55, 40, 19, 10, 23, 10, 29]);

// // profit max sum in single transection
// // traverse array from back

// const findMaxDiffInarray = arr => {
//   let maxDiff = 0;
//   let arrLen = arr.length;
//   let max_val = arr[arrLen - 1];
//   for (let i = arrLen - 1; i >= 0; i--) {
//     if (arr[i] > max_val) {
//       max_val = arr[i];
//     } else {
//       //update the max difference
//       maxDiff = Math.max(maxDiff, max_val - arr[i]);
//     }
//   }
//   console.log("maxmum diff is", maxDiff);
// };
// findMaxDiffInarray([2, 7, 9, 1, 0, 3, 5]);

// // profit max in k transection DP problem

// const maxProfitInKtransection = (arr, k) => {
//   let dp = [];

//   for (let i = 0; i <= k; i++) {
//     dp[i] = [];
//     for (let j = 0; j < arr.length; j++) {
//       dp[i][j] = 0;
//     }
//   }
//   for (let i = 1; i <= k; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       let transection = 0;
//       for (let k = 0; k < j; k++) {
//         let currentDayPrice = arr[j] - arr[k] + dp[i - 1][k];
//         if (currentDayPrice > transection) {
//           transection = currentDayPrice;
//         }
//       }

//       dp[i][j] = Math.max(dp[i][j - 1], transection);
//     }
//   }

//   console.table("dp table maxProfitInKtransection", dp);
// };

// maxProfitInKtransection([2, 5, 7, 1, 4, 3, 1, 3], 3);

const miniumuEditDistanceProblem = (str1, str2, n, m) => {
  if (n === 0) {
    return m;
  }
  if (m === 0) {
    return n;
  }

  if (str1[n - 1] === str2[m - 1]) {
    return miniumuEditDistanceProblem(str1, str2, n - 1, m - 1);
  } else {
    let insert = miniumuEditDistanceProblem(str1, str2, n, m - 1);
    let deletes = miniumuEditDistanceProblem(str1, str2, n - 1, m);
    let replaces = miniumuEditDistanceProblem(str1, str2, n - 1, m - 1);
    return 1 + Math.min(insert, deletes, replaces);
  }
};

// console.log(
//   "minimum edit distance is ",
//   miniumuEditDistanceProblem("sunday", "saturday", 6, 8)
// );

// const miniumuEditDistanceProblemDP = (str1, str2, n, m) => {
//   let dp = [];
//   for (let i = 0; i < n; i++) {
//     dp[i] = [];
//     for (let j = 0; j < m; j++) {
//       dp[i][j] = 0;
//       //dp[i][0] = j;
//       //dp[0][j] = i;
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     dp[i][0] = i;
//   }
//   for (let i = 0; i < m; i++) {
//     dp[0][i] = i;
//   }

//   for (let i = 1; i < n; i++) {
//     for (let j = 1; j < m; j++) {
//       if (str1[i] === str2[j]) {
//         // here diagonally taking.....char is same so left both chars
//         dp[i][j] = dp[i - 1][j - 1];
//       } else {
//         // min of all three operation plus one.... e.g three direction in matrix
//         dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
//       }
//     }
//   }
//   console.log("miniumuEditDistanceProblemDP", dp);
// };
// miniumuEditDistanceProblemDP("sunday", "saturday", 6, 8);

// const findLocalMinAndMax = arr => {
//   let arrLen = arr.length;
//   let min = 1000;
//   let max = -1;
//   let i = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//       //console.log("local mini", min);
//     }
//   }

//   // find every peak and low point in array
//   while (i < arr.length) {
//     while (arr[i] > arr[i + 1]) {
//       i++;
//     }
//     console.log("local mminima", arr[i]);
//     while (arr[i] < arr[i + 1]) {
//       i++;
//     }
//     console.log("local maxima", arr[i]);
//     i++;
//   }
// };

// findLocalMinAndMax([1, 2, 3, 8, 6, 4, 7, 9, 10, 3, 2, 1, 0, 20, 30, 40]);

// //Minimum cost to reach the top of the floor by climbing stairs
// // we can take step either 1 or 2ko
// // f[0]=0;   f[1]=1   f[2]=2
// // 0 1 2 3 4 5 6
// // fibonnacci series  0 1 3
// //f3 =f2 +f1
// //f4 =f3 +f2 +f1
// //f5 =f4 +f3 +f2 +f1
// //f6  = 5 4
// let counter = 0;
// let fibMap = new Map();
// const fibonnacciSum = n => {
//   // with save in dp
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   console.log("fibonnaci counter", counter++);
//   if (fibMap.get(n)) {
//     return fibMap.get(n);
//   }

//   let sum = fibonnacciSum(n - 1) + fibonnacciSum(n - 2);
//   fibMap.set(n, sum);

//   return sum;
// };
// //console.log("fibonnacciSum(6)", fibonnacciSum(20));

// const fibonacciIterative = n => {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   let dp = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }

//   return dp[n];
// };
// //console.log("iterative dp,", fibonacciIterative(7));
// const miniCostOfStairCase = arr => {
//   // can move only one or two steps
//   let dp = [arr[0], arr[1]];
//   for (let i = 2; i < arr.length; i++) {
//     dp[i] = Math.min(dp[i - 1], dp[i - 2]) + arr[i];
//   }
//   return dp;
// };
// console.log(
//   "mini cost to reach stair top",
//   miniCostOfStairCase([2, 5, 3, 1, 7, 3, 4])
// );

var maxSubArray = function(nums) {
  if (nums === null || nums.length === 1) {
    return nums;
  }
  let len = nums.length;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let curSum = 0;

  for (let i = 0; i < len; i++) {
    if (curSum < 0) {
      curSum = 0;
    }

    curSum = curSum + nums[i];
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
};

// console.log(
//   "continue larset subaray sum",
//   kadan([2, 0, 4, -1, -2, 1, 5, -3])
// );

// // longest alternatig sub array of postive and negative element based on kadaen algorithm

// const longestAlternatingSubarray = arr => {
//   let max_len = 1;
//   let ending = 0;
//   let len = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] * arr[i + 1] < 0) {
//       len++;
//       if (max_len < len) {
//         max_len = len;
//         ending = i + 1;
//       }
//     } else {
//       len = 1;
//     }
//   }
//   console.log("longest Alternating subarray is", max_len, ending);
// };
// //longestAlternatingSubarray([1, -2, 6, 4, 5, -3, 2, -4, 2, -3, 2, 2]);

// // print sum of all sub set
// const sumOfAllSubSetArr = (str, index, curr) => {
//   //   if (pos > 2 || len > 2) {
//   //     return;
//   //   }
//   let arrLen = str.length;
//   if (index === arrLen) {
//     console.log("subset", "index", index, curr);
//     return;
//   }
//   //subset[len] = arr[pos];
//   sumOfAllSubSetArr(str, index + 1, curr + str.charAt(index));
//   sumOfAllSubSetArr(str, index + 1, curr);
// };
// //sumOfAllSubSetArr("ab", 0, "");

// const recu = n => {
//   if (n === 0) {
//     return;
//   }
//   for (let i = 0; i < 2; i++) {
//     console.log("recursive i", n, " ", i);
//     recu(n - 1);
//     console.log("in back", n, "", i);
//   }
// };
// //recu(2);

// // const findPeakelemntWithBinarySearch = arr => {
// //   let arrlen = arr.length;
// //   let i = 0;
// //   let j = arrlen - 1;
// //   let mid;
// //   while (i < j) {
// //     //debugger;
// //     mid = Math.floor(i + j / 2);
// //     if (
// //       (mid === 0 || arr[mid] > arr[mid + 1]) &&
// //       (mid === arrlen - 1 || arr[mid] > arr[mid - 1])
// //     ) {
// //       return arr[mid];
// //     } else if (arr[mid + 1] > arr[mid]) {
// //       return (i = mid + 1);
// //     } else if (arr[mid - 1] > arr[mid]) {
// //       return (j = mid - 1);
// //     }
// //   }
// //   console.log("mid elemnt", mid);
// // };
// // console.log(
// //   "find peak element ",
// //   findPeakelemntWithBinarySearch([1, 2, 3, 20, 6, 5, 4, 1, 0])
// // );

// const morrisTravelsalInorder = node => {
//   console.log("morrisTravelsalInorder", node);
//   let current = node;
//   while (current) {
//     if (!current.left) {
//       console.log("print node inorder", current.data);
//       current = current.right;
//     } else {
//       // find inorder predesser
//       let predesser = current.left;
//       //debugger;
//       while (
//         predesser.right !== null &&
//         predesser.right &&
//         predesser.right.data !== current.data
//       ) {
//         predesser = predesser.right;
//       }
//       if (predesser.right === null) {
//         predesser.right = current;
//         current = current.left;
//       } else {
//         predesser.right = null;
//         console.log("print node inorder", current.data);
//         current = current.right;
//       }
//     }
//   }
// };
// morrisTravelsalInorder(tree.root);

// function Node1(data) {
//   this.data = data;
//   this.next = null;
// }

// let list1 = new Linkedlist(5);
// list1.root.next = new Node1(6);
// list1.root.next.next = new Node1(7);

// let list2 = new Linkedlist(4);
// list2.root.next = new Node1(5);
// list2.root.next.next = new Node1(8);

// //5 =>6=>3
// //8=>4=>2

// // result add 1=>4=>0=>5
// let head;
// const reversetraversList = list => {
//   let node = list;
//   if (node.next === null) {
//     head = node;
//     return;
//   }
//   reversetraversList(node.next);
//   node.next.next = node;
//   node.next = null;
//   return head;
// };
// //console.log("revser list", reversetraversList(list1.root));
// //console.log("reverse list ", head);
// const addTwoLiskedtListNumber = (list1, list2) => {
//   console.log("list", list1, list2);
//   let l1 = list1;
//   let l2 = list2;

//   let rl1 = reversetraversList(l1);
//   let rl2 = reversetraversList(l2);
//   let finalList = new Linkedlist();
//   let dummy = finalList.root;
//   console.log("both reverse list", rl1, "and", rl2);
//   let carry = 0;
//   while (rl1) {
//     let data = rl1.data + rl2.data;
//     if (carry) {
//       data = parseInt(data) + parseInt(carry);
//     }

//     if (data > 9) {
//       carry = parseInt(data.toString().charAt(0));
//       data = parseInt(data.toString().charAt(1));
//     }
//     dummy.next = new Node1(data);
//     dummy = dummy.next;
//     rl1 = rl1.next;
//     rl2 = rl2.next;
//   }
//   if (carry) {
//     dummy.next = new Node(parseInt(carry));
//   }
//   // reversetraversList(finalList.root);
//   console.log("resultant final added list", finalList);
// };
// //addTwoLiskedtListNumber(list1.root, list2.root);

// let list3 = new Linkedlist(6);
// list3.root.next = new Node1(-6);
// list3.root.next.next = new Node1(8);
// list3.root.next.next.next = new Node1(4);
// list3.root.next.next.next.next = new Node1(-12);
// list3.root.next.next.next.next.next = new Node1(9);
// list3.root.next.next.next.next.next.next = new Node1(8);
// list3.root.next.next.next.next.next.next.next = new Node1(-8);

// const removeSumZeroElemntFromList = list => {
//   console.log("list remove", list);
//   if (list === null) {
//     return;
//   }

//   let node = list;
//   let current_sum = 0;
//   let start = node;
//   while (node) {
//     // here we are adding the element
//   }
// };
// //removeSumZeroElemntFromList(list3.root);

// let list4 = new Linkedlist(1);
// list4.root.next = new Node1(4);
// list4.root.next.next = new Node1(43);
// list4.root.next.next.next = new Node1(24);
// list4.root.next.next.next.next = new Node1(55);
// list4.root.next.next.next.next.next = new Node1(26);
// list4.root.next.next.next.next.next.next = new Node1(17);
// list4.root.next.next.next.next.next.next.next = new Node1(38);
// list4.root.next.next.next.next.next.next.next.next = new Node1(69);
// list4.root.next.next.next.next.next.next.next.next.next = new Node1(10);

// const rotateLinkedlistByK = (list, k) => {
//   let head = list;
//   //debugger;
//   if (list === null) {
//     return;
//   }
//   let node = list.root;
//   let rotated;
//   let count = 1;
//   while (count < k) {
//     count++;
//     node = node.next;
//   }
//   rotated = node.next;
//   node.next = null;
//   let rotatedDummy = rotated;
//   while (rotatedDummy.next) {
//     rotatedDummy = rotatedDummy.next;
//   }
//   rotatedDummy.next = list;

//   return (list = rotated);
// };
// //console.log("roatedt linked list,", rotateLinkedlistByK(list4, 4));

// const mergeTwosortedList = (ls1, ls2) => {
//   let list1 = ls1;
//   let list2 = ls2;
//   let result = new Linkedlist();
//   let dummy = result.root;

//   if (list1 === null) {
//     return list2;
//   }
//   if (list2 === null) {
//     return list1;
//   }
//   // till here we assuimng list are same length
//   while (list1 && list2) {
//     if (list1.data < list2.data) {
//       dummy.next = new Node1(list1.data);
//       list1 = list1.next;
//     } else {
//       dummy.next = new Node1(list2.data);
//       list2 = list2.next;
//     }
//     dummy = dummy.next;
//   }
//   while (list1) {
//     dummy.next = new Node1(list1.data);
//     dummy = dummy.next;
//     list1 = list1.next;
//   }

//   while (list2) {
//     dummy.next = new Node1(list2.data);
//     dummy = dummy.next;
//     list2 = list2.next;
//   }
//   return result.root.next;
//   console.log("merged list", result);
// };
// //console.log("merged list", mergeTwosortedList(list1.root, list2.root));

// const getLengthOfLS = list => {
//   if (list === null) {
//     return 0;
//   }
//   let count = 0;
//   while (list) {
//     list = list.next;
//     count++;
//   }
//   return count;
// };

// const getMiddleOfLS = list => {
//   let fast = list;
//   let second = list.next;

//   while (second && second.next) {
//     fast = fast.next;
//     second = second.next.next;
//   }
//   return fast;
// };
// console.log("middle os ls", getMiddleOfLS(list4.root));
// const mergeSortLinkedlist = list => {
//   if (list.next === null || list === null) {
//     return list;
//   }

//   let lengthLs = getLengthOfLS(list);
//   let middle = getMiddleOfLS(list);
//   let leftHalf = list;
//   let rightHalf = middle.next;
//   middle.next = null;
//   let left = mergeSortLinkedlist(leftHalf);
//   let right = mergeSortLinkedlist(rightHalf);

//   return mergeTwosortedList(left, right);
//   console.log("length", lengthLs);
// };
// console.log("sorted linked list", mergeSortLinkedlist(list4.root));
// console.log(list4);
