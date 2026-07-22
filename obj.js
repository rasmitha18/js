const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 25 }
];

function groupBy(arr, key) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    let groupValue = obj[key];
    if (!result[groupValue]) {
      result[groupValue] = [];
    }
    result[groupValue].push(obj);
  }
  return result;
}
console.log(groupBy(people, "age"));

