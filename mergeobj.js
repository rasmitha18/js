function mergeObjects(obj1,obj2) {
    let result={};
    for(let key in obj1) {
        result[key]=obj1[key];
    }
    for(let key in obj2) {
        result[key]=obj2[key];
    }
    return result;
}
console.log(mergeObjects({a:12,b:2} ,{b:4,c:124}));