import { FormHelperText } from "@material-ui/core";

const minimumSwapToMakeStrPalindrom = string => {
  if (string === null || string.length === 1) return 0;

  let len = string.length;
  let str = string.split("");
  let left = 0;
  let right = len - 1;
  let count = 0;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    //debugger;
    while (str[left] !== str[right]) {
      if (left === right) {
        return -1;
      }
      if (str[left] === str[right]) {
        break;
      }
      right--;
    }
    for (let k = right; k < len - left - 1; k++) {
      let temp = str[k];
      str[k] = str[k + 1];
      str[k + 1] = temp;
      count++;
    }
    left++;
    right = len - left - 1;
  }
  return count;
};

console.log("minim swap is", minimumSwapToMakeStrPalindrom("acbba"));

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
tree.root.left.right = new NodeBST(5);
tree.root.left.right.left = new NodeBST(9);

tree.root.right = new NodeBST(3);
tree.root.right.left = new NodeBST(6);
tree.root.right.right = new NodeBST(7);
tree.root.right.left.left = new NodeBST(10);
tree.root.right.left.right = new NodeBST(11);
const findCousinInBtree = node => {
  if (node === null) {
    return null;
  }
};

console.log("cousins is", findCousinInBtree(tree.root));

const findMaxprofit = arr => {
  if (arr === null || arr.length === 0) return 0;

  let arrLen = arr.length;
  let res = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = arrLen - 1; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (res < max - arr[i]) {
      res = max - arr[i];
    }
  }
  console.log(res);
  return res;
};

let searchIndRotatedDuplicate = function(nums, target) {
  //debugger;

  if (nums === null || nums.length === 0) return false;

  let arrLen = nums.length;

  let left = 0;
  let right = arrLen - 1;

  while (left <= right) {
    //debugger;
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return true;
    }
    // here we handling the case of duplicates
    if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
      left++;
      right--;
      continue;
    }
    if (nums[mid] <= nums[right]) {
      if (target >= nums[mid] && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target <= nums[mid] && nums[left] <= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return false;
};

console.log(
  "rotated search,",
  searchIndRotatedDuplicate([2, 2, 3, 0, 2, 2], 0)
);

var search1 = function(nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(nums, target, low, high) {
  if (low > high) return false;
  let middle = Math.floor((low + high) / 2);
  if (nums[middle] === target) return true;

  // if middle element is equal to both first & last element of the array then target can be present on either side so we have to check both the sides.
  if (nums[middle] === nums[low] && nums[middle] === nums[high]) {
    return (
      binarySearch(nums, target, low, middle - 1) ||
      binarySearch(nums, target, middle + 1, high)
    );
  } else if (nums[middle] >= nums[low]) {
    if (target >= nums[low] && target < nums[middle]) {
      return binarySearch(nums, target, low, middle - 1);
    } else {
      return binarySearch(nums, target, middle + 1, high);
    }
  } else {
    if (target > nums[middle] && target <= nums[high]) {
      return binarySearch(nums, target, middle + 1, high);
    } else {
      return binarySearch(nums, target, low, middle - 1);
    }
  }
}

findMaxprofit([1, 2, 3, 4, 5, 6]);
function compare(str, pattern) {
  for (let i = 0; i < pattern.length; i++)
    if (str[i] != pattern[i]) return false;
  return true;
}
const replaceInString = (string, pattern) => {
  if (pattern == null) return;
  let str = string.split("");
  let len = pattern.length;
  if (len == 0) return;

  let i = 0;
  let j = 0;
  let count = 0;

  // for each character
  while (str[j]) {
    //debugger;
    count = 0;

    // compare str[j..j+len] with pattern
    while (compare(str + j, pattern)) {
      // increment j by length of pattern
      j = j + len;
      count++;
    }

    // If single or multiple occurrences of pattern
    // is found, replace it by character 'X'
    if (count > 0) str[i++] = "X";

    // copy character at current position j
    // to position i and increment i and j
    if (str[j]) str[i++] = str[j++];
  }

  // add a null character to terminate string
  str[i] = "\0";

  console.log("string after replaced", str);
};
replaceInString("vivekisvivek", "vivek");

var findMinInrotatedDuplicate = function(arr) {
  if (arr === null || arr.length === 0) return null;
  let left = 0;
  let right = arr.length - 1;
  return findMinMum(arr, left, right);
};

const findMinMum = (arr, left, right) => {
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === arr[left] && arr[mid] === arr[right]) {
      // important step
      //left++;
      right--;
      continue;
    }
    if (mid > left && arr[mid] < arr[mid - 1]) {
      return arr[mid];
    }
    if (mid < right && arr[mid] > arr[mid + 1]) {
      return arr[mid + 1];
    }

    if (arr[mid] <= arr[right]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return arr[0];
};
console.log("min in array", findMinInrotatedDuplicate([2, 3, 4, 5, 6, 1]));

const longestConsecutiveSecquenceArrayNegativeAllowed = arr => {
  if (arr === null || arr.length === 0) {
    return 0;
  }
  let arrLen = arr.length;

  let sequnceMap = new Map();
  // put every elemnt of array inside map//// so that searching is O(1)
  for (let i = 0; i < arrLen; i++) {
    if (!sequnceMap.get(arr[i])) {
      sequnceMap.set(arr[i], true);
    }
  }
  let max = 1;
  let count = 1;
  // here we will traveser the array to find consiqtive elemnt....and search it in map
  for (let i = 0; i < arrLen; i++) {
    if (!sequnceMap.get(arr[i] - 1)) {
      let elem = arr[i] + 1;
      while (sequnceMap.get(elem)) {
        count++;
        max = Math.max(max, count);
        elem++;
      }
      count = 1;
    }
  }
  return max;
};

console.log(
  "longest qequence is",
  longestConsecutiveSecquenceArrayNegativeAllowed([10, 4, 20, 1, 2, 3, 19])
);

let isValid = function(s) {
  if (s === "") {
    return true;
  }
  let strLen = s.length;
  let stack = [];

  for (let i = 0; i < strLen; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
      continue;
    }
    let pop = stack.pop();
    if (!isMatching(pop, s[i])) {
      return false;
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
function isMatching(str1, str2) {
  if (str1 === "(" && str2 === ")") {
    return true;
  }
  if (str1 === "{" && str2 === "}") {
    return true;
  }
  if (str1 === "[" && str2 === "]") {
    return true;
  }
  return false;
}

//console.log("valid paranthesis", isValid("()["));

const isValidShortApproache = function(str) {
  if (str === "") {
    return true;
  }
  if (str.length % 2 !== 0) {
    return false;
  }
  let strLen = str.length;
  let stack = [];

  for (let i = 0; i < strLen; i++) {
    if (str[i] === "(") {
      stack.push(")");
    } else if (str[i] === "{") {
      stack.push("}");
    } else if (str[i] === "[") {
      stack.push("]");
    } else if (stack.length === 0 || stack.pop() !== str[i]) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log("valid paranthesis", isValidShortApproache("()[]}"));

const findFisrtMissingPositive = arr => {
  if (arr === null || arr.length === 0) return 0;
  let arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    while (arr[i] > 0 && arr[i] < arrLen && arr[i] !== arr[arr[i] - 1]) {
      // be precautios of swaping order first choose arr[arr[i]-1]....sawp 5 with arr[4]
      // use this nums[nums[i]%n]+=n    [1,2,3,4,5]
      let swap = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = swap;
    }
  }
  console.log(arr);
  for (let i = 0; i < arrLen; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
  return arrLen + 1;
};
console.log(
  "first missing positive is",
  findFisrtMissingPositive([-1, 3, 2, 4, 5])
);

const hassingUsingArray = arr => {
  let len = arr.length;
  for (let i = 0; i < arr.length; i++) {
    arr[arr[i] % len] = arr[arr[i] % len] + len;
  }
  console.log(arr);
};

hassingUsingArray([2, 0, 2, 5, 6]);

const minRemoveToMakeValid = string => {
  if (string === null) {
    return "";
  }
  let str = string.split("");
  let stack = [];
  // here making str to str array so that replcae remove can easily
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(i);
    } else if (str[i] === ")") {
      // but here need to check first in satck length
      if (stack.length) {
        stack.pop();
      } else {
        // remove that particaular char
        str[i] = "";
      }
    }
  }
  let stackLen = stack.length;
  for (let i = 0; i < stackLen; i++) {
    str[stack[i]] = "";
  }
  return stack, str.join("");
};

console.log("minRemoveToMakeValid", minRemoveToMakeValid("a)b(c)d((()"));

const removeDuplicates = function(arr) {
  if (arr === null || arr.length === 0) return 0;

  let arrLen = arr.length;
  let j = 0;
  for (let i = 1; i < arrLen; i++) {
    if (arr[i] === arr[i - 1]) {
      j++;
    } else {
      arr[i - j] = arr[i];
    }
  }
  // arr.length = arr.length - j;
  return arr;
};

console.log(
  "unique array is",
  removeDuplicates([1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4])
);

const removeDuplicatesAtMostTwice = function(arr, k) {
  if (arr === null || arr.length === 0) return [];
  let arrLen = arr.length;
  if (arrLen < k) return arrLen;

  let count = 2;
  for (let i = 2; i < arrLen; i++) {
    // here if current elemnt is greater from prevoius 2 or k....take befit of sorted elemnt
    if (arr[i] > arr[count - 2]) {
      arr[count] = arr[i];
      count++;
    }
  }
  console.log("aaaaaa 4 44 4 4 4", arr);
  return count;
};

console.log(
  "unique array is4 4 ",
  removeDuplicatesAtMostTwice([1, 1, 1, 2, 2, 3], 2)
);
const maxSumlengthWithKnumber = (arr, k) => {
  if (arr === null || arr.length === 0) return 0;
  let res = 0;
  let flag = true;
  let count = 0;
  const arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    if (arr[i] <= k) {
      count++;
      if (arr[i] === k) {
        flag = true;
      }
    }
    if (arr[i] > k) {
      if (flag) {
        res = res + count;
        flag = false;
      }
      count = 0;
    }
  }
  console.log("res is", res + count);
};
maxSumlengthWithKnumber([1, 2, 3, 2, 3, 4, 1], 4);

const maxSumofnoOverlappingArray = (arr, k) => {
  const arrLen = arr.length;
  let sum = 0;
  let maxSum = 0;
  let i = 0;
  let index = 0;
  while (i < arrLen) {
    while (i < k) {
      sum += arr[i];
      i++;
    }
    sum = sum - arr[i - k] + arr[i];
    if (maxSum < sum) {
      maxSum = sum;
      index = i;
    }
    //maxSum = Math.max(sum, maxSum);

    i++;
  }
  console.log("maxSum", maxSum, index - k + 1, index);
};
maxSumofnoOverlappingArray([2, 5, 1, 2, 7, 3, 0], 3);

const maxSumTwoNonOverlapingArray = (A, L, M) => {
  let len = A.length;
  for (let i = 1; i < len; i++) {
    A[i] += A[i - 1];
  }
  //debugger;
  let LMax = A[L - 1],
    MMax = A[M - 1];
  let res = A[M + L - 1];
  for (let i = M + L; i < len; i++) {
    // update LMax to i - M;
    LMax = Math.max(LMax, A[i - M] - A[i - M - L]);
    MMax = Math.max(MMax, A[i - L] - A[i - M - L]);
    res = Math.max(res, LMax + A[i] - A[i - M], MMax + A[i] - A[i - L]);
  }
  return res;
};
console.log(
  "max sum isdddd",
  maxSumTwoNonOverlapingArray([2, 1, 2, 3, 1, 2, 1, 9], 4, 3)
);

const findAstrod = arr => {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    // if element is postive contine push the element
    if (arr[i] > 0) {
      stack.push(arr[i]);
    } else {
      let len = stack.length - 1;
      // here if stack top is postive and cureent is neagtive and bigger than stack
      while (stack.length !== 0 && stack[len] > 0 && -arr[i] > stack[len]) {
        stack.pop();
        len = stack.length - 1;
      }
      // here if tack empty or stack top is neagtive
      if (stack.length === 0 || stack[stack.length - 1] < 0) {
        stack.push(arr[i]);
      } else if (stack[stack.length - 1] === -arr[i]) {
        // here if stack top is equal to current number
        stack.pop();
      }
    }
  }
  console.log(stack);
  return stack;
};
console.log("astroid collide", findAstrod([-10, 10, 4, 5, -10]));

const searchRange = function(arr, target) {
  let len = arr.length;

  let left = 0;
  let right = len - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      // debugger;
      console.log("dsfsdfsdfsdfsdfsdfsd", mid);
      return findIndex(arr, mid, target);
    }
    // if (arr[mid] === arr[left] && arr[right] === arr[mid]) {
    //   left--;
    //   right++;
    // }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [-1, -1];
};

function findIndex(arr, index, target) {
  console.log(index);
  let i = index;
  let res = [];
  while (arr[i] === target) {
    i--;
  }
  res.push(i + 1);
  let j = index;
  while (arr[j] === target) {
    j++;
  }
  res.push(j - 1);
  return res;
}

console.log("searchRange", searchRange([5, 5, 5, 7, 7, 8, 10], 51));

let tree1 = new MakeBst();

tree1.root = new NodeBST(3);
tree1.root.left = new NodeBST(1);
tree.root.left.left = new NodeBST(3);
tree1.root.left.right = new NodeBST(3);
tree1.root.left.right.right = new NodeBST(13);
tree1.root.right = new NodeBST(4);
tree1.root.right.left = new NodeBST(1);
tree1.root.right.left.left = new NodeBST(14);
tree1.root.right.right = new NodeBST(5);

let counter1 = 0;
const countGoodNode = (node, max) => {
  //debugger;
  if (node === null) {
    return 0;
  }
  if (node.data >= max) {
    max = Math.max(max, node.data);
    counter1++;
  }
  countGoodNode(node.left, max);
  countGoodNode(node.right, max);
};

console.log("good node count is", countGoodNode(tree1.root, -100000));
console.log("gooooooog", counter1);

const maxProductSplitBtree = node => {
  if (node === null) {
    return node;
  }
  let left = maxProductSplitBtree(node.left);
  let right = maxProductSplitBtree(node.right);
  if (left > right) {
  }
  return node.data + left + right;
};

console.log(maxProductSplitBtree(tree1.root));

function findmaxSumLevel(node) {
  let stack = [];
  let maxsum = -100000;
  stack.push(node);
  let level = 1;
  let maxLevel = -10;
  while (stack.length > 0) {
    //debugger;
    let size = stack.length;
    let res = 0;
    while (size > 0) {
      let pop = stack.shift();
      res += pop.data;
      if (pop.left) {
        stack.push(pop.left);
      }
      if (pop.right) {
        stack.push(pop.right);
      }

      size--;
    }
    if (maxsum < res) {
      maxsum = res;
      maxLevel = level;
    }
    level++;
  }

  return maxLevel;
}

console.log("max level is", findmaxSumLevel(tree1.root));
let res = [];
const sideViewOfTreeRight = (node, res, level) => {
  if (node === null) {
    return [];
  }
  if (level === res.length) {
    res.push(node.data);
  }
  sideViewOfTreeRight(node.right, res, level + 1);
  sideViewOfTreeRight(node.left, res, level + 1);
};

console.log(
  "sideViewOfTreeRight",
  sideViewOfTreeRight(tree1.root, res, 0),
  res
);

let res1 = [];
const sideViewOfTreeLeftView = (node, res, level) => {
  if (node === null) {
    return [];
  }
  if (level === res.length) {
    res.push(node.data);
  }
  sideViewOfTreeLeftView(node.left, res, level + 1);
  sideViewOfTreeLeftView(node.right, res, level + 1);
};

console.log(
  "sideViewOfTreeLeftView",
  sideViewOfTreeLeftView(tree1.root, res1, 0),
  res1
);

const removeKdigittoMakesamllenumber = arr => {
  let arrlen = arr.length;
  let stack = [];
  let k = 3;
  for (let i = 0; i < arrlen; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] > arr[i] && k) {
      let pop = stack.pop();
      k--;
    }
    if (stack.length !== 0 || arr[i] !== 0) {
      stack.push(arr[i]);
    }
  }

  // make sure to remove k digit
  while (stack.length !== 0 && k--) {
    stack.pop();
  }
  return stack.join("");
  console.log("stack number is", stack);
};
console.log(
  "remove difgit",
  removeKdigittoMakesamllenumber([1, 4, 3, 2, 2, 1, 9])
);

const maxAreaCordainateWater = function(arr) {
  if (arr === null) return 0;

  let arrLen = arr.length;
  let maxarea = -10000;
  //debugger;
  for (let i = 0; i < arrLen; i++) {
    let left = i - 1;
    let right = i + 1;
    let leftmax = arr[i];
    let rightmax = arr[i];
    while (left >= 0) {
      leftmax = Math.max(leftmax, arr[left]);
      left--;
    }
    while (right < arrLen) {
      rightmax = Math.max(rightmax, arr[right]);
      right++;
    }
    let max = arr.indexOf(rightmax) - (arr.indexOf(leftmax) + 1);
    max = max === 0 ? 1 : max;
    maxarea = Math.max(maxarea, arr[i] * max);
  }
  return maxarea;
};
console.log(
  "max area cordinate water trapped is",
  maxAreaCordainateWater([1, 2])
);

const maxCordinateWaterSecond = arr => {
  if (arr === null || arr.length === 0) return 0;
  let arrLen = arr.length - 1;
  let left = 0;
  let right = arrLen;
  let maxArea = 0;

  while (left < right) {
    maxArea = Math.max(
      maxArea,
      Math.min(arr[left], arr[right]) * (right - left)
    );

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
console.log("maxcodinated water second", maxCordinateWaterSecond([2, 1]));

const rainTrappingWater = arr => {
  if (arr === null || arr.length === 0) return 0;
  let res = 0;

  let arrLen = arr.length - 1;

  let left = 0;
  let right = arrLen;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (arr[left] < arr[right]) {
      if (leftMax < arr[left]) {
        leftMax = arr[left];
      } else {
        res = res + leftMax - arr[left];
      }
      left++;
    } else {
      if (rightMax < arr[right]) {
        rightMax = arr[right];
      } else {
        res = res + rightMax - arr[right];
      }
      right--;
    }
  }
  return res;
};

console.log(
  "rainTrappingWater",
  rainTrappingWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
);
let maxZiglen = 0;
const zigzagpathInbtree = node => {
  if (node === null) return [-1, -1];

  let left = zigzagpathInbtree(node.left);
  let right = zigzagpathInbtree(node.right);
  let leftSwap = left[1] + 1;
  let rightSwap = right[0] + 1;

  maxZiglen = Math.max(maxZiglen, Math.max(leftSwap, rightSwap));
  return [leftSwap, rightSwap];
};
console.log("longest zigzag path is", zigzagpathInbtree(tree1.root));

const letterCombinationIntreeIterativeapprocahe = arr => {
  if (arr === null || arr.length === 0) return [];
  let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let arrLen = arr.length;
  // initial push empty string
  let queue = [""];
  let result = [];
  // while queue not empty
  while (queue.length) {
    let pop = queue.shift();
    // if length of genearte string is array length
    if (pop.length === arrLen) {
      result.push(pop);
    } else {
      let digit = arr[pop.length];
      for (let i = 0; i < map[digit].length; i++) {
        queue.push(pop + map[digit][i]);
      }
    }
  }
  console.log("last result", result);
};
console.log(
  "letter combination is",
  letterCombinationIntreeIterativeapprocahe([2, 2, 2])
);
// 0 and 1 key is epmty
let mapLetter = [
  "",
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz"
];
let finalRes = "";

var letterCombinations1 = function(digits) {
  let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let input = digits.split("");
  let len = input.length - 1;
  let res = "";
  let result = [];
  function letterComb(input, map, len, res) {
    if (len < 0) {
      console.log("ddfdfdf", res, result.push(res));
      return;
    }
    let digit = parseInt(input[len], 10);
    for (let i = 0; i < map[digit].length; i++) {
      let str = map[digit][i];
      letterComb(input, map, len - 1, str + res);
    }
  }
  letterComb(input, map, len, res);
  return result;
};

//console.log("result is", letterCombinations1("23456789"));
function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
const permuteNumber = function(nums) {
  if (nums === null || nums.length === 0) return [];
  let res = [];
  let arrLen = nums.length - 1;

  function genearteP(arr, left, right) {
    if (left === right) {
      console.log(arr);
      return;
    }
    for (let i = left; i <= right; i++) {
      swap(arr, left, i);
      genearteP(arr, left + 1, right);
      swap(arr, left, i);
    }
  }
  genearteP(nums, 0, arrLen);
};

console.log("permuteNumber numbrs", permuteNumber([1, 2, 3]));

const longestValidParentheses = function(string) {
  if (string === null) return 0;
  let str = string.split("");
  let len = str.length - 1;
  let stack = [-1];
  let max = 0;
  for (let i = 0; i <= len; i++) {
    if (str[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();

      if (stack.length === 0) {
        stack.push(i);
      }

      max = Math.max(max, i - stack[stack.length - 1]);
    }
  }

  return max;
};

console.log("longest valid paren len is", longestValidParentheses(")))))()"));

// two pointer technique...O(n) time and constant space
function LongestValidParenthesis(str) {
  if (str === null || str.length === 0) return 0;
  let len = str.length - 1;
  let left = 0;
  let right = 0;
  let max = 0;

  // travesre from left to right
  for (let i = 0; i < len; i++) {
    if (str[i] === "(") {
      left++;
    } else if (str[i] === ")") {
      right++;
    }
    if (left === right) {
      max = Math.max(max, 2 * right);
    } else if (left < right) {
      left = right = 0;
    }
  }
  // here we are reseting the both left right pointers
  left = right = 0;
  // travesre from right to left
  for (let j = len; j >= 0; j--) {
    if (str[j] === ")") {
      right++;
    } else if (str[j] == "(") {
      left++;
    }

    if (left === right) {
      max = Math.max(max, 2 * left);
    } else if (left > right) {
      left = right = 0;
    }
  }

  return max;
}

function sortIt(arr) {
  let left = 0;
  let mid = 0;
  let right = arr.length - 1;
  let i = 0;

  while (i <= right) {
    //debugger;
    if (arr[i] === 0) {
      swap(arr, i, left);
      left++;
      i++;
    } else if (arr[i] === 1) {
      i++;
    } else if (arr[i] === 2) {
      swap(arr, i, right);
      right--;
    }
  }
  return arr;
  function swap(arr, a, b) {
    let swap = arr[a];
    arr[a] = arr[b];
    arr[b] = swap;
  }
}
console.log("sort color", sortIt([1, 1, 1, 0, 0, 2, 2, 0, 0, 2, 1]));

const maxProductArray = arr => {
  let len = arr.length;
  let max = 1;
  let min = 1;
  let result = arr[0];
  for (let i = 0; i < len; i++) {
    if (arr[i] < 0) {
      let temp = max;
      max = min;
      min = temp;
    }
    max = Math.max(arr[i], arr[i] * max);
    min = Math.min(arr[i], arr[i] * min);

    result = Math.max(result, max);
  }
  return result;
};
console.log("result is", maxProductArray([3, -1, 4]));

const maxProductArry1 = arr => {
  let len = arr.length;
  let res = Number.MIN_VALUE;
  let mul = 1;
  for (let i = 0; i < len; i++) {
    mul = arr[i] * mul;
    res = Math.max(mul, res);
    mul = mul === 0 ? (mul = 1) : mul;
  }
  mul = 1;
  for (let i = len - 1; i >= 0; i--) {
    mul = arr[i] * mul;
    res = Math.max(mul, res);
    mul = mul === 0 ? (mul = 1) : mul;
  }
  return res;
};
console.log("max product second methods", maxProductArry1([3, -1, 4]));

// check is binary tree conatin max sum bst
var maxSumBST = function(root) {
  let maxsum = 0;

  function findMaxSumBST(node) {
    if (node === null) return [1, 0, -10000000, 1000000];

    let left = findMaxSumBST(node.left);
    let right = findMaxSumBST(node.right);
    let isBST =
      left[0] && right[0] && node.val > left[2] && node.val < right[3];
    let sum = node.val + left[1] + right[1];
    if (isBST) {
      maxsum = Math.max(maxsum, sum);
    }

    return [
      isBST ? 1 : 0,
      sum,
      Math.max(node.val, right[2]),
      Math.min(node.val, left[3])
    ];
  }
  findMaxSumBST(root);
  return maxsum;
};
