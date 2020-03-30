function TodoList() {
    let myPrompt = prompt("What would you like to do?");
    let todoArr = [];
    while (myPrompt !== "quit") {
        if (myPrompt === "new") {
            let addArr = prompt("Type your Todo List");
            todoArr.push(addArr);
            console.log(`${addArr} had been added`);
        } else if (myPrompt === "list") {
            displayTodoList(todoArr);
        } else if (myPrompt === "delete") {
            let deleteIndex = prompt("Give me Index to Delete");
            deleteTodoIndex(todoArr, deleteIndex);
        } 
        else if ("quit") {
            return;
        } 
        myPrompt = prompt("What would you like to do?");
    }
}

function displayTodoList(todoListParam) {
    todoListParam.forEach(function(todoListParam, index){
        console.log("*****");
        console.log(`${index}: ${todoListParam}`);
        console.log("*****");
    });
}

// delete is asking for index to delete
function deleteTodoIndex(todoListParam ,indexParam) {
    if (todoListParam.length > indexParam ? (delete todoListParam[indexParam], console.log("A list deleted") ) : console.log("Index out of bound"));
}

function init() {
    TodoList();
}

init();