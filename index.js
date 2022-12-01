let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTask(e.target.text.value)
    form.reset
})

function addTask(task){
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', deleteTask)
    btn.textContent = "X" 
    li.textContent = task
    li.appendChild(btn)
    document.querySelector('#tasks').appendChild(li)
}

function deleteTask(e){
    e.target.parentNode.remove()
}