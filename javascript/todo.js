let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let input = document.getElementById('inputField');
let filter = document.getElementById('filter');
var dell = "";
//let del = document.getElementById('del');

let arr = [];

let date=new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let fulldate = "created by "+day + "-" +month+"-"+year;
// console.log(fulldate);

addToDoButton.addEventListener('click', function(){
    // const paragraph = document.createElement('li');
    // const checkbox = document.createElement("input");
    // paragraph.innerText = inputField.value;
    // checkbox.type="checkbox";
    // toDoContainer.appendChild(checkbox);
    // toDoContainer.appendChild(paragraph);
    // inputField.value = "";
    let createcheckbox =document.createElement("input");
    dell = document.createElement("input");
    
    createcheckbox.type="checkbox";
    createcheckbox.id = "check"
    dell.type="button"
    dell.value="delete"
    dell.id="delete"
    
      
    
            if (input.value == "") {
                input.classList="formvalidation"
            } else {
                let inp={
                    "name":input.value,
                    "checkbox":createcheckbox,
                    "date":fulldate,
                    "delete":dell,

                }
                arr.push(inp);
                console.log(arr);
                
                let create = document.createElement("li");
                create.id="text"

               
                 // create.innerHTML=arr.pop();
                let i = arr[arr.length - 1];
                // console.log(arr.length);
                create.innerHTML = i.name;
                // let sum=createcheckbox+create;
                // display.appendChild(create);
                toDoContainer.appendChild(create);
                toDoContainer.appendChild(createcheckbox);
               
                let span = document.createElement("span");
                span.id="date";
                span.innerHTML=i.date;
                toDoContainer.appendChild(span);
                //i.value = "";
                 
                dell.innerHTML=i.delete;
                toDoContainer.appendChild(dell);
            }
})


dell.addEventListener("click",()=>{
   
var current_tasks = document.querySelector("li#delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
               this.toDoContainer.remove();
               toDoContainer.removeChild(createcheckbox);
               toDoContainer.removeChild(dell);
               toDoContainer.removeChild(span);
               toDoContainer.removeChild(create);
            }
        }
        ;})