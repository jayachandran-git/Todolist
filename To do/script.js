let button = document.getElementById('btn')
let todolist = document.getElementById('list')
let input = document.getElementById('task-input');

let todos = [];

button.addEventListener('click', ()=>{
        todos.push(input.value )
        addtodo(input.value )
        input.value = '';
})
function addtodo(todo){
     let para = document.createElement('p');
     para.innerText = todo ; 
      todolist.appendChild(para)
     
}


