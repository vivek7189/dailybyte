import { isPlaceholder } from "@babel/types";
import { AvFastForward } from "material-ui/svg-icons";
import map from "material-ui/svg-icons/maps/map";

function NodeBST(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}
function MakeBst() {}
let tree = new MakeBst();
tree.root = new NodeBST(1);
tree.root.left = new NodeBST(2);
tree.root.right = new NodeBST(3);

// tree.root.left.left = new NodeBST(4);
// tree.root.left.right = new NodeBST(5);

// tree.root.right.left = new NodeBST(6);
// tree.root.right.right = new NodeBST(7);
// tree.root.right.right.right = new NodeBST(7);
// tree.root.right.right.right.right = new NodeBST(7);

const findPathInBtreeofArray = (node, arr, index) => {
  if (node === null || arr.length === 0) {
    return false;
  }
  if (
    node.left === null &&
    node.right === null &&
    node.data === arr[index] &&
    index === arr.length - 1
  ) {
    return true;
  }
  if (node.data === arr[index]) {
    return (
      findPathInBtreeofArray(node.left, arr, index + 1) ||
      findPathInBtreeofArray(node.right, arr, index + 1)
    );
  }
  return false;
};

//console.log("findPathInBtreeofArray", findPathInBtreeofArray(tree.root, [], 0));

// bst tree
let tree2 = new MakeBst();
tree2.root = new NodeBST(10);
tree2.root.left = new NodeBST(5);
tree2.root.right = new NodeBST(8);

tree2.root.right.left = new NodeBST(16);
tree2.root.right.left.left = new NodeBST(15);

tree2.root.left.left = new NodeBST(2);
tree2.root.left.right = new NodeBST(20);
let prev = 0;
let first = 0;
let middle = 0;
let second = 0;
function InorderTravsal(node) {
  let current = node;
  if (node === null) {
    return;
  }
  InorderTravsal(node.left);
  console.log("inrorder sorted travsal", node.data);
  if (node.data < prev) {
    if (!first) {
      first = prev;
      middle = node;
    } else {
      second = node;
    }
  }
  prev = node.data;
  InorderTravsal(node.right);
}

const fixTwoNodesOfBSTwap = node => {
  InorderTravsal(node);

  console.log(
    "swapped node middle",
    middle,
    "first",
    first,
    " second ",
    second.data
  );
};

//fixTwoNodesOfBSTwap(tree2.root);
let evensum = 0;
let oddsum = 0;
const findSumDiffOFFoddEvenlevel = (node, index, diff) => {
  console.log(node);
  if (node === null) {
    return 0;
  }
  if (index % 2 === 0) {
    diff = node.data + diff;
  } else {
    diff = node.data - diff;
  }
  findSumDiffOFFoddEvenlevel(node.left, index + 1, diff);
  findSumDiffOFFoddEvenlevel(node.right, index + 1, diff);

  return diff;
};

// console.log(
//   "odd even sum is evesum",
//   findSumDiffOFFoddEvenlevel(tree2.root, 0, 0),
//   "evem",
//   evensum,
//   " odd sum ",
//   oddsum
// );

const maxisumOfsubsewuseNotAdjacent = (arr, n, prev) => {
  if (n === 0) {
    //return 0;
  }
  if (n < 0) {
    return 0;
  }

  let exclude = maxisumOfsubsewuseNotAdjacent(arr, n - 1, prev);

  let include = 0;
  if (n !== prev - 1) {
    include = maxisumOfsubsewuseNotAdjacent(arr, n - 1, n) + arr[n];
  }

  return Math.max(exclude, include);
};

// console.log(
//   "maxisumOfsubsewuseNotAdjacent",
//   maxisumOfsubsewuseNotAdjacent([1, 2, 9, 4, 5, 0, 4, 11, 6], 8, 10)
// );

function LinkedList() {
  this.head = null;
}
function ListNode(data) {
  this.data = data;
  this.next = null;
}

let list = new LinkedList();
list.head = new ListNode(1);
list.head.next = new ListNode(2);
list.head.next.next = new ListNode(3);
list.head.next.next.next = new ListNode(2);
list.head.next.next.next.next = new ListNode(1);

console.log("list is ", list);
let end;
let start = list.head;
const checkListPalindrom = node => {
  console.log(node);
  if (node.next === null) {
    end = node;
    return true;
  }
  let isPalindrom;

  isPalindrom = checkListPalindrom(node.next);
  if (!isPalindrom) {
    return false;
  }
  if (end.data === start.data) {
    isPalindrom = true;
  } else {
    console.log(end.data, "end ", start);
    isPalindrom = false;
  }
  start = start.next;
  end = node;
  return isPalindrom;
};

//console.log("checkListPalindrom", checkListPalindrom(list.head));

const zizagTravesalBST = node => {
  if (!node) {
    return false;
  }
  let traversalArr = [];
  traversalArr.push(node);

  while (traversalArr.length > 0) {
    let arrSize = traversalArr.length;

    while (arrSize > 0) {
      let current = traversalArr.pop();
      if (current.left) {
        traversalArr.unshift(current.left);
      }
      if (current.right) {
        traversalArr.unshift(current.right);
      }

      arrSize--;
      console.log("print data", current.data);
    }
    console.log("next line");
  }
};
//zizagTravesalBST(tree.root);

// max area in histogram

const maxAraeaHistogram = arr => {
  if (arr.length === 0) {
    return;
  }
  let stack = [];
  let arrLen = arr.length;
  let i = 0;
  let maxarea = -10;

  while (i < arrLen) {
    if (stack.length === 0 || arr[i] >= arr[stack[stack.length - 1]]) {
      stack.push(i++);
    } else {
      let pop = stack.pop();
      if (stack.length === 0) {
        maxarea = Math.max(arr[pop] * i, maxarea);
      } else {
        let stackTopIndex = stack[stack.length - 1];
        maxarea = Math.max(maxarea, arr[pop] * (i - stackTopIndex - 1));
      }
    }
  }

  while (stack.length !== 0) {
    let pop = stack.pop();
    if (stack.length === 0) {
      maxarea = Math.max(arr[pop] * i, maxarea);
    } else {
      let stackTopIndex = stack[stack.length - 1];
      maxarea = Math.max(maxarea, arr[pop] * (i - stackTopIndex - 1));
    }
  }

  console.log("histogram max area is", maxarea);

  return maxarea;
};
//maxAraeaHistogram([1, 2, 4]);

// smallest positive numnber missing from array in o(n)

const smallestPositiveNumberMissing = arr => {
  for (let i = 0; i < arr.length; i++) {
    // here we first try to store the value

    while (arr[i] > 0 && arr[i] < arr.length && arr[i] !== arr[arr[i]]) {
      let temp = arr[arr[i]];
      arr[arr[i]] = -arr[i];
      arr[i] = temp;
    }
  }
  console.log("indexed array is", arr);
};

//smallestPositiveNumberMissing([1, 1, 1, 0, -1, -2]);

const matrix = [
  [0, 1, 1, 0, 1],
  [1, 1, 0, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0]
];
const matrix2 = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0]
];
const findMaxSizeRectanglerInMatrix = mat => {
  console.log("matrix", matrix);
  let row = mat.length;
  let col = mat[0].length;
  console.log("row is", row, "col is", col);

  let histoArr = mat[0];

  let maxArea = -10;
  // now we adding every row of matrix to next row
  for (let i = 1; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j]) {
        histoArr[j] = histoArr[j] + mat[i][j];
      } else histoArr[j] = 0;
    }
    console.log(histoArr);
    maxArea = Math.max(maxArea, maxAraeaHistogram(histoArr));
  }

  console.log("histoArr is", histoArr, "max area is", maxArea);
};
// with histogram....sapce coampletiy is o(row or col)  and time O(row*col)
//findMaxSizeRectanglerInMatrix(matrix2);

// sapce compleity o(row*col)
const findMaxSizeSquareerInMatrixWithDP = mat => {
  if (!mat || mat.length === 0) {
    return console.log("empty matrix");
  }
  let row = mat.length;
  let col = mat[0].length;
  let dp = [];
  for (let i = 0; i < row; i++) {
    dp[i] = [];
    for (let j = 0; j < col; j++) {
      dp[i][j] = 0;
    }
  }
  for (let i = 0; i < row; i++) {
    dp[i][0] = mat[i][0];
  }
  for (let i = 0; i < col; i++) {
    dp[0][i] = mat[0][i];
  }
  console.log("dp matrix", dp);

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (mat[i][j]) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      } else {
        dp[i][j] = 0;
      }
    }
  }
};
//findMaxSizeSquareerInMatrixWithDP(matrix2);

const matrix3 = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15]
];
const diagnolaTraversalTriangle = mat => {
  let row = mat.length;
  let col = mat[0].length;

  for (let i = 0; i < row; i++) {
    let k = i;
    let j = 0;
    while (k >= 0) {
      console.log(mat[k][j]);
      j++;
      k--;
    }
  }
};
//diagnolaTraversalTriangle(matrix3);

const morrisInorderTraversal = node => {
  console.log(node);
  let current = node;

  while (current) {
    if (!current.left) {
      console.log("inorder data", current.data);
      current = current.right;
    } else {
      let pred = current.left;

      while (
        pred.right !== null &&
        pred.right &&
        pred.right.data !== current.data
      ) {
        pred = pred.right;
      }
      if (pred.right === null) {
        pred.right = current;
        current = current.left;
      } else {
        console.log("inorder data", current.data);
        pred.right = null;
        current = current.right;
      }
    }
  }
};
////morrisInorderTraversal(tree.root);

const getHeightOfBT = node => {
  if (node === null) {
    return 0;
  }
  let left = getHeightOfBT(node.left);
  let right = getHeightOfBT(node.right);

  return 1 + Math.max(left, right);
};
//console.log("height of bt", getHeightOfBT(tree.root));

// diameter of tree is maxima dinatnce b/w any node  in btree
// that is nothing but maximum height at each node and return to root
let diameter = 0;
const diameterOfbtree = node => {
  if (node === null) {
    return 0;
  }
  let left = diameterOfbtree(node.left);
  let right = diameterOfbtree(node.right);

  diameter = Math.max(diameter, left + right + 1);

  return 1 + Math.max(left, right);
};

//console.log("diameter is", diameterOfbtree(tree.root), "diameter ", diameter);

const dictionary = ["GUTKE", "GUT", "QUIZ", "GO"];
const boggle = [
  ["G", "U", "T"],
  ["Y", "L", "U"],
  ["G", "U", "T"]
];
let visited = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

const isSafe = (mat, i, j, row, col) => {
  if (i >= 0 && i < row && j >= 0 && j < col && !visited[i][j]) {
    return true;
  } else return false;
};
let path = 1;
const foundWordInmatrixDFS = (mat, str, i, j, row, col, index) => {
  if (i < 0 || j < 0 || j >= row || i >= col) {
    return false;
  }
  if (mat[i][j] !== str[index]) {
    return false;
  }
  if (index === str.length - 1) {
    return true;
  }
  visited[i][j] = path++;
  let isFound =
    foundWordInmatrixDFS(mat, str, i, j + 1, row, col, index + 1) ||
    foundWordInmatrixDFS(mat, str, i + 1, j, row, col, index + 1) ||
    foundWordInmatrixDFS(mat, str, i + 1, j + 1, row, col, index + 1) ||
    foundWordInmatrixDFS(mat, str, i - 1, j, row, col, index + 1);

  visited[i][j] = path--;
  return isFound;
};

const foundWordInmatrixDFS2 = (mat, str, i, j, row, col, index) => {
  if (
    i < row &&
    j < col &&
    index === str.length - 1 &&
    mat[i][j] === str[str.length - 1]
  ) {
    return true;
  }

  if (isSafe(mat, i, j, row, col)) {
    if (mat[i][j] === str[index]) {
      visited[i][j] = path++;
      if (foundWordInmatrixDFS2(mat, str, i, j + 1, row, col, index + 1)) {
        return true;
      }
      if (foundWordInmatrixDFS2(mat, str, i + 1, j, row, col, index + 1)) {
        return true;
      }
      if (foundWordInmatrixDFS2(mat, str, i + 1, j + 1, row, col, index + 1)) {
        return true;
      }
      if (foundWordInmatrixDFS2(mat, str, i - 1, j, row, col, index + 1)) {
        return true;
      }
      visited[i][j] = path--;
      return false;
    }
  } else return false;
};

const found = (mat, str, i, j, row, col, index) => {
  let len = str.length - 1;
  if (i < row && j < col && index === len && mat[i][j] === str[len]) {
    return true;
  }

  if (isSafe(mat, i, j, row, col)) {
    if (mat[i][j] === str[index]) {
      visited[i][j] = path++;
      let R = [0, 1, 1];
      let C = [1, 0, 1];
      for (let k = 0; k < R.length; k++) {
        if (found(mat, str, i + R[k], j + C[k], row, col, index + 1)) {
          return true;
        }
      }
      visited[i][j] = path--;
      return false;
    }
  } else return false;
};

const printAllOccurenceOfWord = (mat, str, i, j, row, col, index) => {
  let len = str.length - 1;
  if (i < row && j < col && index === len && mat[i][j] === str[len]) {
    return true;
  }

  if (isSafe(mat, i, j, row, col)) {
    if (mat[i][j] === str[index]) {
      visited[i][j] = path++;
      let R = [0, 1, 1];
      let C = [1, 0, 1];
      for (let k = 0; k < R.length; k++) {
        if (
          printAllOccurenceOfWord(
            mat,
            str,
            i + R[k],
            j + C[k],
            row,
            col,
            index + 1
          )
        ) {
          return true;
        }
      }
      visited[i][j] = path--;
      return false;
    }
  } else return false;
};
const findWordsInboggle = (mat, dict) => {
  let dictLen = dict.length;
  let row = mat.length;
  let col = mat[0].length;
  let firstWord = dict[1];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (printAllOccurenceOfWord(mat, dict[1], i, j, row, col, 0)) {
        console.log("pattern found at", i, "and", j);
      }
      if (mat[i][j] === firstWord[0]) {
        // console.log("word find at", i, "and", j);
        //console.log(foundWordInmatrixDFS(mat, firstWord, i, j, row, col, 0));
        //console.log(foundWordInmatrixDFS2(mat, firstWord, i, j, row, col, 0));
        //console.log("found ", found(mat, firstWord, i, j, row, col, 0));
        console.log("visited", visited);
        // return;
        //dfsUtilWord(mat,firstWord);
      }
    }
  }
};
findWordsInboggle(boggle, dictionary);

const test = index => {
  if (index === 1) {
    return true;
  }
  for (let i = 0; i < 3; i++) {
    if (test(index + 1)) {
      return console.log("hii");
    }
  }
};
test(0);

let Boggle2 = [
  ["A", "B", "C", "D"],
  ["E", "F", "G", "H"],
  ["I", "J", "K", "L"],
  ["M", "N", "O", "P"]
];

let dictionary2 = ["AFGKL", "CDAS", "MNOP", "BCGKLP"];

const isValid = (mat, i, j, row, col, visited2) => {
  if (i >= 0 && i < row && j >= 0 && j < col && !visited2[i][j]) {
    return true;
  } else {
    return false;
  }
};

let pathIndex = 1;
const searchWordInBoggle = (mat, word, i, j, row, col, index, visited2) => {
  let len = word.length - 1;
  if (i < row && j < col && index === len && mat[i][j] === word[len]) {
    return true;
  }
  if (isValid(mat, i, j, row, col, visited2)) {
    if (mat[i][j] === word[index]) {
      visited2[i][j] = pathIndex++;
      let R = [0, 1, 1];
      let C = [1, 0, 1];

      for (let k = 0; k < R.length; k++) {
        if (
          searchWordInBoggle(
            mat,
            word,
            i + R[k],
            j + C[k],
            row,
            col,
            index + 1,
            visited2
          )
        ) {
          return true;
        }
      }
      visited2[i][j] = pathIndex--;
      return false;
    }
  } else return false;
};
const findWordRepationInboggle = (mat, word) => {
  let row = mat.length;
  let col = mat[0].length;
  let visited2 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (searchWordInBoggle(mat, word, i, j, row, col, 0, visited2)) {
        console.log("word is ", word, "at index", i, "adn", j);
      } else {
        console.log("word not found ", word);
      }
    }
  }
};

const findAllDictionaryWordinBoggle = (mat, dict) => {
  if (!dict && dict.length === 0) {
    return false;
  }
  for (let k = 0; k < dict.length; k++) {
    findWordRepationInboggle(mat, dict[k]);
  }
};
//findAllDictionaryWordinBoggle(Boggle2, dictionary2);

function TrieNode(isEnd) {
  this.data = new Map();
  this.isEnd = isEnd ? isEnd : false;
  this.next = null;
}

function Trie() {
  this.root = new TrieNode();
}
Trie.prototype.insert = function(str) {
  let strLen = str.length;
  if (str.length === 0) {
    return false;
  }
  let node = this.root;
  for (let i = 0; i < strLen; i++) {
    //debugger;
    if (!node.data.get(str[i])) {
      node.data.set(str[i], true);
    }
    if (!node.next) {
      node.next = new TrieNode();
    }
    node = node.next;
  }
};

Trie.prototype.search = function(str) {
  if (!str) {
    return false;
  }
  let isFound = false;
  let node = this.root;
  for (let i = 0; i < str.length; i++) {
    if (!node.data.get(str[i])) {
      isFound = false;
      return console.log("word not found");
    }
    node = node.next;
  }
  return true;
};
let trie = new Trie();
trie.insert("vifb");
trie.insert("ka");

console.log("trie data", trie);
console.log("word found", trie.search("vifb"), trie.search("ka"));

const iterateTheMap = node => {
  for (let [key, val] of node.data) {
    console.log("key", key, "val", val);
  }
};
iterateTheMap(trie.root);

let dictionary3 = ["vivek", "tomy", "kumar", "malik"];
let matrix4 = [
  ["v", "i", "v", "e"],
  ["k", "u", "m", "k"],
  ["m", "a", "l", "i"]
];
const searchBoggleWithTrie = (mat, dict) => {
  // first insert all word of dicttinary in trie

  let trie = new Trie();
  for (let i = 0; i < dict.length; i++) {
    trie.insert(dict[i]);
  }
  console.log("trie", trie);
};
searchBoggleWithTrie(matrix4, dictionary3);
