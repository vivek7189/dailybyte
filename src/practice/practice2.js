import { isPlaceholder, thisExpression } from "@babel/types";
import { AvFastForward } from "material-ui/svg-icons";
import map from "material-ui/svg-icons/maps/map";
import star from "material-ui/svg-icons/toggle/star";
// import "./practice3";
import "./practice4";
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

tree.root.left.left = new NodeBST(4);
tree.root.left.right = new NodeBST(5);

tree.root.right.left = new NodeBST(6);
tree.root.right.right = new NodeBST(7);
tree.root.right.right.right = new NodeBST(8);

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

//console.log("list is ", list);
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
//findWordsInboggle(boggle, dictionary);

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
//test(0);

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
//let trie = new Trie();
//trie.insert("vifb");
//trie.insert("ka");

//console.log("trie data", trie);
//console.log("word found", trie.search("vifb"), trie.search("ka"));

const iterateTheMap = node => {
  for (let [key, val] of node.data) {
    console.log("key", key, "val", val);
  }
};
//iterateTheMap(trie.root);

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
//searchBoggleWithTrie(matrix4, dictionary3);

let inorder = ["d", "b", "e", "a", "f", "c"];
let preorder = ["a", "b", "d", "e", "c", "f"];

const treeInorderPreorder = () => {};
//console.log("tree is", treeInorderPreorder());
const inorderSuccesor = (node, data, pre) => {
  if (node === null) {
    return null;
  }

  inorderSuccesor(node.right, data, pre);
  if (node.data === data) {
    console.log("final pre", pre.data);
  }
  pre = node;
  inorderSuccesor(node.left, data, pre);
};
//inorderSuccesor(tree.root, 5, "");

const preorderSuccesor = (node, data, pre) => {
  if (node === null) {
    return null;
  }

  if (node.data === data) {
    console.log("final pre t", pre.data);
  }
  pre = node;
  preorderSuccesor(node.right, data, pre);

  preorderSuccesor(node.left, data, pre);
};
//preorderSuccesor(tree.root, 5, "");

let inorder1 = [4, 18, 2, 5, 10, 6, 3, 7];
let postorder = [18, 4, 5, 2, 6, 7, 3, 10];
let initialRootIndex = postorder.length - 1;
let nodeInorder = new MakeBst().root;
const treeFromPostOrderInorder = (ino, start, end, node) => {
  if (start > end) {
    return null;
  }
  node = new NodeBST(postorder[initialRootIndex]);

  let getIndx = ino.indexOf(postorder[initialRootIndex]);
  initialRootIndex--;
  node.right = treeFromPostOrderInorder(ino, getIndx + 1, end, node);
  node.left = treeFromPostOrderInorder(ino, start, getIndx - 1, node);

  return node;
};

// console.log(
//   "tree is kkk",
//   treeFromPostOrderInorder(inorder1, 0, inorder1.length - 1, nodeInorder)
// );

let tree3 = new MakeBst();
tree3.root = new NodeBST(50);
tree3.root.left = new NodeBST(30);
tree3.root.left.left = new NodeBST(20);
tree3.root.left.right = new NodeBST(40);

tree3.root.right = new NodeBST(70);
tree3.root.right.left = new NodeBST(60);
// tree3.root.right.left.left = new NodeBST(56);
// tree3.root.right.left.right = new NodeBST(65);
tree3.root.right.right = new NodeBST(80);

let totalsum = 0;
const addAllgreatsValuesTobst = node => {
  if (node === null) {
    return null;
  }

  let right = addAllgreatsValuesTobst(node.right);
  totalsum = totalsum + node.data;
  node.data = totalsum;
  let left = addAllgreatsValuesTobst(node.left);
};
//addAllgreatsValuesTobst(tree3.root);
//console.log("modified tree", tree3);
let pre = 0;
const transformBSTtoGreatersum = node => {
  if (node === null) {
    return null;
  }

  transformBSTtoGreatersum(node.right);
  let nodeData = node.data;
  node.data = pre;
  pre = nodeData + pre;

  transformBSTtoGreatersum(node.left);

  //return pre;
};
//console.log(tree3);
//transformBSTtoGreatersum(tree3.root);

//console.log(tree3);

function NodeBstC(data) {
  this.data = data;
  this.left = null;
  this.right = null;
  this.znext = null;
}
function BSTSpecial() {
  this.root = null;
}
let connectTree = new BSTSpecial();
connectTree.root = new NodeBstC(1);
connectTree.root.left = new NodeBstC(2);
connectTree.root.left.left = new NodeBstC(4);
connectTree.root.left.right = new NodeBstC(5);

connectTree.root.right = new NodeBstC(3);
connectTree.root.right.left = new NodeBstC(6);
connectTree.root.right.right = new NodeBstC(7);
const connectNodeAtsameLevel = node => {
  console.log("connect tree", node);
  let queue = [];
  queue.push(node);
  while (queue.length > 0) {
    let currentSize = queue.length;
    let prev = null;
    for (let i = 0; i < currentSize; i++) {
      let pop = queue.shift();
      if (i > 0) {
        prev.znext = pop;
      }
      prev = pop;
      if (pop.left) {
        queue.push(pop.left);
      }
      if (pop.right) {
        queue.push(pop.right);
      }
    }
  }
};
//connectNodeAtsameLevel(connectTree.root);

//console.log("modified connect tree", connectTree);
const getNextRightNode = node => {
  let temp = node.znext;
  while (temp !== null) {
    if (temp.left) {
      return temp.left;
    }
    if (temp.right) {
      return temp.right;
    }
    temp = temp.znext;
  }

  return null;
};
const connectNodeAtsameLevelIterative = nodeP => {
  if (nodeP === null) {
    return null;
  }
  nodeP.znext = null;
  while (nodeP) {
    let node = nodeP;
    // here we traversing  at individual level....each node from left to right
    while (node) {
      if (node.left) {
        if (node.right) {
          node.left.znext = node.right;
          //node.right.znext = getNextRightNode(node);
        } else {
          node.left.znext = getNextRightNode(node);
        }
      }
      if (node.right) {
        node.right.znext = getNextRightNode(node);
      }
      // here assigning next level node to current
      node = node.znext;
    }
    // we we assing first node of next level to current node i.e nodeP
    if (nodeP.left) {
      nodeP = nodeP.left;
    } else if (nodeP.right) {
      nodeP = nodeP.right;
    } else {
      nodeP = getNextRightNode(nodeP);
    }
  }
};
//connectNodeAtsameLevelIterative(connectTree.root);
//console.log("connectTree next", connectTree);

const getLastLeft = (node, data) => {
  let last;
  while (node !== null && node.data !== data) {
    if (node.data > data) {
      last = node;
      node = node.left;
    }
    if (node.data < data) {
      node = node.right;
    }
  }
  console.log("last node is", last);
};

const inorderSuccessorInBSt = (node, data) => {
  if (node === null) {
    return null;
  }
  // if found the node
  if (node.data === data) {
    if (node.right !== null) {
      let right = node.right;
      while (right && right.left !== null) {
        right = right.left;
      }
      console.log("successor  is", right);
    }
    if (node.right === null) {
      getLastLeft(tree3.root, data);
    }
  }
  if (node.data > data) {
    inorderSuccessorInBSt(node.left, data);
  }
  if (node.data < data) {
    inorderSuccessorInBSt(node.right, data);
  }
};
//console.log("found the node", inorderSuccessorInBSt(tree3.root, 60));

const stringInterLeavingDP = (str1, str2, str3) => {
  let str1Len = str1.length;
  let str2Len = str2.length;
  let str3Len = str3.length;

  if (str1Len + str2Len !== str3Len) {
    return false;
  }
  let dp = [];

  for (let i = 0; i <= str1Len; i++) {
    dp[i] = [];
    for (let j = 0; j <= str2Len; j++) {
      dp[i][j] = 0;
    }
  }

  // to fill first row
  for (let i = 0; i < str2Len; i++) {
    if (str2[i] === str3[i]) {
      dp[0][i + 1] = "T";
    } else {
      dp[0][i + 1] = "F";
    }
  }

  // to fill first col
  for (let i = 0; i < str1Len; i++) {
    if (str1[i] === str3[i]) {
      dp[i + 1][0] = "T";
    } else {
      dp[i + 1][0] = "F";
    }
  }

  for (let i = 1; i <= str1Len; i++) {
    for (let j = 1; j <= str2Len; j++) {
      // be carefulll to update str1 and str2 corresponding values
      if (str1[i - 1] === str3[i + j - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else if (str2[j - 1] === str3[i + j - 1]) {
        dp[i][j] = dp[i][j - 1];
      } else {
        dp[i][j] = "F";
      }
    }
  }

  console.log("string interleaving DP", dp);
};
//stringInterLeavingDP("XXYZ", "AACD", "AXXACYDZ");

const isStrPalindrom = (i, j, str) => {
  if (i === j) return true;
  let isPalindrom = true;
  while (i < j) {
    if (str[i] !== str[j]) {
      return (isPalindrom = false);
    }
    i++;
    j--;
  }
  return isPalindrom;
};

const palindromMinPartitionDP = str => {
  if (str === null || str === "") return false;
  let strLen = str.length;
  let dp = [];
  for (let i = 0; i < strLen; i++) {
    dp[i] = [];
    for (let j = 0; j < strLen; j++) {
      dp[i][j] = 0;
    }
  }

  // traveser str to check palindrom
  // and fill the table in bottom up mannner
  for (let p = 2; p <= strLen; p++) {
    for (let i = 0; i < strLen - p + 1; i++) {
      // 12   23   34   45,    13  24   35,    14  25,     15,

      let j = i + p - 1;
      console.log("i", i, "j", j);
      if (isStrPalindrom(i, j, str)) {
        dp[i][j] = 0;
      } else {
        let minVal = 100;
        for (let k = i; k <= j - 1; k++) {
          minVal = Math.min(minVal, 1 + dp[i][k] + dp[k + 1][j]);
        }
        dp[i][j] = minVal;
      }
    }
  }
  console.log("palindrom dp", dp);
};

//palindromMinPartitionDP("abcbm");

let pathMatrix = [
  [1, 2, 3],
  [8, -1, 4],
  [7, 6, 5]
];

const isValidPath = (mat, i, j, row, col, dp) => {
  // using visited as dp array
  if (i >= 0 && i < row && j >= 0 && j < col && dp[i][j] === -1) {
    return true;
  } else {
    return false;
  }
};
const dfspathMatrix2 = (mat, i, j, row, col, dp) => {
  let len = 0;
  dp[i][j] = pathMatIndex++;
  if (isValidPath(mat, i, j + 1, row, col, dp) && mat[i][j] < mat[i][j + 1]) {
    len = 1 + dfspathMatrix2(mat, i, j + 1, row, col, dp);
  }
  if (isValidPath(mat, i + 1, j, row, col, dp) && mat[i][j] < mat[i + 1][j]) {
    //dp[i][j] = pathMatIndex++;
    len = 1 + dfspathMatrix2(mat, i + 1, j, row, col, dp);
  }
  if (isValidPath(mat, i, j - 1, row, col, dp) && mat[i][j] < mat[i][j - 1]) {
    //dp[i][j] = pathMatIndex++;
    len = 1 + dfspathMatrix2(mat, i, j - 1, row, col, dp);
  }
  if (isValidPath(mat, i - 1, j, row, col, dp) && mat[i][j] < mat[i - 1][j]) {
    // dp[i][j] = pathMatIndex++;
    len = 1 + dfspathMatrix2(mat, i - 1, j, row, col, dp);
  }

  return len;
};
let pathMatIndex = 1;
// max diff is 1 between element
const findLongagestPathInMatrix = mat => {
  if (mat === null || mat.length === 0) return 0;

  let row = mat.length;
  let col = mat[0].length;
  let result = 1;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      {
        // here is navie algorithm consider every cell each time with new dp array
        // here Dp array is acting as visited array

        let dp = [
          [-1, -1, -1],
          [-1, -1, -1],
          [-1, -1, -1]
        ];
        result = dfspathMatrix2(mat, i, j, row, col, dp);
        console.log("dp matrix is", dp, result);
      }
    }
  }

  return result;
};
//console.log("result is", findLongagestPathInMatrix(pathMatrix));

/// if dont want to use visited array in finding longest path
//then DP cache array will be used....and return the each computed value with max

const isValidPath3 = (mat, i, j, row, col, dp) => {
  if (i >= 0 && i < row && j >= 0 && j < col) {
    return true;
  } else {
    return false;
  }
};
const dfspathMatrix3 = (mat, i, j, row, col, dp) => {
  //debugger;
  if (dp[i][j] !== -1) {
    return dp[i][j];
  }
  let left = 0;
  let right = 0;
  let top = 0;
  let down = 0;
  if (isValidPath3(mat, i, j + 1, row, col, dp) && mat[i][j] < mat[i][j + 1]) {
    left = 1 + dfspathMatrix3(mat, i, j + 1, row, col, dp);
  }
  if (isValidPath3(mat, i + 1, j, row, col, dp) && mat[i][j] < mat[i + 1][j]) {
    right = 1 + dfspathMatrix3(mat, i + 1, j, row, col, dp);
  }
  // if (isValidPath3(mat, i, j - 1, row, col, dp) && mat[i][j] < mat[i][j - 1]) {
  //   top = 1 + dfspathMatrix3(mat, i, j - 1, row, col, dp);
  // }
  // if (isValidPath3(mat, i - 1, j, row, col, dp) && mat[i][j] < mat[i - 1][j]) {
  //   down = 1 + dfspathMatrix3(mat, i - 1, j, row, col, dp);
  // }

  // here dont think left rightactual right or lfet...think in reverse backtrac at single point
  // here we reachin till we find our increaing elemnt then
  // if above conditions are true then will come here
  // here will count the max path of orign point(i,j)...and save it in dp[i][j]
  // think about left right in revers poin...last stage...i.e    last point lfeft right all 0
  // then back track to this below line
  // and calcaute of max in all four or given direction...

  // while backtracking it store the each individal max length of elemnt
  // which later help to compute others
  dp[i][j] = Math.max(left, Math.max(right, Math.max(top, down)));
  return dp[i][j];
};

const findLongagestPathInMatrix3 = mat => {
  if (mat === null || mat.length === 0) return 0;
  let dp = [
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1]
  ];
  let row = mat.length;
  let col = mat[0].length;
  let result = 1;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      //debugger;
      {
        if (dp[i][j] === -1) {
          let res = dfspathMatrix3(mat, i, j, row, col, dp);
          console.log("dp matrix is", dp, res);
          result = Math.max(result, res);
        }
      }
    }
  }

  return result;
};
let pathMatrix3 = [
  [1, 10, 11, 0],
  [8, 7, 12, 5],
  [7, 11, 13, 14],
  [14, 10, 5, 15]
];
//console.log("result is", findLongagestPathInMatrix3(pathMatrix3));
