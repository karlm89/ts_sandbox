class User {
  firstName: string
  lastName: string
  email: string
  age: number

  constructor(firstName: string, lastName: string, email:string, age:number) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email  
    this.age = age  
  }

  // Method
  greet(): void{
    console.log(`Hello ${this.firstName}!`)
  }
  
  // Private functions can only be called within the class
  private fullName(): string{
    return `${this.firstName} ${this.lastName}`
  }

  greetFullName(): void {
    console.log(`Hello ${this.fullName()}`)
  }
} 

class Member extends User {
    id: number

    constructor(id: number, firstName: string, lastName: string, email:string, age:number) {
        super (firstName, lastName, email, age)
        this.id = id
    }
}

let john = new User('John','Doe','john.doe@gmail.com',45)
let gandolf = new User('Gandolf','The White','IhangoutwithHobbits@gmail.com',415)

gandolf.greetFullName()