let tasks = []; //empty array to store all objects

function addTask() {
    const input = document.getElementById('input'); //get the input element where user types the task
    const text = input.value(); // get the value from the input

    if (text === '') return; // if empty return nothing

    const newTask = {
        id: Date.now(),  //generate unique ID using current time
        text: text //store the task text
    };

    tasks.push(newTask); //add the new task object to the tasks array
    input.value = ''; //clear input box after adding the task
    render(); // render task list on screen
}

function deleteTask(idToDelete) {
    // Create a new list that EXCLUDES the one ID we clicked 
    tasks = tasks.filter(task => task.id !== idToDelete);
    render(); //update after deleting
}

function render() {
    const list = document.getElementById('taskList'); //get the container where tasks will be shown 
    list.innerHTML = ''; //clear existing list items to avoid duplicates

    tasks.forEach((task) => { //loop through each tasks in array
        const li = document.createElement('li'); //create new <li> element for the task 

        //set the html inside the <li>
        li.innerHTML = `
            ${task.text}
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;

        list.appendChild(li); //add the <li> to the task list
    });
}


function editTask(idToEdit){
    const newText = prompt("Enter new task text:"); //ask user for the new task text 

    if (!newTask) return; //if no new text stop the function 
    
    tasks = tasks.map(task => { //create the new tasks array with the updated task 
        if (task.id === idToEdit) { //check if this the task we want to edit
            return {...task, text: newText}; //return a new object with updated text
        }else{
            return task; //else return task unchanged 
        }
    });
    render();
}

function login(){
    const usernameInput = document.getElementById('InputUsername'); //get the username input  field 
    const username = usernameInput.value; //extract the username entered 

    if (username === '') alert('Please enter a name'); //if empty send an alert again to enter a name 

    localStorage.setItem("current User",username); // save the username in local storage to avoid neccesity to log in each time 

    document.getElementById('greeting').innerText = `Hello ${username}`; // display greeting with the username 

    document.getElementById('loginPage').classList.add('hidden'); //hide the login page
    document.getElementById('appPage').classList.remove('hidden'); //show the main page 
}

function logout(){
    localStorage.removeItem('currentUser'); //remove stored user from the local storage 

    document.getElementById('loginPage').classList.remove('hidden'); //show the login page 
    document.getElementById('appPage').classList.add('hidden'); //hide the app page 
}

function checkAuth(){
    const user = localStorage.getItem('currentUser'); // get the stored user from localstorage 

    //if user exists auto log them in 
    if(user){ 
        document.getElementById('greeting').innerText = `Hello, ${user}!`; //show greeting with stored username 

        document.getElementById('loginPage').classList.add('hidden'); //hide login page
        document.getElementById('appPage').classList.remove('hidden'); // show app page

    }
}
