const gridContainer = document.querySelector('#grid_container');

for (i = 0; i <= 256; i++) {
    let divGrid = document.createElement('div');

    divGrid.style.width = "5rem";
    divGrid.style.height = "5rem";
    divGrid.style.backgroundColor = "red";
    divGrid.style.border = "solid black 0.5em";

    gridContainer.appendChild(divGrid);
}


