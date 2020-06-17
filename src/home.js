import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Algo from "./algos";
import "./practice/practice2";
const getDynamicPics = () => {
  return;
  return [1, 2, 4, 5, 6, 7, 8, 9, 4, 5, 6, 6, 7, 8, 8, 89, 2].map(
    (data, index) => {
      let imgSrc = `https://i.picsum.photos/id/97${index}/200/200.jpg`;
      return (
        <div className="card">
          <img src={imgSrc} draggable={true} />
        </div>
      );
    }
  );
};
let isMove = false;
const movempuse = e => {
  console.log("yes");
  // console.log("essfsfsd", e);
  // var ele = e.target;
  // let pos = ele.getBoundingClientRect();
  // console.log(pos);
  // //ele.style.position = "relative";
  // if (isMove) {
  //   ele.style.top = pos.x + "px";
  //   ele.style.left = pos.y + "px";
  // }
};
const moveImage = e => {
  console.log("e", e);
  isMove = true;

  var ele = e.target;
  ele.style.position = "relative";
  //let cpoyDat=e
};
let count = 0;
const postData1 = () => {
  for (let i = 0; i < 3000; i++) {
    console.log(count++);
    const data = fetch("http://localhost:3004/addcontact", {
      method: "POST"
    });
  }
};
const postData = () => {
  setInterval(() => {
    console.log(count++);
    const data = fetch("http://localhost:3004/addcontact", {
      method: "POST"
    });
  });
};
const postData2 = () => {
  console.log(count++);
  const data = fetch("http://localhost:3004/addcontact", {
    method: "POST"
  });
};

const randomData = async () => {
  console.log();
  const data = await fetch("http://localhost:3004/allcontact");
  const jsonData = await data.json();
  console.log(jsonData);
};
const Home = () => {
  const [age, setAge] = useState("");
  const allData = async () => {
    const data = await fetch("http://localhost:3004/all?age=" + age);
    const jsonData = await data.json();
    console.log(jsonData);
  };
  return (
    <div className="main-container">
      <div className="title" onMouseDown={moveImage}>
        <input
          type="text"
          placeholder="values"
          onChange={e => {
            setAge(e.target.value);
          }}
        />
        welcome
      </div>
      <input type="button" value="random" onClick={randomData} />
      <input type="button" value="post" onClick={postData} />
      <input type="button" value="all" onClick={allData} />
      <div className="title">make</div>
      <div className="title">add</div>
      <div className="title">add1</div>
      <div className="main">{getDynamicPics()}</div>
    </div>
  );
};

export default Home;

// function Node(data) {
//   this.data = data;
//   this.next = null;
// }
// function Linkedlist(data) {
//   this.root = new Node(data);
// }

// let list = new Linkedlist(1);
// list.root.next = new Node(2);
// list.root.next.next = new Node(3);
// list.root.next.next.next = new Node(4);
// list.root.next.next.next.next = new Node(5);
// list.root.next.next.next.next.next = new Node(6);
// list.root.next.next.next.next.next.next = new Node(7);
// list.root.next.next.next.next.next.next.next = new Node(8);
// list.root.next.next.next.next.next.next.next.next = new Node(9);
// list.root.next.next.next.next.next.next.next.next.next = new Node(10);
// // console.log("list initial is: ", list);
// let head;

// // matrix visit
// const matrix = [
//   ["a", "1", "1", "d"],
//   ["1", "0", "1", "h"],
//   ["1", "m", "1", "l"],
//   ["m", "1", "h", "p"]
// ];
// const matrix2 = [
//   ["a", "b", "c"],
//   ["e", "f", "g"],
//   ["i", "j", "k"]
// ];

// const arr1 = [1, 2, 8, 2, 1, 3];
// const arr2 = [8, 2, 1, 4, 7, 8];

// const longestCommonArray = () => {};

// //longestCommonArray();

// let time1 = [
//   { start: 2, end: 3 },
//   { start: 5, end: 8 },
//   { start: 10, end: 11 }
// ];
// let time2 = [
//   { start: 3, end: 4 },
//   { start: 6, end: 8 },
//   { start: 11, end: 12 }
// ];
// // 1 2 3 4 5 6 7 8 9 10 11 12
// let array1 = [];
// const make2Darray = arr => {
//   for (let i = 0; i < 5; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 5; j++) {
//       arr[i][j] = 0;
//     }
//   }
// };

// make2Darray(array1);
// console.log("2D array", array1);

// let interval = [
//   { start: 1, end: 2 },
//   { start: 3, end: 6 },
//   { start: 5, end: 10 },
//   { start: 8, end: 9 },
//   { start: 11, end: 15 },
//   { start: 12, end: 13 }
// ];

// let arr3 = [];
// let st = interval[0].start;
// let max = 0;
// const mergeInterval = arr => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr);
//     if (arr[i].end < arr[i + 1].start) {
//       console.log("pair", st, "and", arr[i].end);
//       st = arr[i + 1].start;
//     } else if (arr[i].end > arr[i + 1].end) {
//       arr[i + 1].end = arr[i].end;
//     }
//   }
//   console.log("pair", st, "and", arr[arr.length - 1].end);
// };
// //mergeInterval(interval);
// //console.log("arr3", arr3);

// let d1 = [1, 2, 3, 4, 5, 6];
// let d2 = [1, 2, 3, 4, 5, 6];
// let d3 = [1, 2, 3, 4, 5, 6];
// let sum = 8;

// const findtotalSUm = (sum, d1, d2) => {
//   let count = 0;
//   for (let i = 0; i < d1.length; i++) {
//     for (let j = 0; j < d2.length; j++) {
//       for (let k = 0; k < d3.length; k++) {
//         if (d1[i] + d2[j] + d3[k] === sum) {
//           console.log("sum is :", d1[i], "and", d2[j], "and", d3[k]);
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// };

// //console.log("count is", findtotalSUm(sum, d1, d2, d3));

// const matrix4 = [
//   [1, 2, 3, 4],
//   [5, 1, 2, 1],
//   [2, 2, 10, 2],
//   [1, 3, 2, 2]
// ];
// const checkSafe = (mat, i, j, row, col) => {
//   if (i >= 0 && i <= row && j >= 0 && j <= col) {
//     return true;
//   } else return false;
// };
// const minPathSumMatrix = (mat, i, j, row, col, sum) => {
//   if (i === row && j === col) {
//     console.log("sum is ", sum);

//     return;
//   }
//   if (checkSafe(mat, i, j, row, col)) {
//     sum = sum + mat[i][j];
//     minPathSumMatrix(mat, i, j + 1, row, col, sum);
//     minPathSumMatrix(mat, i + 1, j, row, col, sum);
//     //minPathSumMatrix(mat, i + 1, j + 1, row, col, sum);
//     sum = sum - mat[i][j];
//   }
// };
// //minPathSumMatrix(matrix4, 0, 0, 3, 3, 0);

// const str = "abcd";
// // a b c ab bc ba abc =>abc    (a,bc) (b, ac) (c bc)
// // a bc b ac c bc abc
// // a b c d ab ac ad abc bcd cda dab abcd =>abcd
// const makeAllPermutation = str => {};
// //makeAllPermutation(str);

// function NodeBst(data) {
//   this.data = data;
//   this.left = null;
//   this.right = null;
// }
// function BST(data) {
//   this.root = data;
//   this.left = null;
//   this.right = null;
// }
// //let newBst = new BST(1);
// // newBst.left = new NodeBst(2);
// // newBst.right = new NodeBst(3);
// // newBst.left.left = new NodeBst(4);
// // newBst.left.right = new NodeBst(5);
// // newBst.right.left = new NodeBst(6);
// // newBst.right.right = new NodeBst(7);
// //console.log("newst", newBst);
// const bstarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const maksBstfromArr = (arr, start, end) => {
//   // find middle node of array
//   if (start > end) {
//     return false;
//   }
//   let middle = parseInt((start + end) / 2);
//   console.log("middle", middle);
//   let middleNode = arr[middle];
//   console.log(middleNode, "middleNode");
//   let nodeData = new NodeBst(middleNode);
//   nodeData.left = maksBstfromArr(arr, start, middle - 1);
//   nodeData.right = maksBstfromArr(arr, middle + 1, end);
//   return nodeData;
// };
// //console.log(maksBstfromArr(bstarr, 0, bstarr.length - 1));

// // make plofill for promise

// let proms = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("34");
//     }, 2000);
//   });
// };

// const getData = async () => {
//   console.log("async function");
//   const data = proms();
//   data.then(res => {
//     //console.log("ree", res);
//   });
// };
// const normalDat = () => {
//   console.log("normal function");
// };
// getData().then(() => {
//   //console.log("deeded");
// });
// //normalDat();

// function PromiseDemo(fn) {
//   let state = 0;
//   let data;
//   let resolve = p => {
//     console.log("inside resolve", p);
//     data = p;
//     state = 1;
//   };
//   let reject = p => {
//     console.log("inside error", p);
//     data = p;
//     state = 2;
//   };
//   fn(resolve, reject);

//   return {
//     then: (success, error) => {
//       let inteval = setInterval(() => {
//         if (state === 1) {
//           success(data);
//           clearInterval(inteval);
//         }
//         if (state == 2) {
//           error(data);
//           clearInterval(inteval);
//         }
//       }, 1000);
//     }
//   };
// }

// // const demoP = new PromiseDemo((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("34");
// //   }, 2000);
// // });
// // demoP.then(
// //   res => {
// //     console.log("susseeeeeeeeeeeeee finally then", res);
// //   },
// //   err => {
// //     console.log("errrr", err);
// //   }
// // );

// // throtteling

// const reducerDemo = () => {
//   let arr = [1, 2, 3, 4, 5];
//   let temp = arr.filter(data => data !== 2);
//   let reducedvalue = temp.reduce((prev, current, index) => {
//     return prev + current;
//   }, 10);
//   console.log("filterdata", temp, reducedvalue);
// };
// //reducerDemo();

// // throtteling function  throttle(callback,1000)=>void
// // this is debounce example not throttling
// const throttle = (callback, time) => {
//   //console.log("throttel");
//   let timeout;
//   return () => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       callback();
//     }, time);
//   };
// };

// // string manipulation ab a b
// let globalCount = 0;
// const swapStr = (str, first, last) => {
//   return (
//     str.substr(0, first) +
//     str[last] +
//     str.substring(first + 1, last) +
//     str[first] +
//     str.substr(last + 1)
//   );
// };

// const stringManipulation = (str, start, right) => {
//
//   if (start === right) {
//     console.log("string permutations is :", str);
//   }
//   for (var i = 0; i <= right; i++) {
//     //console.log("start", str);
//     if (start !== i) {
//       str = swapStr(str, start, i);
//       console.log(str);
//     }
//     stringManipulation(str, start + 1, right);
//   }
// };

// //console.log(stringManipulation("abc", 0, 2));

// const rollDice1 = (face, roll, sum) => {
//   let count4 = 0;

//   if (roll === 0) {
//     return sum == 0 ? 1 : 0;
//   }
//   for (let i = 1; i <= face; i++) {
//     count4 = count4 + rollDice(face, roll - 1, sum - i);
//   }

//   return count4;
// };
// //console.log("count", rollDice(6, 1, 3));
// let sumooo = 0;
// let mapDice = new Map();
// const rollDice = (face, roll, sum) => {
//   //if (roll === 3) {
//   let totalWays = 0;
//   if (roll === 0) {
//     if (sum === 0) {
//       sumooo = sumooo + 1;
//       return 1;
//     } else {
//       return 0;
//     }
//   }
//   //}
//   let value = mapDice.get(roll + "" + sum);
//   if (value) {
//     console.log("in dppppppp 888000");
//     return value;
//   }
//   console.log("in looppppp");
//   for (let i = 1; i <= face; i++) {
//     totalWays = totalWays + rollDice(face, roll - 1, sum - i);
//   }
//   mapDice.set(roll + "" + sum, totalWays);
//   //return totalWays;
// };
// console.log("count is latest", rollDice(6, 3, 8, 0));
// console.log("total count is", mapDice);

// const maxProductArray = arr => {
//   if (arr || arr.length === 0) {
//     console.log("empty array");
//   }
//   const arrLEn = arr.length;
//   let maxsofar = 1;
//   let final = 0;
//   for (let i = 0; i < arrLEn; i++) {
//     if (arr[i]) {
//       maxsofar = maxsofar * arr[i];
//       if (final < maxsofar) {
//         final = maxsofar;
//       }
//     } else {
//       maxsofar = 1;
//     }
//   }
//   console.log("final", final, maxsofar);
// };
// maxProductArray([1, -2, -3, 0, 7, -8, -2]);

// // rain trapping water problem
// const smallestPostive = arr => {
//   const arrLen = arr.length;
//   if (!arrLen) {
//     console.log("empty arr");
//     return false;
//   }
//   // first ceate a axularry array of size max of provided array
//   let max = arr[0];
//   //console.log("max", max);
//   for (let i = 1; i < arrLen; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log("max is", max);

//   let auxArray = new Array(10);
//   console.log("aux array", auxArray);
//   for (let i = 0; i < arrLen; i++) {
//     if (arr[i] > 0) {
//       auxArray[arr[i]] = 1;
//     }
//   }
//   console.log("updated aux array", auxArray);
//   for (let i = 1; i < auxArray.length; i++) {
//     if (auxArray[i] !== 1) {
//       console.log("smallest missing elemnet is", i);
//       break;
//     }
//   }
// };

// smallestPostive([0, 10, 2, -10, 1, 5]);

// //1=>2=>3=>4=>5
// const reverseLinkedListInSize = (node, k) => {
//   console.log("nodeee", node.data);
//   let head;
//   let current = node;
//   let stack = [];
//   let count = 1;
//   while (current && k >= count) {
//     stack.push(current);

//     count++;
//     current = current.next;
//   }

//   while (stack && stack.length) {
//     if (!head) {
//       head = stack.pop();
//     } else {
//       while (head) {
//         head = head.next;
//       }
//       head.next = stack.pop();
//     }
//   }
//   console.log("stack", stack, head);
// };

// //console.log(reverseLinkedListInSize(list.root, 3));

// // masp list in recursive way

// const revisiveWya = (count, node) => {
//   if (count === 6) {
//     return node;
//   }
//   node.next = revisiveWya(count + 1, new Node(count));
//   return node;
// };
// let list2 = new Linkedlist(0);
// //console.log("revisiveWya", revisiveWya(1, list2.root));

// const findUniqeSubSet = (arr, sum, start, list) => {
//   if (sum < 0) {
//     return;
//   }
//   if (sum === 0) {
//     console.log("find triplete", list);
//     return;
//   }
//   for (let i = start; i < arr.length; i++) {
//     console.log("i", i, "arr[i]", arr[i]);
//     list.push(arr[i]);
//     findUniqeSubSet(arr, sum - arr[i], start, list);
//     console.log("back track", list);
//     list.pop();
//   }
// };
// //findUniqeSubSet([2, 3], 6, 1, []);

// function addArgument(a, b, c, d) {
//   //console.log(rest);
//   const arg = Array.prototype.slice.call(arguments);
//   console.log("arguments is", arg);
// }
// addArgument(1, 2, 3, 4);
// let obj1 = {
//   name: "vivek",
//   age: 30,
//   address: {
//     city: "gurgaon",
//     pin: 251203
//   }
// };

// function ageDiff(a, b) {
//   return a - b;
// }
// const leftAge = ageDiff.bind(null, 100);
// console.log(leftAge(10));
// console.log(leftAge(30));
// console.log(leftAge(40));

// addArgument.bind();

// // find sum array sum closest to 0

// const subArrayWithSumZro = (arr, size) => {
//   let slidingArr = [];
//   let sum = arr[0];
//   let slidingStart = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (sum === size) {
//       console.log("foundddd");
//       return;
//     }
//     sum += arr[i];
//     console.log("summmm", sum);
//     if (sum === size) {
//       console.log("found");
//     } else if (sum > size) {
//       while (sum > size) {
//         if (sum === size) {
//           console.log("found");
//         }
//         sum = sum - arr[slidingStart];
//         slidingStart++;
//       }
//     }
//   }
//   console.log("sliding start", slidingStart, "sum", sum);
// };
// //subArrayWithSumZro([1, 4, 20, 3, 10, 5], 33);

// // 1, 4, 20, 3, 10, 5
// //map=> 32 29 5

// // fisrt no repeating charachter

// const firstNoRepeatingChar = str => {
//   if (!str) {
//     return false;
//   }
//   const charMap = new Map();
//   for (let char of str) {
//     const valPrev = charMap.get(char);
//     if (valPrev) {
//       charMap.set(char, valPrev + 1);
//     } else charMap.set(char, 1);
//   }
//   console.log("finall char map is", charMap);

//   let minVal = Number.MAX_VALUE;
//   let nonRepeatingKey;
//   for (let [key, val] of charMap) {
//     console.log(key, "=", val);
//     if (val < minVal) {
//       minVal = val;
//       nonRepeatingKey = key;
//     }
//   }
//   if (minVal > 1) {
//     console.log("no char found");
//     return;
//   }
//   console.log("final min value is", nonRepeatingKey, "=", minVal);
//   //arraylist.map
// };
// //firstNoRepeatingChar("geeksforgeeks");

// // find first non repeating char in stream of char in constant time

// const nonRepeatingChar = str => {
//   if (!str) {
//     console.log("no string found");
//   }
//   let charArray = [];
//   //console.log("first non repated char is", charArray[0]);
//   // create a map
//   const charMap = new Map();
//   for (let i = 0; i < str.length; i++) {
//     console.log("reading char at ", str[i]);
//     if (charMap.get(str[i])) {
//       let index = charArray.indexOf(str[i]);
//       if (index > -1) {
//         charArray.splice(index, 1);
//       }
//     } else {
//       charMap.set(str[i], true);
//       charArray.push(str[i]);
//     }
//     console.log("first non repated char is", charArray[0]);
//   }
// };
// //console.log(nonRepeatingChar("geeksforgeeksandgeeksquizfor")); //geeksforgeeksandgeeksquizfor

// // find unique subset in arr with given sum [2,3,1]=>6 (3,3- 2 2 2, 2 3 1-  1 1 1 1 1 1 )

// const allsubSetRepeated = (arr, sum, startIndex, pathArr) => {
//   const arrLen = arr.length;
//   if (sum < 0) {
//     return false;
//   }
//   if (sum === 0) {
//     console.log("found solution", pathArr);
//     //return;
//   }
//   for (let i = startIndex; i < arrLen; i++) {
//     pathArr.push(arr[i]);
//     allsubSetRepeated(arr, sum - arr[i], i, pathArr);
//     pathArr.pop(arr[i]);
//   }
// };
// //allsubSetRepeated([2, 4, 3], 6, 0, []);

// // all sub set witout repation
// const allSubSetWithOutRepeate = (arr, sum, finalArr, start) => {
//   const arrLen = arr.length;

//   if (sum < 0) {
//     return false;
//   }
//   if (sum === 0) {
//     console.log("final sum here=", finalArr);
//   }
//   for (let i = start; i < arrLen; i++) {
//     finalArr.push(arr[i]);
//     allSubSetWithOutRepeate(arr, sum - arr[i], finalArr, i + 1);
//     finalArr.pop(arr[i]);
//   }
// };
// //allSubSetWithOutRepeate([1, 2, 3, 4, 5, 6], 6, [], 0);

// // oject defineproperty

// const cloneLinkedList = node => {
//   let current = node;
//   // here it is important to take dummy node and make refrence of it to another variable.. so that we can contiunously access the end of new list
//   let temp = new Node(1);
//   let copy = temp;
//   while (current) {
//     console.log("node clone", current.data);

//     temp.next = new Node(current.data);
//     temp = temp.next;

//     current = current.next;
//   }
//   console.log("clone list", copy.next);
// };

// //cloneLinkedList(list.root);

// // clone linkedlist in recuiveWya
// let head1;
// let tempNode = new Node(1);
// head1 = tempNode;
// const cloneLinkedListRecursive = (node, tempNode) => {
//   if (!node) {
//     return false;
//   }
//   tempNode.next = new Node(node.data);
//   tempNode = tempNode.next;
//   console.log(node.data);
//   cloneLinkedListRecursive(node.next, tempNode);
// };
// //cloneLinkedListRecursive(list.root, tempNode);
// //console.log("new cloned list in recursive way is :", head1);

// // insert a dummy same node in linkedlist

// const insertCopyNodeALllList = node => {
//   let current = node;
//   let rest;
//   while (current) {
//     rest = current.next;
//     current.next = new Node(current.data);
//     current.next.next = rest;
//     current = rest;
//   }
//   console.log("okk", node);
// };
// insertCopyNodeALllList(list.root);
// // clone a linked list with random pointer
// //
// function ListRandom() {
//   this.head = null;
// }
// function RandomNode(data) {
//   this.data = data;
//   this.next = null;
//   this.random = null;
// }

// let randomList = new ListRandom(1);
// randomList.next = new RandomNode(1);
// randomList.next.next = new RandomNode(2);
// randomList.next.next.next = new RandomNode(3);
// randomList.next.next.next.next = new RandomNode(4);
// randomList.next.next.next.next.next = new RandomNode(5);
// randomList.next.next.next.next.next.next = new RandomNode(6);
// randomList.next.next.next.next.next.next.next = new RandomNode(7);

// randomList.random = randomList.next.next.next; // 1 point to 3
// randomList.next.random = randomList.next; // 2 point to 1
// randomList.next.next.random = randomList.next.next.next.next; // 3 point to 4
// randomList.next.next.next.random = randomList.next.next.next.next; // 4 point to 4
// randomList.next.next.next.next.random = randomList.next.next; // 5 point to 2

// console.log("random list", randomList);

// const makeCopyWithRandomList = list => {
//   console.log("list", list);

//   // a copy node in between each node
//   let current = list;
//   let rest;
//   while (current) {
//     rest = current.next;
//     current.next = new RandomNode(current.data);
//     current.next.next = rest;
//     current = rest;
//   }
//   console.log("list with dulicate values", list);

//   // now link copy link to their respective node i.e    start.next.random=start.random.next
//   let startOriginal = list;

//   while (startOriginal && startOriginal.next) {
//     startOriginal.next.random = startOriginal.random
//       ? startOriginal.random.next
//       : startOriginal.random;
//     startOriginal = startOriginal.next.next;
//   }
//   console.log("startoriginal", list);

//   let original = list;
//   let final = list.next;
//   let duplicate = final;
//   while (original && duplicate) {
//     original.next = original.next ? original.next.next : original.next;
//     duplicate.next = duplicate.next ? duplicate.next.next : duplicate.next;

//     original = original.next;
//     duplicate = duplicate.next;
//   }
//   console.log("final dup", final);

//   return final;
// };
// makeCopyWithRandomList(randomList.next);
// // maximum path sum in bst

// function NodeBST(data) {
//   this.data = data;
//   this.left = null;
//   this.right = null;
// }
// function MakeBst() {}
// let tree = new MakeBst();
// tree.root = new NodeBST(10);
// tree.root.left = new NodeBST(2);
// tree.root.right = new NodeBST(10);
// tree.root.left.left = new NodeBST(20);
// tree.root.left.right = new NodeBST(1);
// tree.root.right.right = new NodeBST(25);
// tree.root.right.right.left = new NodeBST(3);
// tree.root.right.right.right = new NodeBST(4);

// //console.log("tree", tree);
// let maxVal = 0;
// const maxSumPathinBst = node => {
//   if (!node) {
//     return 0;
//   }
//   if (node.left === null && node.right === null) {
//     return node.data;
//   }
//   let left = maxSumPathinBst(node.left);
//   let right = maxSumPathinBst(node.right);

//   let upTraverse = Math.max(left, right) + node.data;
//   let rootMax = Math.max(upTraverse, left + right + node.data);

//   maxVal = Math.max(maxVal, rootMax);
//   return upTraverse;
// };
// maxSumPathinBst(tree.root);
// //console.log("maxval of bst is:", maxVal);

// // find maximum sum from root to leaf path in bst

// const maximumSumRootToLeafPath = (node, arr, sum, maxsum) => {
//   if (node === null) {
//     return;
//   }
//   sum += node.data;
//   arr.push(node.data);
//   if (node.left === null && node.right === null) {
//     if (maxsum < sum) {
//       maxsum = sum;
//     }
//     console.log("print path", arr, "and path sum is ", sum);
//   }

//   maximumSumRootToLeafPath(node.left, arr, sum, maxsum);
//   maximumSumRootToLeafPath(node.right, arr, sum, maxsum);
//   arr.pop();
//   return maxsum;
// };

// //console.log("max sum is", maximumSumRootToLeafPath(tree.root, [], 0, 0));

// // find count of sub array whos sum equal to given nnumber

// const subArrayCountSumGivenWithHasMAp = (arr, sum) => {
//   if (!arr) {
//     return;
//   }
//   let minVal = 0;
//   let prefixMap = new Map();
//   let subArrayCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     minVal += arr[i];
//     console.log(minVal);
//     let valuesDiff = minVal - sum;

//     if (prefixMap.get(valuesDiff) || valuesDiff === 0) {
//       subArrayCount++;
//     }
//     prefixMap.set(minVal, true);
//   }
//   console.log(
//     "here we have prefix sum array",
//     prefixMap,
//     "and count is",
//     subArrayCount
//   );
// };

//subArrayCountSumGivenWithHasMAp([1, 2, 3, 1, 4], 4);
