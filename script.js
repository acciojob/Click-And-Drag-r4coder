const container = document.querySelector(".items");
const items = document.querySelectorAll(".item");

let selectedItem = null;

let startMouseX = 0;
let startMouseY = 0;

let startX = 0;
let startY = 0;


// Mouse down
items.forEach(function (item) {

    item.addEventListener("mousedown", function (event) {

        selectedItem = item;

        startMouseX = event.clientX;
        startMouseY = event.clientY;


        // Get container position
        const containerRect =
            container.getBoundingClientRect();


        // Get cube position
        const itemRect =
            item.getBoundingClientRect();


        // Original position of cube inside container
        startX =
            itemRect.left - containerRect.left;

        startY =
            itemRect.top - containerRect.top;


        item.classList.add("dragging");

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


    // Mouse movement
    const mouseMoveX =
        event.clientX - startMouseX;

    const mouseMoveY =
        event.clientY - startMouseY;


    // New position
    let newX =
        startX + mouseMoveX;

    let newY =
        startY + mouseMoveY;


    // Minimum position
    const minX = 0;
    const minY = 0;


    // Maximum position
    const maxX =
        container.clientWidth -
        selectedItem.offsetWidth;

    const maxY =
        container.clientHeight -
        selectedItem.offsetHeight;


    // Boundary check - left
    if (newX < minX) {
        newX = minX;
    }


    // Boundary check - right
    if (newX > maxX) {
        newX = maxX;
    }


    // Boundary check - top
    if (newY < minY) {
        newY = minY;
    }


    // Boundary check - bottom
    if (newY > maxY) {
        newY = maxY;
    }


    // Calculate movement from original grid position
    const translateX =
        newX - startX;

    const translateY =
        newY - startY;


    // Move cube using transform
    selectedItem.style.transform =
        `translate(${translateX}px, ${translateY}px)`;

});


// Mouse up
document.addEventListener("mouseup", function () {

    if (selectedItem === null) {
        return;
    }

    selectedItem.classList.remove("dragging");

    selectedItem = null;

});