class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName, data) {
    if (this.events[eventName]) {
      for (let i = 0; i < this.events[eventName].length; i++) {
        this.events[eventName][i](data);
      }
    }
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(function(cb) {
        return cb !== callback;
      });
    }
  }
}
const emitter = new EventEmitter();

function greet(name) {
  console.log("Hello, " + name);
}

emitter.on("greet", greet);
emitter.emit("greet", "Alice"); 
emitter.off("greet", greet);
emitter.emit("greet", "Carol"); 