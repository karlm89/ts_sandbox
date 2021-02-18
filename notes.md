```typescript
// String
let thisString: string = "This is a string."
let myNumber: number = 2
let myBool: boolean = true
let myArray: number[] = [1,2]
let myAny: any = [1,'hello', true, null]

// Usefull for helper functions.
let myVoid: void
let myNull: null = null
let myUndefinded: undefined = undefined

// 
let myTuple: [string, number] = ['hello', 2]
// let myEnum: 

function hello(): string {
    return 'hello'
}

function helloFirstName(firstName: string): string {
    return `Hello, ${firstName}`
}

function helloFullName(firstName: string, lastName?: string): string {
    if(lastName != undefined){
        return `hello ${firstName} ${lastName}`
    } else {
        return `hello ${firstName}`
    }
}

// Don't console.log this... It wont return anything.
function myVoidFunc():void{
    return
}
```

