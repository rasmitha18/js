class TodoList {
  constructor() {
this.tasks=[];
  }

  add(task) {
     this.tasks.push(task);
      

  }

  remove(task) {
     this.tasks=this.tasks.filter(function(t) {
         return t!==task;
     })
      
  }

  list() {
      return this.tasks;
      
  }
}
const todos = new TodoList();
todos.add("Buy milk");
todos.add("Walk dog");
console.log(todos.list()); // ["Buy milk", "Walk dog"]

todos.remove("Walk dog");
console.log(todos.list()); 