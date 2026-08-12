function wait(ms) {
  return new Promise((resolve,reject) => {
    setTimeout(()=> {
        resolve("done waiting!");
    } ,ms)
  })
}

wait(1000).then(message => {
  console.log(message);
});
console.log("This prints first");