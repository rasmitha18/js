function debounce(fn,delay) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer=setTimeout(fn,delay);
    };
}
const debouncedLog= debounce(()=> console.log("hello rasmitha"),500);
debouncedLog();
debouncedLog();
debouncedLog();