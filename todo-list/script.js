let inputBox = document.querySelector('#input-area')
let todoContainer = document.querySelector('.todo-tasks')

const handleAddTask = () => {
  if(inputBox.value !== '') {
    let listItem = document.createElement('li')
    listItem.innerText = inputBox.value
    todoContainer.appendChild(listItem)
    
    const checkItem = document.createElement('span')
    checkItem.innerText = String.fromCharCode(9633)
    listItem.appendChild(checkItem)
    
    inputBox.value = ''
    saveData()
  } else {
    alert('Enter some task!!!')
  }
}

todoContainer.addEventListener('click', (e) => {
  console.log('event: ', e);
  
  if(e.target.tagName === 'LI') {

    // e.target.children[0].innerText = String.fromCharCode(9632)
    e.target.classList.toggle('complete')
  } else if(e.target.tagName === 'SPAN') {
    e.target.parentElement.remove()
  }
  saveData()
})

const showData = () => {
  todoContainer.innerHTML = localStorage.getItem('todoList')
}

const saveData = () => {
  localStorage.setItem('todoList', todoContainer.innerHTML)
}

showData()