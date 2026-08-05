function deepClone(obj){
    if(typeof obj !=="object" || obj === null) {
        return obj;
    }
    if(Array.isArray(obj)){
        let result=[];
        for(let i=0;i<obj.length;i++) {
            result.push(deepClone(obj[i]))
        }
        return result;
    }
    let result={};
    for(let key in obj) {
        result[key]=deepClone(obj[key]);

    }
    return result;
}
const original = { a: 1, b: { c: 2, d: [3, 4] } };
const clone = deepClone(original);
clone.b.c = 999;
clone.b.d.push(5);

console.log(original.b.c); // 2
console.log(original.b.d); // [3, 4]
console.log(clone.b.c);    // 999
console.log(clone.b.d);  