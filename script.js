let tasks = [];

function addTask() {
    const input = document.getElementById('input');
    const text = input.value.trim();

    if (text === '') return;

    const newTask = {
        id: Date.now(),   // MUST call it
        text: text
    };

    tasks.push(newTask);
    input.value = '';
    render();
}

function deleteTask(idToDelete) {
    // Create a new list that EXCLUDES the one ID we clicked 
    tasks = tasks.filter(task => task.id !== idToDelete);
    render();
}

function render() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';

    tasks.forEach((task) => {
        const li = document.createElement('li');

        li.innerHTML = `
            ${task.text}
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;

        list.appendChild(li);
    });
}


function editTask(idToEdit){
    const newText = prompt("Enter new task text:"); 

    if (!newTask) return; 
    
    tasks = tasks.map(task => {
        if (task.id === idToEdit) {
            return {...task, text: newText};
        }else{
            return task;
        }
    });
    render();
}