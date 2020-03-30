const CUR_USER_NAME = 'userName';

let formGetUser = document.querySelector('.getUser');
let userName = formGetUser.querySelector('input');
let greetingUser = document.querySelector('.greetingUser');

function saveIntoStorage(user) {
    localStorage.setItem(CUR_USER_NAME, user);
}

function askName() {
    formGetUser.classList.add('userDisplay');
    formGetUser.addEventListener('submit', getUserName);
}

function paintTheName(txt) {
    formGetUser.classList.remove('userDisplay');
    greetingUser.classList.add('userDisplay');
    greetingUser.innerText = `Hello ${txt}`;
}

function getUserName(event) {
    event.preventDefault();
    let user = userName.value; 
    paintTheName(user);
    saveIntoStorage(user);
}


function displayUserName() {
    let savedName = localStorage.getItem(CUR_USER_NAME);
    if (savedName === null) {
        askName();
    } else {
        paintTheName(savedName);
    }
}

function init() {
    displayUserName();
    
}

init();