const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value===''){
        alert("You must add some task"); //checking whether it is empty
    }
    else{
        let li=document.createElement("li"); // a new task is created
        li.innerHTML=inputBox.value; //text added in input field will be stored in li.innerhtml
        listContainer.appendChild(li);
        let span=document.createElement("span");
        li.appendChild(span);
    }
    inputBox.value=""
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
},false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
