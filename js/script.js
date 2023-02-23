

const gridContainer = document.querySelector('#grid_container');
const gridSquares = gridContainer.childNodes;
const squaresButton = document.querySelector('#squares_button');


squaresButton.addEventListener('click', function() {
    const squaresNumber = parseInt(prompt("How many squares per row?"));

    for (i = 0; i < Math.pow(squaresNumber, 2); i++) {
        let divGrid = document.createElement('div');

        squareSize = parseInt(gridContainer.offsetWidth / squaresNumber);

        divGrid.style.height = squareSize + 'px';
        divGrid.style.width = squareSize + 'px';
        divGrid.style.border = "0.01rem solid black";
        divGrid.style.boxSizing = "border-box";
    
        gridContainer.appendChild(divGrid);
    }
    gridSquares.forEach(function(i) {
        i.addEventListener('mouseover', function() {
            this.style.backgroundColor = "red";
        })
});
})