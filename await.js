function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function processOrder() {
 await wait(1000);
 console.log("order placed");
 await wait(1000);
 console.log("order shipped");
 await wait(1000);
 console.log("order delivered");

}

processOrder();