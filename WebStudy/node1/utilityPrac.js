// util module: format () 1st param %s == string, %d == number, %j == json
// util.inherits(childclassFunction, parentClassFunction)
function Parent() {

}
Parent.prototype.sayHello = function() {
    console.log("Hello from Parent");
}
function Child() {

}

var Util = require('util');
// child can now utilize parent's function
Util.inherits(Child, Parent);
var child = new Child();
child.sayHello();

function IamChild() {

}
function IamParent() {

}
IamParent.prototype.greeting = function() {
    console.log('Greeting! from parent');
}
Util.inherits(IamChild,IamParent);
var childObj = new IamChild();
childObj.greeting();