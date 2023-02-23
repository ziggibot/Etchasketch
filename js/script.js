




const gridContainer = document.querySelector('#grid_container');
const gridSquares = gridContainer.childNodes;



for (i = 0; i < 256; i++) {
    let divGrid = document.createElement('div');

    divGrid.style.height = "1rem";
    divGrid.style.width = "1rem";
    divGrid.style.border = "0.01rem solid black";
    divGrid.style.boxSizing = "border-box";

    gridContainer.appendChild(divGrid);

}


gridSquares.forEach(function(i) {
    i.addEventListener('mouseover', function() {
        this.style.backgroundColor = "red";
    })
})
