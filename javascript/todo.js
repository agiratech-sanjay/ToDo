let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let filter = document.getElementById('filter');
let del = document.getElementById('del');


addToDoButton.addEventListener('click', function(){
    const paragraph = document.createElement('li');
    const checkbox = document.createElement("input");
    paragraph.innerText = inputField.value;
    checkbox.type="checkbox";
    toDoContainer.appendChild(checkbox);
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
   
})


del.addEventListener('click', function(){
 toDoContainer.removeAttribute('id');
})

let arr=[];
arr.push(inputField.value);
