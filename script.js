let input = document.getElementById("todo-input");
let button = document.getElementById("todo-btn");
let taskContainer = document.querySelector(".items-container");

button.onclick = ()=>{
    if(input.value === ""){
        alert("Cannot add empty tasks")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}
taskContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})
function saveData(){
    localStorage.setItem("data",taskContainer.innerHTML);
}
function showData(){
    taskContainer.innerHTML = localStorage.getItem("data");
}
showData();