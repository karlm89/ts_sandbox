// String
var thisString = "This is a string.";
var myNumber = 2;
var myBool = true;
var myArray = [1, 2];
var myAny = [1, 'hello', true, null];
// Usefull for helper functions.
var myVoid;
var myNull = null;
var myUndefinded = undefined;
// 
var myTuple = ['hello', 2];
// let myEnum: 
function hello() {
    return 'hello';
}
function helloFirstName(firstName) {
    return "Hello, " + firstName;
}
function helloFullName(firstName, lastName) {
    if (lastName != undefined) {
        return "hello " + firstName + " " + lastName;
    }
    else {
        return "hello " + firstName;
    }
}
// Don't console.log this... It wont return anything.
function myVoidFunc() {
    return;
}
console.log(helloFullName('Karl', 'Murray'));
