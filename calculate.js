function calculate(a, b, operator) {
  if(operator==="+") return a+b;
  if(operator==="-") return a-b;
  if(operator==="*") return a*b;
  if(operator==="/") {
    if(b===0) {
    return "Cannot divide";
 }
  return a/b;
  }
  return "Invalid";

  
}

console.log(calculate(5, 3, "+"));  // 8
console.log(calculate(5, 3, "-"));  // 2
console.log(calculate(5, 3, "*"));  // 15
console.log(calculate(6, 3, "/"));  // 2
console.log(calculate(5, 0, "/"));  // "Cannot divide by zero"
console.log(calculate(5, 3, "%"));  // "Invalid operator"
