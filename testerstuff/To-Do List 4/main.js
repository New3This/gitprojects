const ITEMS_CONTAINER = document.getElementById('items');
const ITEMS_TEMPLATE = document.getElementById('templateStuff');
const ADD_BTN = document.getElementById('addBtn');

let items = getData();

function getData() {
  const value = localStorage.getItem('todo') || '[]';
  return JSON.parse(value);
}

function saveData(items) {
  const itemsJSON = JSON.stringify(items);
  localStorage.setItem('todo', itemsJSON);
}

function addData() {
  items.unshift({
    description: "",
    ticked: false
  });

  saveData(items);
  refreshList();
}

function refreshList() {
  ITEMS_CONTAINER.innerHTML = "";
  for (const item of items) { // Use "of" instead of "in" to iterate over items
    const itemElement = ITEMS_TEMPLATE.content.cloneNode(true);
    const itemDescription = itemElement.querySelector('.inputfield');
    const itemChecked = itemElement.querySelector('.ticked');

    itemDescription.value = item.description;
    itemChecked.checked = item.ticked; // Use "checked" instead of "value" for checkboxes


    itemChecked.addEventListener("change", function() {
      updateList(item, "completed", itemChecked.checked);
    });
    itemDescription.addEventListener("change", ()=> {
      updateList(item, "description", itemDescription.value);
    });

    ITEMS_CONTAINER.append(itemElement);
  }
}

ADD_BTN.addEventListener("click", function() {
  addData();
});

function updateList(array, property, value) {
  array[property] = value;
  saveData(items);
  refreshList();
}

refreshList();