function normalize(str) {
  let lower = str.toLowerCase();          
  let noSpaces = lower.replace(/\s/g, ""); 
  let sorted = noSpaces.split("").sort().join(""); 
  return sorted;
}
function isAnagram(str1, str2) {
  return normalize(str1) === normalize(str2);
}

console.log(isAnagram("listen","silent"));        
console.log(isAnagram("hello", "world"));           
console.log(isAnagram("Dormitory", "dirty room"));  
console.log(isAnagram("abc", "abcd"));             