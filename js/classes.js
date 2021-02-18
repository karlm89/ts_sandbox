var User = /** @class */ (function () {
    function User(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    // method
    User.prototype.greet = function () {
        console.log("Hello " + this.firstName + "!");
    };
    User.prototype.greetFullName = function () {
        console.log("Hello " + this.fullName());
    };
    User.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var john = new User('John', 'Doe', 'john.doe@gmail.com', 45);
var gandolf = new User('Gandolf', 'The White', 'IhangoutwithHobbits@gmail.com', 415);
gandolf.greetFullName();
