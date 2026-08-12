const container = document.querySelector(".items");
const items = document.querySelectorAll(".item");

let selectedItem = null;

let startX = 0;
let startY = 0;

let currentX = 0;
let currentY = 0;


// Select cube
items.forEach(function (item) {

    item.addEventListener("mousedown", function (event) {

        selectedItem = item;

        startX = event.clientX;
        startY = event.clientY;

        currentX = 0;
        currentY = 0;

        item.classList.add("dragging");

    });

});


// Move cube
document.addEventListener("mousemove", function (event) {

    if (selectedItem === null) {
        return;
    }

    const moveX = event.clientX - startX;
    const moveY = event.clientY - startY;

    currentX = moveX;
    currentY = moveY;


    // Apply movement
    selectedItem.style.transform =
        `translate(${currentX}px, ${currentY}px)`;

});


// Release cube
document.addEventListener("mouseup", function () {

    if (selectedItem === null) {
        return;
    }

    selectedItem.classList.remove("dragging");

    selectedItem = null;

});