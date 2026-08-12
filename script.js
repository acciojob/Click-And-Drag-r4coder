// Your code here.
const container = document.querySelector(".items");

const items = document.querySelectorAll(".item");

let selectedItem = null;

let offsetX = 0;
let offsetY = 0;


// Mouse down
items.forEach(function (item) {

    item.addEventListener("mousedown", function (event) {

        selectedItem = item;

        // Add dragging class
        item.classList.add("dragging");

        // Get item position
        const rect = item.getBoundingClientRect();

        // Find where inside the cube we clicked
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

    });

});


// Mouse move
document.addEventListener("mousemove", function (event) {

    if (selectedItem === null) {
        return;
    }

    const containerRect =
        container.getBoundingClientRect();

    const itemRect =
        selectedItem.getBoundingClientRect();


    // Calculate new position
    let newLeft =
        event.clientX -
        containerRect.left -
        offsetX;

    let newTop =
        event.clientY -
        containerRect.top -
        offsetY;


    // Prevent going outside left
    if (newLeft < 0) {
        newLeft = 0;
    }


    // Prevent going outside top
    if (newTop < 0) {
        newTop = 0;
    }


    // Prevent going outside right
    if (newLeft + itemRect.width >
        containerRect.width) {

        newLeft =
            containerRect.width -
            itemRect.width;
    }


    // Prevent going outside bottom
    if (newTop + itemRect.height >
        containerRect.height) {

        newTop =
            containerRect.height -
            itemRect.height;
    }


    // Move the item
    selectedItem.style.position = "absolute";

    selectedItem.style.left =
        newLeft + "px";

    selectedItem.style.top =
        newTop + "px";

});


// Mouse up
document.addEventListener("mouseup", function () {

    if (selectedItem === null) {
        return;
    }

    selectedItem.classList.remove("dragging");

    selectedItem = null;

});
