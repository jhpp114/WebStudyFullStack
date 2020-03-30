/*
var is using in throughout all program
let is using in the scope of the program
const is that variable that cannot change the name
*/
function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction();

var myGlobal = 10;

function fun2() {
    // var oopsGlobal = 5;
    oopsGlobal = 5;
}

function fun() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "Global Variable: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

var localOrGlobal = 4;

function localVar() {
    var localOrGlobal = 7;
    return localOrGlobal;
}

console.log(localOrGlobal);
console.log("From FUnction "  + localVar(localOrGlobal));

fun2();
fun();

function minus(a ,b) {
    return a - b;
}
var myList = [
    ["cereal", 3],
    ["milk", 2],
    ["banana", 3],
    ["jucies", 2],
    ["eggs", 12]
];

// write a function that add item and return first item
function nextInLine(arr, item) {
    arr.push(item);
    var item = arr.shift();
    
    return item;
}
var testArry = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArry));
console.log(nextInLine(testArry, 6));
console.log("After: " + JSON.stringify(testArry));

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!"]
};

var myDog = {
    "Name" : "Atomy",
    "legs" : 4,
    "tails": 1,
    "friends" : []
};
myDog.Name = "Happy Atomy";
var brackName = myDog["Name"];
console.log(brackName);
myDog["Favorite"] = "Pet Smart";
console.log(myDog);
delete myDog.Name;
console.log(myDog);

// record collection
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ] 
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ] 
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// write a function that update id, prop, and value of record above
// json parse is just a way to copy the obj
var myCollection = JSON.parse(JSON.stringify(collection));
console.log(myCollection);
console.log(myCollection["2468"]);
// condition of the value is empty then we delete all
// if id exist and prop exist with different value then update the vlaue
// if id exist and prop exist (in trakcs array) we are going to add the value
// to the array
function updateRecord(id, prop, value) {
    if (collection[id]) {
        if (value === "") {
            delete collection[id][prop];
        }
        else if (prop === "tracks") {
            if (collection[id][prop]) {
                collection[id][prop].push(value);
            } else {
                collection[id][prop];
                collection[id][prop] = [value];
            }
        } else {
            collection[id][prop] = value;
        }
        return collection;
    }
    return "Id Not Found";
}

console.log(updateRecord("5439", "artist", "hello"));
console.log(updateRecord("5439", "tracks", "hello"));
console.log(updateRecord("2468", "tracks", ""));

// get total
function getSum(arr) {
    var sum = 0;
    var size = arr.length;
    for (var i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}
var myArr = [2,3,4,5,6];
var sum = getSum(myArr);
console.log(sum);

// multi d array
function productArray(arr) {
    var products = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
           products *= arr[i][j];
        }
    }
    return products;
}
var product = [
    [1,2],
    [3,4],
    [5,6,7]
];
var twoArrProducts = productArray(product);
console.log(twoArrProducts);

// profile look up
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": 0543236543,
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": 1231231231,
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": 3213213211,
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vois",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];
// Create a function lookup profile
// passin name, prop and return the value of the prop
// if we pass kirstian property number shall return unknown
// sherlock, like shall return the array
// if name not exist, return no such name
// same for the property
for (var i = 0; i < contacts.length; i++) {
    console.log(contacts[i].firstName);
}

function lookupProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i][prop]) {
                return contacts[i][prop];
            }
        }
        return "Property Not Found";
    }
    return "Not found";
}
var data = (lookupProfile("Akira", "likes"));
console.log(data);

// write a function that takes min and max range
// to generate minimum number
// Math.random()  [0, 1)
// max = 10, min = 1 (10-1) = 9
// [0,9) + 1 = 1, 10
function generateRandom(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

for (var i = 0; i < 50; i++) {
    console.log(generateRandom(1,10));
}

// convert to integer
function convertToInteger(str) {
    return parseInt(str);
}


function checkSign(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
var myNumber = 1;
var result = checkSign(myNumber);
console.log(result);

const magic = () => new Date();


var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
}
// rewrite the function
const reConcatFunction = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]));
console.log(reConcatFunction([1,2], [3,4,5]));

// write a function that takes an array and
// return only positve Integer
const realNumberArray = [4, 5.6, -9.8, 3.14, 6, 8.34, -2];

const positiveIntegers = (realNumberArray) => {
    const values = realNumberArray.filter(num => Number.isInteger(num) && num > 0);
    return values;
};
// Write a function that takes an arr
// squre the positive integer and return the squared positve integer
// .filter takes a functions as argument, .map takes a function as argument
const squareFunction = (numArr) => {
    const squareValue = numArr.filter(nums => Number.isInteger(nums) && nums > 0).map(x => x* x);
    return squareValue;
}; 
let myDataSquare = squareFunction(realNumberArray);
console.log(myDataSquare);

let myResultRealNumber = positiveIntegers(realNumberArray);
console.log(myResultRealNumber);

// write a function that skip first two elements
let myArrSkipTwo = [1,2,3,4,5,6,7,8];
const skipTwo = (arr) => {
    const [, , ...skipTwoArr] = arr;
    return skipTwoArr;
};
let myResultSkip = skipTwo(myArrSkipTwo);
console.log(myResultSkip);

// return all array
const returnAllArr = (arr) => {
    let copyArr = arr;
    return copyArr;
};
let myResultReturnAll = returnAllArr(myArrSkipTwo);
console.log(myResultReturnAll);

// write a function that takes the obj
// return tomorrow temperature
const localWeather = {
    "today" : 123,
    "tomorrow": 321
};
const myTemperatureFunc = (weather) => {
    const {"tomorrow" : myTemp } = weather;
    return myTemp;
};

let resultTemperature = myTemperatureFunc(localWeather);
console.log(resultTemperature);

// write a function that takes an obj
// return the maximum temperature for tomorrow
const edmondsTemperature = {
    "today": {
        "min" : 12,
        "max" : 66
    },
    "tomorrow" :{
        "min": 22,
        "max": 66
    }
};
const maxTempatureTmr = (temperature) => {
    let {"tomorrow" : { "max": tmrMax} } = temperature;
    return tmrMax;
};
let resultTmrMax = maxTempatureTmr(edmondsTemperature);
console.log("Edmonds Max Temp: " + resultTmrMax);

// write a function print half of all stats
// max and min is given
const myStat = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.53,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({max, min}) => {
    return (max + min) / 2.0
};
let myHalf = half(myStat);
console.log(myHalf);

// template literal
// wirte a function that greeting
// user1 fullname with age 
const user1 = {
    firstName: "Jun",
    lastName: "Park",
    fullName: "Jun Park",
    age: 29
};
const greetingFunc = (user) => {
    let greeting = `Greeting!\n${user.fullName}\nYour current age is ${user.age}`;
    return greeting;
};
let prompt = greetingFunc(user1);
console.log(prompt);

const resultList = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

// write a function that returns the prop
// looks like "<li class="text-warning"> no-var </li> etc..
const makeList = (lists) => {
    let resultList = [];
    for (let i = 0; i < lists.length; i++) {
        resultList.push(`<li class="text-warning">${lists[i]}</li>`);   
    }
    return resultList;
};
let listResult = makeList(resultList.success);
console.log(listResult);

// create a class
class Vegetable {
    constructor(name, nutrition) {
        this.name = name;
        this.nutrition = nutrition;
    }
}
let myVege = new Vegetable("Lemon", "Vitamin-C");
// it returns an obj
console.log(myVege);
let vegeName = myVege.name;
let vegeNutrition = myVege.nutrition;
console.log(`Vegetable Name: ${vegeName}\nNutrition: ${vegeNutrition}`);

// create another file to import
// which has a function to captialize the input string
// import capitalize from "./toUpper";
// const resultCapital = capitalize("hello");
// console.log(resultCapital);
