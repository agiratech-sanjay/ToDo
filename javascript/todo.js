let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let input = document.getElementById('inputField');
let filter = document.getElementById('filter');
 


let arr = [];
const months = ["1","2","3","4","5","6","7","8","9","10","11","12"];


let date=new Date();
let day = date.getDate();
let month = months[date.getMonth()];
let year = date.getFullYear();
let fulldate = "Created On "+day + "-" +month+"-"+year;
// console.log(fulldate);

addToDoButton.addEventListener('click', function(){
   
    var createcheckbox =document.createElement("input");
    createcheckbox.type="checkbox";
    createcheckbox.id = "check";

  var  dell = document.createElement("i");
    dell.id="dele";
    dell.className="delete";
    
      
    
            if (input.value == "") {
                input.classList="formvalidation"
            } else {
                let inp={
                    "name":input.value,
                    "checkbox":createcheckbox,
                    "date":fulldate,
                    "delete":`<i class="fa-solid fa-trash"></i>`,

                }
                arr.push(inp);
                // console.log(arr);
                
                let leeet = document.createElement("li");
                leeet.id="leeet"
    
                create=document.createElement("span");
                create.id="create"


                deleteall = document.createElement("span");
                deleteall.id="deleteall"
               

               
                let i = arr[arr.length - 1];
                
                
                
                let span = document.createElement("span");
                span.id="date";

                deleteall.innerHTML = i.name;
                span.innerHTML=i.date;
                dell.innerHTML=i.delete;

                create.appendChild(createcheckbox); 
                create.appendChild(deleteall);
                create.appendChild(span);
                create.appendChild(dell);
                leeet.appendChild(create);
                toDoContainer.appendChild(leeet);
            }
            let remove = document.getElementsByClassName('delete');
            for (let i = 0; i < remove.length; i++) {
                remove[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            }
})



let icon = document.getElementById("icon");
let listcss = document.getElementById("listcss");
// let i = document.getElementById("i");

function show(){
    listcss.classList.toggle("working");
}
function all1(){
    icon.innerHTML = `<li id="all"><i class="fa-solid fa-filter"></i> ALL</li>`
    listcss.className = "block"
}

function active1(){
    icon.innerHTML = `<li id="active"><i class="fa-solid fa-filter"></i> ACTIVE</li>`
    listcss.className = "block"
}

function complete1(){
    icon.innerHTML = `<li id="complete"><i class="fa-solid fa-filter"></i> COMPLETE</li>`
    listcss.className = "block"
}

// filter operation on all,active,complete.

var check = document.getElementById("all");
check.addEventListener("click",()=>{
    let filter = arr.filter((i)=>i.checkbox.checked === false || i.checkbox.checked === true);
    console.log(filter);
    

}
)

let cheeck = document.getElementById("active");
cheeck.addEventListener("click",()=>{
    let filter = arr.filter((i)=>i.checkbox.checked === false);
    console.log(filter);
}
)

let che = document.getElementById("complete");
che.addEventListener("click",()=>{
    let filter = arr.filter((i)=>i.checkbox.checked === true);
    console.log(filter);
}
)