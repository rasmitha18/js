function findLarge(arr) {
    let max=arr[0];
    for(let i=0;i<arr.length;i++) {
        if(max<arr[i]) {
        max=arr[i];
        
    }
}
return max;
}
console.log(findLarge([12,22,23]));
console.log(findLarge([3, 7, 2, 9, 4])); 
console.log(findLarge([-5, -1, -10]));   
console.log(findLarge([42]));            