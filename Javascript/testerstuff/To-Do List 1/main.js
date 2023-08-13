let addBtn = document.getElementById('addBtn');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addBtn.addEventListener('click', function(){
    var createParagraph = document.createElement('p');
    createParagraph.classList.add('paragraph-styling');
    createParagraph.innerText = inputField.value;
    toDoContainer.appendChild(createParagraph);
    inputField.value = "";
    createParagraph.addEventListener('click', function(){
        createParagraph.style.textDecoration = "line-through";
    })
    createParagraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(createParagraph);
    })
})