function toCamelCase(str) {
    let words= str.split(/[\s_-]+/);
    let result=words.map(function(word,index) {
        if(index===0){
            return word.toLowerCase();
        }
        else {
            return word[0].toUpperCase() + word.slice(1); 
        }
    });
 return result.join("");
}
console.log(toCamelCase("hello world"));       // "helloWorld"
console.log(toCamelCase("my-variable-name"));  // "myVariableName"
console.log(toCamelCase("some_random_text"));  // "someRandomText"