let searchBar = document.getElementById("makeItem");

const toDoContainer = document.getElementById("todo-container");

let searchBtn = document.getElementById("makeItemBtn");

let todoElements = document.querySelectorAll(".todo-text");

loadData();
searchBtn.addEventListener("click", () => {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    const todoEdit = document.createElement("i");
    todoEdit.classList.add("fa-solid", "fa-pen-to-square");

    let todoText = document.createElement("span");
    todoText.className = "todo-text";
    todoText.textContent = searchBar.value;
    if (todoText.textContent.trim() != "") {
        todoItem.append(todoEdit);
        todoItem.append(todoText);
    
        toDoContainer.appendChild(todoItem);
        addEvents();
    }

    searchBar.value = "";
    saveData();

})

function addEvents() {
    document.querySelectorAll(".todo-item").forEach(element => {

        const textElement = element.querySelector(':nth-child(2)');
        const editElement = element.querySelector(':nth-child(1)');

        element.addEventListener("click", (event)=> {
            if (event.target != editElement) {
            
                if (textElement.classList.contains("strike") && !textElement.isContentEditable) {
                    textElement.classList.remove("strike");
                }
                else if (!textElement.classList.contains("strike") && !textElement.isContentEditable) {
                    textElement.classList.add("strike");
                }
            }


        });
        
    });

    document.querySelectorAll(".fa-solid").forEach(element => {

        element.addEventListener("click", ()=> {
            const text = element.nextElementSibling;
            if (element.classList.contains("fa-pen-to-square")) {
                element.classList.add("fa-check");
                element.classList.remove("fa-pen-to-square");
                text.contentEditable = true;
                text.focus();
            }
            else if (element.classList.contains("fa-check")) {
                element.classList.add("fa-pen-to-square");
                element.classList.remove("fa-check");
                text.contentEditable = false;
                text.focus();
            }
            saveData();

        })
        
    });
    



}



function saveData() {
    const todoItems = [];

    document.querySelectorAll(".todo-text").forEach(element => {
        todoItems.push(element.textContent);
    });

    localStorage.setItem("todoItems", JSON.stringify(todoItems))

}

function loadData() {
    const todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];
    toDoContainer.innerHTML = "";
    todoItems.forEach(element => {
        
        const todoItem = document.createElement("div");
        todoItem.className = "todo-item";
    
        const todoEdit = document.createElement("i");
        todoEdit.classList.add("fa-solid", "fa-pen-to-square");
    
        let todoText = document.createElement("span");
        todoText.className = "todo-text";
        todoText.textContent = element;
        
        todoItem.append(todoEdit);
        todoItem.append(todoText);
        toDoContainer.appendChild(todoItem);
        addEvents();
        
    })
}

