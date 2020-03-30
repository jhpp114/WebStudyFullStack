let TodoForm = document.querySelector('.form-todo');
let userInput = TodoForm.querySelector("input");
let unorderedList = document.querySelector('.js-list');

// Todo array to save in local storage
let toDoLists = [];
const TODO_STORAGE = "USER_TODO";

// function to set in localStroage
function saveInLocalStorage() {
    localStorage.setItem(TODO_STORAGE, JSON.stringify(toDoLists)) // key and value
}

// function to load in localStroage
function loadFromLocalStorage() {
    let loadToDos = localStorage.getItem(TODO_STORAGE);
    if (loadToDos !== null) {
        let parseTodoJSON = JSON.parse(loadToDos);
        parseTodoJSON.forEach(function(praseTodo) {
            renderLists(praseTodo.txt);
        });
    }
}

function eventHandler(event) {
    event.preventDefault();
    let userInputValue = userInput.value;
    renderLists(userInputValue);
    userInput.value = "";
}

// remove the list from rendered html
// remove the array in local storage
function deleteList(event) {
    // console.dir(event.target);
    let clickedBtn = event.target;
    let clickedLi = clickedBtn.parentNode;
    console.log(clickedLi);
    unorderedList.removeChild(clickedLi);
    // remove from local storage
    let remainedLists = toDoLists.filter(function(todo) {
        return todo.id !== parseInt(clickedLi.id);
    });
    toDoLists = remainedLists;
    saveInLocalStorage();
}

// Function to create Lists
function renderLists(txt) {
    // console.log(txt);
    // parent
    let li = document.createElement('li');
    // childs
    let delBtn = document.createElement('button');
    delBtn.innerHTML = '_X_';
    delBtn.addEventListener('click', deleteList);
    let span = document.createElement('span');
    span.innerText = txt;
    li.appendChild(delBtn);
    li.appendChild(span);
    let idTdoObj = toDoLists.length + 1;
    li.id = idTdoObj;
    unorderedList.appendChild(li);

    // create const obj
    
    const todoObj = {
        txt,
        id: idTdoObj
    };
    // push the obj into array
    toDoLists.push(todoObj);
    saveInLocalStorage()
}

function init() {
    loadFromLocalStorage();
    TodoForm.addEventListener('submit', eventHandler)
    
}

init();