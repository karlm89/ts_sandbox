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
