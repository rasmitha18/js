function myMap(arr, callback) {
let result=[];
for(let i=0;i<arr.length;i++) {
  let transformed=callback(arr[i]);
  result.push(arr[i]);
}
return result;


}

function myFilter(arr, callback) {
  let result=[];
  for(let i=0;i<arr.length;i++) {
    if(callback(arr[i])){
      result.push(arr[i]);
    }
   
  }
   return result;
}

function myReduce(arr, callback, initialValue) {
let acc=initialValue;
for(let i=0;i<arr.length;i++) {
  acc = callback(acc, arr[i]);
}
return acc;
}

console.log(myMap([1, 2, 3], x => x * 2));             // [2, 4, 6]
console.log(myFilter([1, 2, 3, 4], x => x % 2 === 0));  // [2, 4]
console.log(myReduce([1, 2, 3, 4], (acc, x) => acc + x, 0)); // 10