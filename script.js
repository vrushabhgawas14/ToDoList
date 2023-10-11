const inputbox = document.getElementById("input-box");
const TaskContainer = document.getElementById("Task-container");

//To trigger event addFunc() when enter key is pressed.
inputbox.addEventListener("keypress",event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});


function addFunc(){
    if (inputbox.value === ' ' || inputbox.value === '') {
        alert("You Must Enter Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        TaskContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }

    inputbox.value = "";
    save_Data();
}

TaskContainer.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        save_Data();
    }
    else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        save_Data();
    }
},false);

//to store data for future in browser
function save_Data() {
    localStorage.setItem("Data",TaskContainer.innerHTML);
}

// showing stored data when refreshed
function show_Data(){
    TaskContainer.innerHTML = localStorage.getItem("Data");
}

// calling show function
show_Data();