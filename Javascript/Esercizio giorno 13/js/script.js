let btn1 = document.querySelector('#btn1')
let ul = document.querySelector('ul')
let input = document.querySelector('input')

btn1.addEventListener('click', () => {
let newList = document.createElement("li");
newList.textContent = input.value
ul.appendChild(newList)
let deleteTask = document.createElement("button")
deleteTask.innerHTML = "Delete";
newList.appendChild(deleteTask)
deleteTask.addEventListener('click', () =>{
    newList.style.display = "none"
})
})

ul.addEventListener('click', () => {
    ul.style.textDecoration = "line-through"
})







