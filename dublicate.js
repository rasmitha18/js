function dublicate(arr) {
    let result =[];
    for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(dublicate([12,24,12,4,55,12]));