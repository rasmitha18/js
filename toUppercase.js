function capitalizeWords(str) {
    let words=str.split(" ");
    let capitalizeWords=words.map(function(word) {
        return word[0].toUpperCase()+word.slice(1);
    });
    return capitalizeWords.join(" ");
}
console.log(capitalizeWords("hello world"));       
console.log(capitalizeWords("javascript is fun"));  
console.log(capitalizeWords("a")); 
