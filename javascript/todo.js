let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let input = document.getElementById('inputField');
let filter = document.getElementById('filter');
let filterall = document.getElementById("filterall");
let filteractive = document.getElementById("filteractive");
let filtercomplete = document.getElementById("filtercomplete")
 





let arr = [];
const months = ["1","2","3","4","5","6","7","8","9","10","11","12"];


let date=new Date();
let day = date.getDate();
let month = months[date.getMonth()];
let year = date.getFullYear();
let fulldate = "Created On "+day + "-" +month+"-"+year;
// console.log(fulldate);

addToDoButton.addEventListener('click', function(){
   
let reg = /^[0-9]/
let testreg = input.value;
checking = reg.test(testreg);
// console.log(reg.test(testreg))




    var createcheckbox =document.createElement("input");
    createcheckbox.type="checkbox";
    createcheckbox.id = "check";

    var dell = document.createElement("i");
    dell.id="dele";
    dell.className="delete";
    
      
    
            if (input.value == "") {
                input.classList="formvalidation"
            }else if(checking == true){
                input.classList="formvalidation"
            } 
            else {
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
                
                // localstorage the overall array;
                localStorage.setItem("lastout", JSON.stringify([...JSON.parse(localStorage.getItem("lastout") || "[]"),
            { key : inp},
        ])
        );
        
            }
            
            let remove = document.getElementsByClassName('delete');
            for (let i = 0; i < remove.length; i++) {
                remove[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                }
            } 
                
                input.value = "";
            }
)


function searchfun(){
    let shworking = document.getElementById("searcharr")
    let reg = /^[0-9]/;
    let testreg = shworking.value;
    checking = reg.test(testreg);

    if (checking){
        shworking.classList="formvalidation"
        toDoContainer.innerText = "NO DATA IS AVALIABLE";
    } else {
        let searchinputvalue = shworking.value;
        let searchvalue = arr.filter((item)=> item.name == searchinputvalue)
        enter(searchvalue);
    }}


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
    var  filter1 = arr.filter((i)=>i.checkbox.checked === false || i.checkbox.checked === true);
    //  localStorage.setItem("allset",filter1);
    enter(filter1);

    // console.log(filter1);
 console.log(allset1);
})


let cheeck = document.getElementById("active");
cheeck.addEventListener("click",()=>{
    var filter2 = arr.filter((i)=>i.checkbox.checked === false);
    // console.log(filter2);
    enter(filter2);
})


let che = document.getElementById("complete");
che.addEventListener("click",()=>{
   var filter3 = arr.filter((i)=>i.checkbox.checked === true);
    // console.log(filter3);
    enter(filter3);
})

// function calling for all , active and complete => filter;

function enter(a){
    while (toDoContainer.hasChildNodes()) {
        toDoContainer.removeChild(toDoContainer.firstChild);
        }
        // activelength = filteractive.length;
    for (let j = 0; j < a.length; j++) {

        var createcheckbox =document.createElement("input");
        createcheckbox.type="checkbox";
        createcheckbox.id = "check";
        createcheckbox.className="checkevery"
    
         var  dell = document.createElement("i");
        dell.id="dele";
        dell.className="delete";


        let leeet = document.createElement("li");
            leeet.id="leeet"

            create=document.createElement("span");
            create.id="create"

            deleteall = document.createElement("span");
            deleteall.id="deleteall"

            let i = a[j];

            let span = document.createElement("span");
            span.id="date";

            deleteall.innerHTML = i.name;
            span.innerHTML=i.date;
            dell.innerHTML=i.delete;

            
            if(i.checkbox.checked === false){
                // createcheckbox.checked="false"
                // console.log("hello")
            }else{
                createcheckbox.checked="true";
                // console.log("what")
            }

            create.appendChild(createcheckbox); 
            create.appendChild(deleteall);
            create.appendChild(span);
            create.appendChild(dell);
            leeet.appendChild(create);
            toDoContainer.appendChild(leeet);
        }
        
            let checkchecking = document.getElementsByClassName("checkevery");

            for (let i = 0; i < checkchecking.length; i++) {
                checkchecking[i].addEventListener("click", () => {
                    let checkid = a[i].id;
                    let checkchange = a.findIndex((item) => item.id === checkid);

                    if (a[checkchange].checkbox.checked) {
                        a[checkchange].checkbox.checked = false;
                        a.splice(checkchange, 1);
                        enter(a);
                    } else {
                        a[checkchange].checkbox.checked = true;
                        a.splice(checkchange, 1);
                        enter(a);
                    }
                })
            }
            let remove = document.getElementsByClassName('delete');
            for (let i = 0; i < remove.length; i++) {
            remove[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
                arr.splice(i-2,1);

            }
            }
           
            }

