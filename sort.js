const  people =[
    {name:"bob",age:50},
    {name:"ajay" ,age:28},
    {name:"chitti",age:18}

];

function sort(arr, key) {
    let copy=[...arr];
    copy.sort((a,b)=>{
        if(typeof a[key]==="number"){
            return a[key]-b[key];
        } else{
            return a[key].localeCompare(b[key]);
        }
    });
    return copy;
}

console.log(sort(people, "age"));
console.log(sort(people, "name"));