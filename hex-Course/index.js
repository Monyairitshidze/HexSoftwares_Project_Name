
// accesing the values
let activity = document.getElementById("text-field");

// create arrya to store activity
let tasks = [];

// create function to handle event 
function handleAddition(event){

    event.preventDefault();

    if(activity.value){

        // inseting tasks to array
     tasks.push(activity.value);

    //  string aray to local storage
    localStorage.setItem("tasks",JSON.stringify(tasks));

        alert("Task Added");
    }
    
}



// adiing event listener
document.querySelector("form").addEventListener("submit",handleAddition);


// direct to tasks page
function handleDirectionToTaskPage(event){

    event.preventDefault();

    window.location.href = "Tasks.html";
}

