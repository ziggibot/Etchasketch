const gridContainer = document.querySelector('#grid_container');

for (i = 0; i < 256; i++) {
    let divGrid = document.createElement('div');

    divGrid.style.backgroundColor = "red";
    divGrid.style.height = "2rem";
    divGrid.style.width = "2rem";
    divGrid.style.border = "0.1rem solid black";
    divGrid.style.boxSizing = "border-box";
    

    gridContainer.appendChild(divGrid);
}


