// import { func } from "prop-types";
import "./practice/practice";
// import { AvForward10 } from "material-ui/svg-icons";

// // const swapNumber = (arr, i, j) => {
// //   let temp = arr[i];
// //   arr[i] = arr[j];
// //   arr[j] = temp;
// // };
// // export const insertionSort = arr => {
// //   console.log("insertion algo", arr);
// //   for (let i = 1; i < arr.length; i++) {
// //     let currentNumber = arr[i];
// //     let j = i;
// //     while (currentNumber < arr[j - 1] && j >= 0) {
// //       let temp = arr[j];
// //       arr[j] = arr[j - 1];
// //       arr[j - 1] = temp;
// //       j--;
// //     }
// //   }
// //   console.log("sorted arry", arr);
// // };
// // //console.log(insertionSort([4, 2, 1, 7, 3, 5, 9, 4, 8]));

// // // make a heap of array
// // const heapify = (arr, n, i) => {
// //   let largest = i; // Initialize largest as root
// //   let l = 2 * i + 1; // left = 2*i + 1
// //   let r = 2 * i + 2; // right = 2*i + 2

// //   // If left child is larger than root
// //   if (arr[l] > arr[largest]) largest = l;

// //   // If right child is larger than largest so far
// //   if (arr[r] > arr[largest]) largest = r;

// //   // If largest is not root
// //   if (largest != i) {
// //     let swap = arr[i];
// //     arr[i] = arr[largest];
// //     arr[largest] = swap;

// //     // Recursively heapify the affected sub-tree
// //     heapify(arr, n, largest);
// //   }
// // };

// // const makeHeap1 = arr => {
// //   const arrLen = arr.length;
// //   const heafiyIndex = parseInt(arrLen / 2) - 1;
// //   for (let i = heafiyIndex; i >= 0; i--) {
// //     console.log("");
// //     heapify(arr, arrLen, i);
// //   }
// //   console.log("heapify arr", arr);
// // };
// // makeHeap1([2, 6, 3, 5, 8, 1, 7]);

// // function Node(data) {
// //   this.data = data;
// //   this.next = null;
// // }
// // function Linkedlist(data) {
// //   this.root = new Node(data);
// // }

// // let list = new Linkedlist(1);
// // list.root.next = new Node(2);
// // list.root.next.next = new Node(3);
// // list.root.next.next.next = new Node(4);
// // list.root.next.next.next.next = new Node(5);
// // list.root.next.next.next.next.next = new Node(6);
// // list.root.next.next.next.next.next.next = new Node(7);
// // list.root.next.next.next.next.next.next.next = new Node(8);
// // list.root.next.next.next.next.next.next.next.next = new Node(9);
// // list.root.next.next.next.next.next.next.next.next.next = new Node(10);
// // // 1->2->3->4->5->6>null
// // console.log("new linked list", list);

// // const segreagteOddEvenIndexList = node => {
// //   if (!node) {
// //     return;
// //   }
// //   let oddList = node;
// //   let evenlist = node.next;
// //   let copy = evenlist;
// //   while (oddList && evenlist) {
// //     oddList.next = oddList.next ? oddList.next.next : oddList.next;
// //     evenlist.next = evenlist.next ? evenlist.next.next : evenlist.next;

// //     oddList = oddList.next;
// //     evenlist = evenlist.next;
// //   }
// //   console.log("segregated list", node, "even list", copy);
// // };
// // segreagteOddEvenIndexList(list.root);

// // function NodeBST(data) {
// //   this.data = data;
// //   this.left = null;
// //   this.right = null;
// // }
// // function MakeBst() {}
// // let tree = new MakeBst();
// // tree.root = new NodeBST(1);
// // tree.root.left = new NodeBST(2);
// // tree.root.right = new NodeBST(3);
// // tree.root.left.left = new NodeBST(4);
// // tree.root.left.right = new NodeBST(5);
// // tree.root.right.left = new NodeBST(6);
// // tree.root.right.right = new NodeBST(7);

// // console.log("lca tree", tree);
// // let leftNode, rightnode;
// // const findLowstLCA = (node, a, b) => {
// //   //console.log("lca tree", node);

// //   if (node === null) {
// //     return null;
// //   }
// //   let temp;
// //   if (node.data === a) {
// //     leftNode = true;
// //     temp = node;
// //     //return node;
// //   }
// //   if (node.data === b) {
// //     rightnode = true;
// //     temp = node;
// //     // return node;
// //   }

// //   let left = findLowstLCA(node.left, a, b);
// //   let right = findLowstLCA(node.right, a, b);
// //   if (temp) {
// //     return node;
// //   }

// //   if (left !== null && right !== null) {
// //     return node;
// //   }
// //   return left ? left : right;
// // };
// // console.log("LCA is:", findLowstLCA(tree.root, 7, 8));

// // console.log("leftNode", leftNode, "rightNode", rightnode);
// // const minJumpToReachEnd = (arr, path) => {
// //   if (path === 0) {
// //     console.log("solution found");
// //     return;
// //   }
// //   for (let i = 0; i <= path; i++) {
// //     minJumpToReachEnd(arr, path - arr[i]);
// //   }
// // };
// // //minJumpToReachEnd([1, 3, 2, 0, 2], 4);

// // // calcaulate median of two sorted arraysconst isArray
// // const findMedian = arr => {
// //   let median = 0;
// //   let arrLen = arr.length;
// //   let isArrEven = arr % 2 === 0;
// //   if (arrLen > 1) {
// //     if (isArrEven) {
// //       median = arr[parseInt(arrLen / 2)] + arr[parseInt(arrLen / 2) - 1];
// //     } else {
// //       median = arr[parseInt(arrLen / 2)];
// //     }
// //   } else median = arr[0];
// //   return median;
// // };
// // const medianSortedArray = (arrA, arrB) => {
// //   let median;
// //   if (arrA.length <= 2) {
// //     console.log("arrA", arrA, "and", arrB);
// //     // [a b]  [c d]
// //     median = (Math.max(arrA[0], arrB[0]) + Math.min(arrA[1], arrB[1])) / 2;
// //     return median;
// //   }
// //   // now case is when both have equal number
// //   let m1 = findMedian(arrA);
// //   let m2 = findMedian(arrB);
// //   let m1index = arrA.indexOf(m1);
// //   let m2index = arrB.indexOf(m2);
// //   if (m1 < m2) {
// //     medianSortedArray(arrA.splice(m1index), arrB.splice(0, m2index + 1));
// //   } else {
// //     medianSortedArray(arrA.splice(0, m1index + 1), arrB.splice(m2index));
// //   }

// //   // console.log("medain is", median);
// //   //return median;
// // };
// // console.log("med", medianSortedArray([1, 12, 15, 26, 38], [2, 13, 17, 30, 45]));

// // // print bst in spiral order
// // const levelOrderBst = node => {
// //   if (node === null) {
// //     return false;
// //   }
// //   let nodeArr = [];
// //   nodeArr.push(node);

// //   while (nodeArr.length > 0) {
// //     //nodeArr.pop();

// //     let nodeArrSize = nodeArr.length;
// //     // if (nodeArrSize == 0) break;
// //     while (nodeArrSize > 0) {
// //       let temp = nodeArr.shift();
// //       console.log("side level ", temp);
// //       //console.log("node list", nodeArr);
// //       if (temp.left) nodeArr.push(temp.left);
// //       if (temp.right) nodeArr.push(temp.right);
// //       nodeArrSize--;
// //     }
// //     console.log("next levelßß");
// //   }
// // };
// // levelOrderBst(tree.root);

// // // write a cutome middleware
// // const add = a => {
// //   console.log("add running 1", a);
// //   return a + "ab";
// // };
// // const add3 = a => {
// //   console.log("add running 2", a);
// //   return a + "a5";
// // };
// // const add2 = a => {
// //   console.log("add running 3", a);
// //   return a + "2";
// // };
// // const App = function() {
// //   let nextArr = [];
// //   console.log("inside app");
// //   let req = function() {
// //     console.log("inside req function");

// //     return {
// //       send: () => {
// //         return "get it";
// //       },
// //       url: "hello/make"
// //     };
// //   };
// //   let res = function() {
// //     console.log("inside response function");

// //     return {
// //       send: () => {
// //         return "html";
// //       }
// //     };
// //   };
// //   return {
// //     use: function(next) {
// //       nextArr.push(next);
// //     },
// //     get: function(path, fn) {
// //       let pt = path;
// //       while (nextArr.length) {
// //         pt = nextArr.pop().call("", pt);
// //       }
// //       fn(res, req);
// //     }
// //   };
// // };

// // let app = App();

// // console.log("expres  app", app);
// // app.use(add);
// // app.use(add2);
// // app.use(add3);

// // app.get("hello", (req, res) => {
// //   console.log("reqqqqq", req().send());
// // });

// // // check if array represet binary heap

// // const isArrayHeap = (arr, i) => {
// //   let heapProp = parseInt(arr.length / 2) - 1;
// //   let left = 2 * i + 1;
// //   let right = 2 * i + 2;
// //   if (i > heapProp) {
// //     return true;
// //   }
// //   if (
// //     arr[i] > arr[left] &&
// //     arr[i] > (arr[right] ? arr[right] : -100) &&
// //     isArrayHeap(arr, i + 1)
// //   ) {
// //     return true;
// //   } else return false;
// // };
// // console.log("heafi is arr", isArrayHeap([90, 15, 10, 7, 12, 2, 2], 0));

// // const heapprocess = (arr, index) => {
// //   let root = arr[index];
// //   let left = arr[2 * index + 1];
// //   let right = arr[2 * index + 2];

// //   let maxIndex;
// //   maxIndex = left > right ? 2 * index + 1 : 2 * index + 2;

// //   if (root < arr[maxIndex]) {
// //     let temp = arr[maxIndex];
// //     arr[maxIndex] = arr[index];
// //     arr[index] = temp;
// //     heapprocess(arr, maxIndex);
// //   }
// // };
// // const makHeap = arr => {
// //   let index = parseInt(arr.length / 2) - 1;
// //   for (let i = index; i >= 0; i--) {
// //     heapprocess(arr, i);
// //   }
// //   console.log("make heap process", arr);
// // };
// // makHeap([2, 6, 3, 5, 8, 1, 7]);
// // //     2
// // //  6     3
// // //  5 8   1 7
// // let second = new Node(50);
// // let copy;
// // copy = second;
// // const makeLinkedListfromBst = node => {
// //   if (node === null) {
// //     return false;
// //   }
// //   if (node.left === null && node.right === null) {
// //     if (copy) {
// //       copy.next = new Node(node.data);
// //       copy = copy.next;
// //     }
// //     return false;
// //   }

// //   makeLinkedListfromBst(node.left);
// //   copy.next = new Node(node.data);
// //   copy = copy.next;

// //   makeLinkedListfromBst(node.right);
// //   //copy.next = new Node(node.data);
// //   //copy = copy.next;
// // };
// // makeLinkedListfromBst(tree.root);
// // console.log("copied list", tree.root, second, copy);

// // // quicksort algo
// // // 3 5 2 1 4 6 3 7 33 54 23

// // const quicksort = (arr, st, en) => {
// //   let pivot = parseInt((st + en) / 2);

// //   let start = st;
// //   let end = en;

// //   while (start <= end) {
// //     while (arr[start] < arr[pivot]) {
// //       start++;
// //     }
// //     while (arr[end] > arr[pivot]) {
// //       end--;
// //     }
// //     if (start <= end) {
// //       let temp = arr[start];
// //       arr[start] = arr[end];
// //       arr[end] = temp;
// //       start++;
// //       end--;
// //     }
// //   }

// //   if (st < end) {
// //     quicksort(arr, st, end);
// //   }
// //   if (start < en) {
// //     quicksort(arr, start, en);
// //   }
// //   console.log("sdfsdfsdfs", arr);
// // };
// // let arrQu = [3, 5, 22, 11, 4, 8, 21, 33, 22, 7, 93, 1];
// // console.log("quicksort arr is :", quicksort(arrQu, 0, arrQu.length - 1));
// // console.log("final arr is", arrQu);

// // // word break problem
// // let dictionary = [
// //   "i",
// //   "like",
// //   "sam",
// //   "sung",
// //   "samsung",
// //   "mobile",
// //   "ice",
// //   "cream",
// //   "icecream",
// //   "man",
// //   "go",
// //   "mango"
// // ];
// // let sent = "ilikemangosamsunglike";
// // let counterrrr = 0;
// // let wordMap = new Map();

// // const wordBreakProblem = (word, dict) => {
// //   console.log("count is", ++counterrrr);
// //   let sen = word.length;
// //   let str = word;
// //   if (word.length === 0) {
// //     return true;
// //   }
// //   for (let i = 0; i < sen; i++) {
// //     let subStrin = str.substring(0, i + 1);
// //     if (wordMap.get(str.substring(i + 1))) {
// //       return true;
// //     }
// //     if (
// //       dict.indexOf(subStrin) > -1 &&
// //       wordBreakProblem(str.substring(i + 1), dict)
// //     ) {
// //       wordMap.set(subStrin, true);
// //       // console.log("count is", ++counterrrr);
// //       console.log("index found at this location", i, "and", subStrin);
// //       return true;
// //     }
// //     //console.log(subStrin);
// //   }
// //   return false;
// // };
// // console.log("word break problem", wordBreakProblem(sent, dictionary), wordMap);

// // // make a timer
// // const addTimer = () => {
// //   let button = document.createElement("input");
// //   button.type = "button";
// //   button.value = "add";

// //   button.addEventListener("click", () => {
// //     new Timer(0);
// //   });
// //   document.body.appendChild(button);
// // };
// // addTimer();

// // Timer.prototype.startTimer = function(node) {
// //   this.timeId = window.setInterval(() => {
// //     this.timer.innerText = this.count++;
// //   }, 100);
// // };
// // Timer.prototype.stopTimer = function(node) {
// //   window.clearInterval(this.timeId);
// // };
// // function Timer(counter) {
// //   this.timeId = "";
// //   this.count = counter;
// //   this.timer = document.createElement("div");

// //   this.timer.innerText = 0;

// //   let button1 = document.createElement("input");
// //   button1.type = "button";
// //   button1.value = "Start Timer";
// //   button1.addEventListener("click", () => {
// //     this.startTimer();
// //   });
// //   let button2 = document.createElement("input");
// //   button2.type = "button";
// //   button2.value = "Stop Timer";
// //   button2.addEventListener("click", () => {
// //     this.stopTimer();
// //   });
// //   document.body.appendChild(this.timer);
// //   document.body.appendChild(button1);

// //   document.body.appendChild(button2);
// // }
// // let temp4 = {
// //   vivek: 25,
// //   kapil: 12
// // };
// // temp4[Symbol.iterator] = function() {
// //   let count = -1;
// //   return {
// //     next: () => {
// //       count++;
// //       let key = Object.keys(temp4);
// //       if (count > key.length) {
// //         return {
// //           done: true
// //         };
// //       }
// //       return {
// //         value: temp4[key[count]],
// //         done: false
// //       };
// //     }
// //   };
// // };
// // for (let i of temp4) {
// //   console.log("dfsfrgtrgrtgrtgtr", i);
// // }

// // /// make 2d matrix of string

// // const wordbreakDP = (str, dict) => {
// //   // create a matrix of str * str length
// //   let dpTable = [];
// //   if (!str) {
// //     return false;
// //   }
// //   let strLen = str.length;
// //   for (let i = 0; i < strLen; i++) {
// //     dpTable[i] = [];
// //     for (let j = 0; j < strLen; j++) {
// //       dpTable[i][j] = 0;
// //     }
// //   }

// //   for (let i = 0; i < strLen; i++) {
// //     for (let j = i + 1; j < strLen; j++) {
// //       if (dict.indexOf(str.substring(i, j)) > -1) {
// //         console.log("str.substring(i, j)", str.substring(i, j));
// //         dpTable[i][j - 1] = "T";
// //       }
// //     }
// //   }

// //   console.log("here our dptable", dpTable);
// // };
// // wordbreakDP("ilikesamsung", dictionary);

// // const mergeTwoSortedArr = (arr1, arr2) => {
// //   let mergedArr = [];
// //   let arr1Len = arr1.length;
// //   let arr2Len = arr2.length;

// //   let i = 0,
// //     j = 0;

// //   while (j < arr2Len || i < arr1Len) {
// //     if (arr1[i] < arr2[j]) {
// //       mergedArr.push(arr1[i]);
// //       i++;
// //     } else {
// //       mergedArr.push(arr2[j]);
// //       j++;
// //     }
// //   }
// //   console.log("mergedArr", mergedArr);
// // };
// // //mergeTwoSortedArr([2, 4, 7, 8, 9, 10, 11, 12, 70, 71, 72, 73], [1, 50, 54, 66]);
// // //[1 2 4 7 9 ]

// // // find a elemtn in sorted rotated arr and return index
// // const pivotElemt = (arr, low, high) => {
// //   if (arr.length === 0) {
// //     return false;
// //   }
// //   if (arr.length === 1) {
// //     return arr[0];
// //   }
// //   let i = low;
// //   let j = high;
// //   let pivot = parseInt((low + high) / 2);

// //   if (pivot === 0) {
// //     return pivot;
// //   }
// //   if (arr[pivot] < arr[pivot + 1] && arr[pivot] > arr[pivot - 1]) {
// //     return pivotElemt(arr, i + 1, j);
// //   } else if (arr[pivot] > arr[pivot + 1] && arr[pivot] > arr[pivot - 1]) {
// //     return pivot;
// //   } else if (arr[pivot] < arr[pivot + 1] && arr[pivot] < arr[pivot - 1]) {
// //     return pivotElemt(arr, i, j - 1);
// //   }
// // };

// // let arr34 = [9, 12, 23, 34, 45, 56, 1, 2, 6];
// // const binarySearch = (arr, low, high, item) => {
// //   let mid = Math.floor((low + high) / 2);
// //   if (low > high) {
// //     return;
// //   }
// //   if (arr[mid] === item) {
// //     console.log("in side boary searchhhh", mid);
// //     return mid;
// //   }
// //   if (arr[mid] > item) {
// //     binarySearch(arr, low, mid - 1, item);
// //   } else binarySearch(arr, mid + 1, high, item);

// //   return mid;
// // };
// // console.log("binary serach", binarySearch(arr34, 0, arr34.length - 1, 1));

// // let arr345 = [9, 12, 23, 34, 45, 56, 1, 2, 6];
// // const findElemSortedRotated = (arr, low, high, item) => {
// //   let mid = Math.floor((low + high) / 2);
// //   if (arr[mid] === item) {
// //     return mid;
// //   }
// //   if (low > high) {
// //     return -1;
// //   }
// //   if (arr[mid] >= arr[low]) {
// //     if (arr[low] <= item && item <= arr[mid]) {
// //       return findElemSortedRotated(arr, low, mid - 1, item);
// //     } else {
// //       return findElemSortedRotated(arr, mid + 1, high, item);
// //     }
// //   } else {
// //     if (arr[mid] <= item && arr[high] >= item) {
// //       return findElemSortedRotated(arr, mid + 1, high, item);
// //     } else {
// //       return findElemSortedRotated(arr, low, mid - 1, item);
// //     }
// //   }
// //   return mid;
// // };
// // console.log(
// //   "hellossss",
// //   findElemSortedRotated(arr345, 0, arr345.length - 1, 2)
// // );

// // //  merge two sorted array of diff size

// // const mergeSortedDiffSizeArr = (arr1, arr2) => {
// //   let mergedArr = [];
// //   let arr1Len = arr1.length;
// //   let arr2Len = arr2.length;
// //   if (arr1Len === 0) {
// //     return arr2;
// //   }
// //   if (arr2Len === 0) {
// //     return arr1;
// //   }
// //   let i = 0;
// //   let j = 0;
// //   while (i < arr1Len && j < arr2Len) {
// //     if (arr1[i] < arr2[j]) {
// //       mergedArr.push(arr1[i]);
// //       i++;
// //     } else {
// //       mergedArr.push(arr2[j]);
// //       j++;
// //     }
// //   }

// //   while (i < arr1Len) {
// //     mergedArr.push(arr1[i]);
// //     i++;
// //   }
// //   while (j < arr2Len) {
// //     mergedArr.push(arr2[j]);
// //     j++;
// //   }
// //   //console.log("final merged arra", mergedArr);
// //   return mergedArr;
// // };
// // console.log(
// //   "final merged arr",
// //   mergeSortedDiffSizeArr(
// //     [-1, 0, 1, 2, 3, 4, 34, 45, 56, 67, 78],
// //     [-2, -1, 0, 1, 2]
// //   )
// // );

// // const mergeSort = arr => {
// //   if (arr.length === 1) {
// //     return arr;
// //   }

// //   let low = 0;
// //   let high = arr.length - 1;
// //   let mid = Math.floor((low + high) / 2);
// //   let leftArr = mergeSort(arr.slice(0, mid + 1));
// //   let rightArr = mergeSort(arr.slice(mid + 1));

// //   return mergeSortedDiffSizeArr(leftArr, rightArr);
// // };

// // console.log("mergesort is", mergeSort([3, 1, 2, 5, 3, 2, 7, 4, 8]));

// // // implement heap sort algorithm

// // const heapify2 = (arr, index, len) => {
// //   let top = index;
// //   let left = 2 * index + 1;
// //   let right = 2 * index + 2;
// //   let max = top;
// //   if (len > left && arr[left] > arr[top]) {
// //     max = left;
// //   }
// //   if (len > right && arr[right] > arr[max]) {
// //     max = right;
// //   }
// //   if (max != top) {
// //     let temp = arr[top];
// //     arr[top] = arr[max];
// //     arr[max] = temp;
// //     heapify2(arr, max, len);
// //   }
// // };
// // let heapArr2 = [3, 1, 2, 6, 4, 7, 8, 9];

// // // sort the array with heapsort algorithm
// // const heapSort = arr => {
// //   for (let i = Math.floor(arr.length - 2 / 2); i >= 0; i--) {
// //     heapify2(heapArr2, i, arr.length);
// //   }

// //   for (let j = arr.length - 1; j >= 0; j--) {
// //     // let temp = arr[0];
// //     // arr[0] = arr[j];
// //     // arr[j] = temp;
// //     // heapify2(arr, 0, j);
// //   }
// // };
// // console.log("second heapify", heapSort(heapArr2), heapArr2);

// // // push an item in heap and relign the heapify
// // //9, 6, 8, 3, 4, 7, 2, 1
// // let newArryforHEapAdd = [];
// // const addItemTo = (heap, item) => {
// //
// //   heap.unshift(item);

// //   // let index = Math.floor((newArryforHEapAdd.length - 2) / 2);
// //   heapify2(heap, 0, heap.length);

// //   console.log("newArryforHEapAdd", newArryforHEapAdd);
// // };

// // const addItemToheap = addItemTo.bind("", newArryforHEapAdd);

// // const removeItemTo = (heap, item) => {
// //
// //   let temp = heap[0];
// //   heap[0] = heap[heap.length - 1];
// //   heap[heap.length - 1] = temp;
// //   //heap.unshift(item);
// //   heap.length = heap.length - 1;
// //   // let index = Math.floor((newArryforHEapAdd.length - 2) / 2);
// //   heapify2(heap, 0, heap.length - 2);

// //   console.log("newArryforHEapAdd", newArryforHEapAdd);
// // };

// // const removeItemToheap = removeItemTo.bind("", newArryforHEapAdd);
// // addItemToheap(1);
// // addItemToheap(9);
// // addItemToheap(5);
// // addItemToheap(3);
// // addItemToheap(6);
// // addItemToheap(4);
// // addItemToheap(11);
// // addItemToheap(2);
// // addItemToheap(15);
// // addItemToheap(2);

// // removeItemToheap();
// // // medain of sorted array of stream

// // let arrayStream = [5, 15, 10, 20, 3];
// // const sortedMedianStream = arr => {
// //   let heapLow = [];
// //   let heapHigh = [];
// //   let medain = 0;
// //   let i = 0;

// //   while (i < arr.length) {
// //     let hl = heapLow.length;
// //     let hhl = heapHigh.length;
// //     if (hl > hhl) {
// //       if (arr[i] > medain) {
// //         //let elem = heapLow.pop();

// //         addItemTo(heapHigh, heapLow[0]);
// //         removeItemToheap(heapLow);
// //         addItemTo(heapLow, arr[i]);
// //       } else {
// //         addItemTo(heapHigh, arr[i]);
// //       }
// //     } else if (hl < hhl) {
// //       if (arr[i] > medain) {
// //         addItemTo(heapLow, arr[i]);
// //       } else {
// //         //let elem = heapHigh.pop();
// //         addItemTo(heapLow, heapHigh[0]);
// //         removeItemToheap(heapHigh);
// //         addItemTo(heapHigh, arr[i]);
// //       }
// //     } else {
// //       if (arr[i] > medain) {
// //         addItemTo(heapLow, arr[i]);
// //       } else {
// //         addItemTo(heapHigh, arr[i]);
// //       }
// //     }
// //     i++;
// //
// //     if (heapLow.length === heapHigh.length) {
// //       medain = Math.floor((heapLow[0] + heapHigh[0]) / 2);
// //       console.log("meidan is", medain);
// //     } else {
// //       let bigHeap = heapLow.length > heapHigh.length ? heapLow : heapHigh;
// //       medain = bigHeap[0];
// //       console.log("medain is", bigHeap[0]);
// //     }
// //   }
// //   // console.log("stream heaplow", heapLow, "heaphigh", heapHigh);
// // };
// // sortedMedianStream(arrayStream);

// // const recursiveDemo = (arr, n, sum, target) => {};
// // console.log(
// //   "recursiveDemo([3, 4, 4, 5, 1, 2], 6, 8);",
// //   recursiveDemo([3, 4, 4, 5, 1, 2, 9], 7, 108, 0)
// // );
// // // elm ===sum retur 0

// // function Animate() {
// //   let elem = document.createElement("input");
// //   elem.type = "button";
// //   elem.value = "animate";
// //   document.body.appendChild(elem);

// //   let counter = document.createElement("div");
// //   counter.innerHTML = `<div id="someelement" class="block">rtrtr </div>`;
// //   document.body.appendChild(counter);
// //   // 1s =>60ps
// //   let max = 5;
// //   let time = 5000;
// //   let count = 0;
// //   //5 =>1000
// //   //1ms   1000/5000
// //   //16ms mai 1000*16/5000
// //   // s=d/t
// //   let startTime = new Date();
// //   let timer = setInterval(() => {
// //     let elem = document.getElementById("someelement");
// //     let progress = new Date() - startTime;

// //
// //     console.log("ffrefrefgr", (progress * max) / time, "progress", progress);
// //     //elem.style.left = Math.floor((progress * max) / time) + "px";
// //     elem.innerHTML = Math.min((progress * max) / time, max);
// //     console.log("timeLapse", "count", count++);
// //     if (progress >= time) {
// //       clearInterval(timer);
// //     }
// //   }, 1000);
// // }
// // Animate();

// // function animateValue2(start, end, duration) {
// //   let elem = document.createElement("input");
// //   elem.type = "button";
// //   elem.value = "animate";
// //   document.body.appendChild(elem);

// //   let counter = document.createElement("div");
// //   counter.innerHTML = 2;
// //   document.body.appendChild(counter);
// //   let startTimestamp = null;
// //   let time = new Date();
// //   const step = timestamp => {
// //     // console.log("timelaps", timestamp, "startTimestamp", startTimestamp);
// //     if (!startTimestamp) startTimestamp = timestamp;
// //     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
// //     console.log("progress", duration - timestamp);
// //     counter.innerHTML = Math.floor(progress * end);
// //     if (progress < 1) {
// //       window.requestAnimationFrame(step);
// //     }
// //   };
// //   window.requestAnimationFrame(step);
// // }
// // //animateValue2(0, 1000000, 5000);

// // function FindLongestCommon(...args) {
// //   //console.log("args", args);
// //   let arrs = args;
// //   let argument = Array.prototype.slice.call(arguments);
// //   console.log("argument", argument);
// //   // let combinedArr = [arr1, arr2, arr3];
// //   let newArr = [];
// //   for (let i = 0; i < arrs[0].length; i++) {
// //     newArr[i] = [];
// //     for (let j = 0; j < arrs.length; j++) {
// //       console.log("combinedArr[i];", arrs[j][i]);
// //       newArr[i].push(arrs[j][i]);
// //     }
// //   }

// //   let items = ["a", "abcds", "dfdfd", "rtertete"].map((data, index) => {
// //     console.log("data", data, "index", index);
// //     return [index, index, data];
// //   });

// //   let moreItems = ["2", "sdadada", "fghfghfghfg", "rtyeryeryer"].filter(
// //     (data, index) => {
// //       return data.length > 10;
// //     }
// //   );

// //   let reduceItems = ["a", "bttt", "c", "d"].reduce(
// //     (acc, data, index, extra) => {
// //       console.log("accsdsdsds", acc, "data", data, "accaccaccaccaccacc", acc);
// //
// //       if (acc.length > data.length) {
// //         return acc;
// //       } else {
// //         return data.length;
// //       }
// //     },
// //     "z"
// //   );
// //   console.log(
// //     "newArr",
// //     newArr,
// //     "items",
// //     items,
// //     "moreItems",
// //     moreItems,
// //     "reduceItems",
// //     reduceItems
// //   );
// // }
// // FindLongestCommon(
// //   [1, 2, 3],
// //   ["a", "b", "c"],
// //   ["A", "B", "C"],
// //   ["n", "d", "y"],
// //   ["nn", "dd", "yy"]
// // );

// // // find lcs sof two string

// // const LCSstr = (str1, str2, m, n) => {
// //   if (m === 0 || n === 0) {
// //     return 0;
// //   }

// //   if (str1[m] === str2[n]) {
// //     return 1 + LCSstr(str1, str2, m - 1, n - 1);
// //   } else {
// //     return Math.max(LCSstr(str1, str2, m, n - 1), LCSstr(str1, str2, m, n - 1));
// //   }
// // };
// // console.log("lcs longest", LCSstr("AGGTABY", "GXTXAYBY", 7, 8));

// // // coin chnage problem

// // const countNUmberOFpattern = (str, match, m, n) => {
// //   let count = 0;
// //   if (m == 0 && n == 0) return 1;
// //   if (m == 0) return 0;
// //   if (str[m - 1] === match[n - 1]) {
// //     count =
// //       countNUmberOFpattern(str, match, m - 1, n - 1) +
// //       countNUmberOFpattern(str, match, m - 1, n);
// //   } else {
// //     count = countNUmberOFpattern(str, match, m - 1, n);
// //   }
// //   return count;
// // };
// // console.log(
// //   "countNUmberOFpattern",
// //   countNUmberOFpattern("subsequence", "sue", 11, 3)
// // );

// // // count dice throw problem

// const diceThrowCount = (arr, sum, dice, n) => {
//   if (sum === 0) {
//     if (dice === 0) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
//   if (sum < 0) {
//     return 0;
//   }
//   if (n < 0) {
//     return 0;
//   }
//   return (
//     diceThrowCount(arr, sum - arr[n - 1], dice - 1, n - 1) +
//     diceThrowCount(arr, sum, dice - 2, n - 1) +
//     diceThrowCount(arr, sum, dice - 3, n - 1)
//   );
// };
// console.log(
//   "diceThrowCount(6, 8, 3);",
//   diceThrowCount([1, 2, 3, 4, 5, 6], 8, 3, 6)
// );

// // find pattern subsequence in string  recurive approache
// const patternSubSequence = (str, match, m, n) => {
//   console.log("subsequence");
//   if (m === 0 && n === 0) {
//     return 1;
//   }
//   if (m === 0) {
//     return 0;
//   }
//   let count = 0;
//   if (str[m - 1] === match[n - 1]) {
//     count = count + patternSubSequence(str, match, m - 1, n - 1);
//   }
//   count = count + patternSubSequence(str, match, m - 1, n);

//   return count;
// };
// console.log("pattern", patternSubSequence("subsequence", "sue", 11, 3));

// const patternSubSequenceWithDP = (str, match, m, n) => {
//   let patternMatchT = new Array(m + 1);
//
//   //we found solution then and pattern match string become zero
//   for (let i = 0; i < patternMatchT.length; i++) {
//     patternMatchT[i] = new Array(n + 1);
//   }

//   // let patternMatchT = new Array(m + 1);

//   for (let i = 0; i <= m; i++) {
//     for (let j = 0; j <= n; j++) {
//       patternMatchT[i][j] = 0;
//       patternMatchT[i][0] = 1;
//     }
//   }

//   console.log(patternMatchT);

//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       console.log("subsequence33");
//       if (str[i - 1] === match[j - 1]) {
//         patternMatchT[i][j] =
//           patternMatchT[i - 1][j - 1] + patternMatchT[i - 1][j];
//       } else {
//         patternMatchT[i][j] = patternMatchT[i - 1][j];
//       }
//     }
//   }
//   console.log("pattern ", "patternMatchT value", patternMatchT[m][n]);
// };
// patternSubSequenceWithDP("subsequence", "sue", 11, 3);

// // polufill for reduce

// Function.prototype.bind1 = function(context) {
//   let fn = this;
//   let arg = Array.prototype.slice.call(arguments, 1);
//   if (typeof this !== "function") {
//     return "not";
//   }
//   return function() {
//     let args = Array.prototype.slice.call(arguments);
//     let finalArgs = args.concat(arg);
//     return fn.apply(context, finalArgs);
//   };
// };

// let obj = {
//   ok: 23
// };
// function temp(a, b, c, d) {
//   return this.ok + a + b + c + d;
// }

// const db = temp.bind1(obj, 3, 4);

// console.log("bind example", db(5, 6));

// Function.prototype.call1 = function() {
//   let fn = this;
//   let args = Array.prototype.slice.call(arguments, 1);
//   let cntx = Array.prototype.slice.call(arguments, 0, 1);

//   cntx[0][fn] = fn;

//   return cntx[0][fn](...args);
// };
// const dataApply = temp.call1(obj, 1, 2, 3, 4);
// console.log("dataApply11111", dataApply);

// Array.prototype.reduce1 = function(fn, context) {
//   let arr = this;
//   let acc = arr[0];
//   let data = 0;
//   //   arr.forEach((data, index) => {
//   //     acc = fn.call(context, acc, data, index, arr);
//   //   });
//   //   return acc;
//   // };
//   for (let i = 1; i < arr.length; i++) {
//     acc = fn.call(context, acc, arr[i], i, arr);
//   }
//   return acc;
// };
// const dataReduce = [1, 2, 3, 4].reduce1((acc, data, index, arr) => {
//   console.log("acc", acc, "data", data, "index", index, "arr", arr);
//   return acc + data;
// });
// console.log("dataReduce", dataReduce);

// let countArray = ["one", "two", "three", "four"];
// countArray.forEach((data, index, arr) => {
//   if (data === "two") {
//     countArray.shift(data);
//   }
//   console.log("foreach data", data, "index", index, countArray);
// });

// const nested = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11, 12]]], 13, 14]];

// const flattenArray = arr => {
//   let result = [];
//   arr.forEach(data => {
//     if (Array.isArray(data)) {
//       result.push(...flattenArray(data));
//     } else {
//       result.push(data);
//     }
//   });
//   return result;
// };
// //console.log("flatted array", flattenArray(nested));

// const flattenArrayWithReduce = arr => {
//   return arr.reduce((acc, item) => {
//     return acc.concat(
//       Array.isArray(item) ? flattenArrayWithReduce(item) : item
//     );
//   }, []);
// };
// console.log("flatted array", flattenArrayWithReduce(nested));
// //flattenArrayWithReduce(nested);
// // copy an objet in javscript

// let objSource = {
//   name: "vivek",
//   age: 30
// };

// let obj2 = {
//   name: "kapil",
//   age: 31,
//   city: "mzn",
//   address: {
//     country: "india",
//     city: "bbobobob"
//   }
// };

// // let lastObj = { ...objSource, ...obj2 };  // or can use assign    Object.assign(objSource, objSource, obj2);
// // obj2.name = "ghhhhh";
// // obj2.address.country = "nm";
// // console.log("lastobj", lastObj, "objSource", obj2);

// // deep copying an objet

// const DeepCopyObj = obj => {
//   let copied = {};

//   for (let prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//       if (Object.prototype.toString.call(obj[prop]) === "[object Object]") {
//         copied[prop] = DeepCopyObj(obj[prop]);
//       } else {
//         // here copying values to object
//         copied[prop] = obj[prop];
//       }
//     }
//   }
//   return copied;
// };
// console.log("DeepCopyObj", DeepCopyObj(obj2));

// // minimum jupm require to reach end

// const minJumpEnd = arr => {
//   let arrLen = arr.length;
//   let tempArr = [0, 10, 10, 10, 10, 10, 10, 10, 10, 10];

//   for (let i = 1; i < arrLen; i++) {
//     for (let j = 0; j < i; j++) {
//       if (j + arr[j] >= i) {
//         tempArr[i] = Math.min(tempArr[i], tempArr[j] + 1);
//       }
//     }
//   }

//   console.log("tempArr", tempArr);
// };
// minJumpEnd([1, 2, 2, 3, 2, 2, 1, 0, 9, 5]);
// //[0,]

// //find next greater element in array

// const nextGreaterElement = arr => {
//   if (!arr) {
//     console.log("no arr found");
//     return;
//   }
//   if (Object.prototype.toString.call(arr) !== "[object Array]") {
//     console.log("no array");
//     return;
//   }
//   let arrLen = arr.length;
//   let stack = [];
//   stack[0] = arr[0];

//   for (let i = 1; i < arrLen; i++) {
//
//     if (arr[i] < stack[stack.length - 1]) {
//       stack.push(arr[i]);
//     } else {
//       while (stack[stack.length - 1] <= arr[i]) {
//         // let poped = stack.pop();
//         console.log("next greater element of ", stack.pop(), " is ", arr[i]);
//       }
//     }

//     // here we pushing element again if as stack is empty here....so continue again same operations
//     if (stack.length === 0) {
//       stack.push(arr[i]);
//     }
//   }
//   stack.forEach(data => {
//     console.log("not item for this", data);
//   });
//   // while (stack.length >= 0) {
//   //   console.log("no next item", stack.pop());
//   // }
// };
// nextGreaterElement([8, 2, 1, 4, 5, 10, 6, 4]);

// // rod cutting dynamic problem

// const rodCutting = () => {
//   let roadLen = 5;

//   let roadArr = [1, 2, 3, 4];
//   let rodVal = [2, 5, 7, 8];

//   let DPT = [
//     [0, 2, 4, 6, 8, 10],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0]
//   ];

//   // initallly fill the array
//   for (let i = 1; i < roadArr.length; i++) {
//     //DPT[i] = [];
//     //DPT[i] = new Array(roadLen + 1);
//     for (let j = 0; j <= roadLen; j++) {
//       // DPT[i][j] = 0;
//       // DPT[0][j] = rodVal[j];
//     }
//   }
//
//   // now fill the DPT table with rest values

//   for (let i = 1; i < roadArr.length; i++) {
//     for (let j = 1; j <= roadLen; j++) {
//       if (roadArr[i] <= j) {
//         DPT[i][j] = Math.max(DPT[i - 1][j], rodVal[i] + DPT[i][j - roadArr[i]]);
//       } else {
//         DPT[i][j] = DPT[i - 1][j];
//       }
//     }
//   }
//   console.log("rod cutting problem", DPT);
// };
// rodCutting();
