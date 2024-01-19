const tabsBox = document.querySelector(".list");
let arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;


arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        tabsBox.scrollLeft += icon.id === "left" ? -10: 10;
    });
    
});


const dragging = (e) => {
    if (isDragging) {
        tabsBox.classList.add("dragging");
        tabsBox.scrollLeft -= e.movementX;
    }

}

tabsBox.addEventListener("mousedown", () => isDragging = true);

tabsBox.addEventListener("mousemove", dragging);
tabsBox.addEventListener("mouseup", () => {
    isDragging = false;
    tabsBox.classList.remove("dragging")
});

