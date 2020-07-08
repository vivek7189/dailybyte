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

const removeDuplicateSortedArray = arr => {
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

  console.log(arr, "count is", arrLen - j);
};

console.log("unique array is", removeDuplicateSortedArray([0, 1, 2, 2, 3]));
