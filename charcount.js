function charCount(str) {

    let counts = {};
    for (let i = 0; i < str.length; i++) {
        let item = str[i];
        counts[item] = (counts[item] || 0) + 1; 
    }
    return counts;
}
console.log(charCount("hello"));
console.log(charCount("aabbbbgtttyy"));