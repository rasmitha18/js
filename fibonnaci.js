function fibonacci(n){
    if(n<=0) return[];
    if(n===1) return[0];
    let result=[0,1];
    for(let i=2;i<n;i++){
        let next=result[i-1]+result[i-2];
        result.push(next);

    }
    return result;

}
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5]
console.log(fibonacci(1)); // [0]*/
console.log(fibonacci(2)); // [0, 1]