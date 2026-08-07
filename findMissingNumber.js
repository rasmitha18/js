function findMissingNumber(arr) {
  let n=arr.length;
  let actualSum=0;
 let  expectedSum = (n+1) * (n+2) / 2;
 for(let i=0;i<n;i++){
 actualSum +=arr[i];

 }
return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5])); // 3
console.log(findMissingNumber([2, 3, 1, 5])); // 4
console.log(findMissingNumber([1]));           // 2