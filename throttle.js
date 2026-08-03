function throttle(fn, limit) {
  let isCooldown = false;
  return function () {
    if (!isCooldown) {
      fn();
      isCooldown = true;
      setTimeout(() => {
        isCooldown = false;
      }, limit);
    }
  };
}

function logMsg() {
  console.log("Logged at", Date.now());
}

const throttledLog = throttle(logMsg, 1000);

let count = 0;
const interval = setInterval(() => {
  throttledLog();
  count++;
  if (count > 12) clearInterval(interval);
}, 200);