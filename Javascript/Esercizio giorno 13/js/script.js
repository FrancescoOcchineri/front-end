let btn1 = document.querySelector('#btn1')
let ul = document.querySelector('ul')
let input = document.querySelector('input')

btn1.addEventListener('click', () => {
let newList = document.createElement("li");
newList.textContent = input.value.trim()
ul.appendChild(newList)
let deleteTask = document.createElement("button")
deleteTask.innerHTML = "Delete";
newList.appendChild(deleteTask)
deleteTask.addEventListener('click', () =>{
    newList.style.display = "none"
    })
})

ul.addEventListener('click', () => {
        if (ul.style.textDecoration === "line-through") {
            ul.style.textDecoration = "none";
        } else {
            ul.style.textDecoration = "line-through";
        }
})










