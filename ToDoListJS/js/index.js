function addNewTask() {
    var newTaskElement = document.getElementById("newTaskInput");
    var newTaskName = newTaskElement.value; 
    if (newTaskName) {
        
        var checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("class","form-check-input");
        checkbox.setAttribute("type","checkbox");
        checkbox.addEventListener("click", function(event){
            onCheckboxClick(event, liElement, buttonState, checkbox);
        });
        
        var label = document.createElement("label");
        label.setAttribute("class","form-check-label");
        label.innerHTML = newTaskName;

        var buttonState = document.createElement("button");
        buttonState.setAttribute("type","button");
        buttonState.setAttribute("class","btn btn-danger buttonToRight");
        buttonState.innerHTML = "Reject";
        buttonState.addEventListener("click", function(event){
            onStateButtonClick(event, liElement, buttonState, checkbox);
        });

        var divElementCheck = document.createElement("div");
        divElementCheck.classList.add("form-check");
        divElementCheck.classList.add("taskDiv");
        divElementCheck.appendChild(checkbox);
        divElementCheck.appendChild(label);
        
        var divElementCheckButton = document.createElement("div")
        divElementCheckButton.appendChild(divElementCheck);
        divElementCheckButton.appendChild(buttonState);

        var liElement = document.createElement("li");
        liElement.setAttribute("class","list-group-item");
        liElement.appendChild(divElementCheckButton);
       
        document.getElementById("mainTasksList").appendChild(liElement); 
        newTaskElement.value = "";
    }
    newTaskElement.focus();
}

function onKeyPressed(event) {
    if (event.keyCode === 13) {
        addNewTask();
    }
}

function onCheckboxClick(event, liElement, button, checkbox) {
    if (button.classList.contains("btn-danger")) {
        liElement.remove();
        button.innerHTML = 'Redo';
        button.setAttribute("class","btn btn-primary buttonToRight");
        checkbox.hidden = true;
        document.getElementById("doneTasksList").appendChild(liElement);
    } else if (button.classList.contains("btn-primary")) {
        liElement.remove();
        checkbox.checked = false;
        button.innerHTML = 'Reject';
        button.setAttribute("class","btn btn-danger buttonToRight");
        document.getElementById("mainTasksList").appendChild(liElement);
    } 
}

function onStateButtonClick(event, liElement, button, checkbox) {
    if (button.classList.contains("btn-primary")) {
        liElement.remove();
        button.innerHTML = 'Reject';
        checkbox.checked = false;
        checkbox.hidden = false;
        button.setAttribute("class","btn btn-danger buttonToRight");
        document.getElementById("mainTasksList").appendChild(liElement);
    } else if (button.classList.contains("btn-warning")) {
        liElement.remove();
        button.innerHTML = 'Reject';
        button.setAttribute("class","btn btn-danger buttonToRight");
        checkbox.checked = false;
        checkbox.hidden = false;
        document.getElementById("mainTasksList").appendChild(liElement);
    } else if (button.classList.contains("btn-danger")){
        liElement.remove();
        button.innerHTML = 'Restore';
        button.setAttribute("class","btn btn-warning buttonToRight");
        checkbox.hidden = true;
        document.getElementById("rejectedTasksList").appendChild(liElement);
    }
}
