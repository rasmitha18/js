function arrayLevel(arr) {
    let result=[];
    for(let i=0;i<arr.length;i++) {
        if(Array.isArray(arr[i])) {
            result.push(...arr[i]);
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(arrayLevel([12,24,[12,44]]));