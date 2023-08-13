const ITEMS_CONTAINER = document.getElementById('items');
const ITEMS_TEMPLATE = document.getElementById('itemTemplate');
const ADD_BUTTON = document.getElementById('add');
let items = getItems();
function getItems() {
    const value = localStorage.getItem('todo') || "[]";

    return JSON.parse(value); //JSON --> object
}

function setItems(items) {
    const itemsJSON = JSON.stringify(items); //object --> JSON - without it the array says object object
    localStorage.setItem('todo', itemsJSON);
}

function addItems() {
    items.unshift(
        {
            description:"",
            completed:false
        }
    );

    setItems(items);
    refreshList();
}


function refreshList() {

    ITEMS_CONTAINER.innerHTML = "";
    for (const item of items) {
        const itemElement = ITEMS_TEMPLATE.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;
        descriptionInput.addEventListener("change", ()=> {
            updateList(item, "description", descriptionInput.value);
        });
        completedInput.addEventListener("change", ()=> {
            updateList(item, "completed", completedInput.checked);
        });
        ITEMS_CONTAINER.append(itemElement);
    }
}

ADD_BUTTON.addEventListener("click", () => {
    addItems();
});

function updateList(item, key, value) {
    item[key] = value;
    setItems(items);
    refreshList();
}

refreshList();
console.log(items);
