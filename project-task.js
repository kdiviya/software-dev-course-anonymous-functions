/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
  
  /*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */

//function(task) is anonymous function. This function is passed as a parameter to filter() as a callback.
let filteredTask = todos.filter(function(todo){ 
  return todo.completed === false;
});

console.log("Incompleted Task:");
console.log(filteredTask);
  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */

  // function(order1, order2) is anonymous function which is used as a comparison function in the sort().
  let sortTask = [ ...todos].sort(function(order1, order2) { 
    return order1.priority - order2.priority;
  });

console.log("Sorted by Priority:");
console.log(sortTask);

  /*
  🔹 Task 3: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */

  //function(todo) is anonymous function. 
  let newTodos = todos.map(function(todo){
    //{ ... todo} clones each todos object to avoid the changes reflected in the original array todos.
    return { ... todo, completed: true };  
   });

   console.log("All Tasks Completed:");
   console.log(newTodos);
  /*
  🔹 Task 4: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */
  
 let combineTask = todos
 .filter(function(todo) //filter the todos to get only incompleted task.
{ return todo.completed === false; })

 .sort(function(order1, order2) //sort the task in ascending order.
{ return order1.priority - order2.priority; });

console.log("Sorted Incomplete Tasks:");
console.log(combineTask);

  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
  // console.log("Incomplete Tasks:", ...);
  // console.log("Sorted by Priority:", ...);
  // console.log("All Tasks Completed:", ...);
  // console.log("Sorted Incomplete Tasks:", ...);
  /* OUTPUT:
  Incompleted Task:
[
  { task: 'Wash the dishes', completed: false, priority: 3 },
  { task: 'Buy groceries', completed: false, priority: 2 },
  { task: 'Walk the dog', completed: false, priority: 2 }
]
Sorted by Priority:
[
  { task: 'Write a blog post', completed: true, priority: 1 },
  { task: 'Study JavaScript', completed: true, priority: 1 },
  { task: 'Buy groceries', completed: false, priority: 2 },
  { task: 'Walk the dog', completed: false, priority: 2 },
  { task: 'Wash the dishes', completed: false, priority: 3 }
]
All Tasks Completed:
[
  { task: 'Wash the dishes', completed: true, priority: 3 },
  { task: 'Write a blog post', completed: true, priority: 1 },
  { task: 'Buy groceries', completed: true, priority: 2 },
  { task: 'Study JavaScript', completed: true, priority: 1 },
  { task: 'Walk the dog', completed: true, priority: 2 }
]*/