interface TodoInterface {
    title: string
    body: string
}

function showTodo(todo: TodoInterface) {
    console.log(`${ todo.title } : ${ todo.body }`)
}

let myTodo = { title: 'Trash', body: 'Take out the trash again' }

showTodo(myTodo)