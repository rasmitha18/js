function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function processOrder() {
  wait(1000) 
  .then(()=>{
    console.log("order placed");
    return wait(1000);
  })
  .then(()=>{
    console.log("order shipped");
    return wait(1000);
  })
  .then(()=>{
    console.log("order delivered");
  })
}

processOrder();