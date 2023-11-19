// const addTask = document.getElementById("add_task");
// const banner = document.getElementById("container");



// banner.addEventListener("mouseover" , runAddTask);

// newHeader = document.createElement('h1');
// banner.appendChild(newHeader);
// addTask.addEventListener("click" , runAddTask);
// function runAddTask(e){
//     console.log("Add task");
//     e.preventDefault();
//     newHeader.textContent = `MouseX : ${e.offsetX} ,MouseY : ${e.offsetY} EVENT-TYPE : ${e.type}`;
//     banner.style.backgroundColor = `rgba( ${e.offsetX}, ${e.offsetY}, 40)`;
// };
// const searchTask = document.getElementById("search_task");

// searchTask.addEventListener("keydown" , runsearchTask);
// function runsearchTask(e){
//     console.log("search task");
//     e.preventDefault();
// };

// const deleteTask = document.getElementsByClassName("del");

// deleteTask.addEventListener("click" , runDeleteTask);
// function runDeleteTask(e){
//     // console.log("Delete task");
//     e.preventDefault();
// };

// console.log("Delete task");


const searchInput = document.querySelector("#search_input");
const addItem = document.querySelector("#add_item");
const addTaskInput = document.querySelector("#add_task_input");
const lists = document.querySelector("#lists");
const clear = document.querySelector("#clear");


loadAllEventListeners();

function loadAllEventListeners() {
    // add task event 
    addItem.addEventListener("submit", addTask)
    // delete task
    lists.addEventListener("click", removeTask )
};

function addTask(e) {
    if (addTaskInput.value === ""){
        alert("Add a task");
    }
    else{
        const li = document.createElement("p")
        li.className = "name"
        li.appendChild(document.createTextNode(addTaskInput.value))
    
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "del";
        deleteBtn.textContent = "Delete";
        li.appendChild(deleteBtn)
    
        lists.appendChild(li)
        console.log(li)

        addTaskInput.value = ""
    }
    e.preventDefault()

};

function removeTask(e) {
    if(e.target.classList.contains("del")){
        if(confirm("Are you sure?")){
            e.target.parentElement.remove()
        }
        console.log(e.target)   
    }
}


