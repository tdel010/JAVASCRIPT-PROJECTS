/* this function gets the task from input*/
function get_todos() {
    /* this creates an array of tasks that are inputed */
    var todos = new Array;
    /* this pulls the task that was saved in the web browser memory */
    var todos_str = localStorage.getItem('todo');
    /* this checks if there is a task. If not it will return an empty array */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/* this function adds the input task to the get_todos function array*/
function add() {
    /* this takes the value of the input and saves it to a variable */
    var task = document.getElementById('task').value.trim();
    if (!task) {
        return false;
    }
    var todos = get_todos();
    /* this adds the new task to the array */
    todos.push(task);
    /* this converts the task array into a string and saves it in the web browser memory */
    localStorage.setItem('todo', JSON.stringify(todos));
    /* this clears the input box */
    document.getElementById('task').value = '';
    /* this runs the show function */
    show();
    return false;
}

/* this function removes a task when the remove button is clicked */
function remove(event) {
    /* read the clicked button id and convert it to a number */
    var index = parseInt(event.target.id, 10);
    /* stop if the id was not a valid number */
    if (isNaN(index)) {
        /* returning false prevents any default action */
        return false;
    }

    /* get the current todo list from localStorage */
    var todos = get_todos();
    /* remove one item at the clicked index */
    todos.splice(index, 1);
    /* save the updated list back to localStorage */
    localStorage.setItem('todo', JSON.stringify(todos));
    /* re-render the list so the removed item disappears from the UI */
    show();
    /* return false to keep click behavior controlled in this handler */
    return false;
}

/* this function keeps the tasks permanently displayed on the screen */
function show() {
    /* this gets the tasks from the get_todos function */
    var todos = get_todos();
    /* this creates an html variable that will hold the html code for the tasks */
    var html = '<ul>';
    /* this loops through the tasks and adds them to the html variable as list items */
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };

    html += '</ul>';
    /* this sets the inner html of the task list to the html variable, which will display the tasks on the screen */
    document.getElementById('todos').innerHTML = html;
}

/* this displays the input task when the add button is clicked */
document.getElementById('add').addEventListener('click', add);

/* this listens for clicks on remove buttons inside the todos container */
document.getElementById('todos').addEventListener('click', function (event) {
    if (event.target.classList.contains('remove')) {
        remove(event);
    }
});
/* this will keep the tasks displayed on the screen even after refreshing the page */
show();


