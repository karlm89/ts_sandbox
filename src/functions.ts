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

console.log(helloFullName('Karl', 'Murray'))