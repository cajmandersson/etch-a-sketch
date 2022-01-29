
// INITIAL SETUP

const container = document.createElement('div');
container.setAttribute('id', 'container');

const newBtn = document.createElement('button');
newBtn.setAttribute('id', 'new');
newBtn.classList.add('btn');
newBtn.textContent = 'New Grid'
container.appendChild(newBtn);

const clearBtn = document.createElement('button');
clearBtn.setAttribute('id', 'clear');
clearBtn.classList.add('btn')
clearBtn.textContent = 'Clear Board';
container.appendChild(clearBtn);

const boardSize = 640;

// Generate Content
document.body.appendChild(container);
createBoard();

// FUNCTIONS 
newBtn.addEventListener('click', () => {
    const board = document.querySelector('#board');
    board.remove()
    createBoard()
});

clearBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.classList.remove('touchedsquare')
    })
})


// Create the board
function createBoard() {
    const board = document.createElement('div');
    board.setAttribute('id', 'board');

    setStyle(board, {
        'width': `${boardSize}px`,
        'height': `${boardSize}px`
    });

    container.appendChild(board);
    createSquares();
    setEvents();
}

// Generate squares with correct sizes
function createSquares() {
    let size = 0;
    while (size < 10 || size > 100) {
        size = prompt('Grid Size? [10-100]');
    }

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        setStyle(div, {
            'width': `${boardSize / size}px`,
            'height': `${boardSize / size}px`
        });
        div.classList.add('square')
        const board = document.querySelector('#board');
        board.appendChild(div);
    }
}

// Add event listerners to all squares
function setEvents() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            console.log('working')
            square.classList.add('touchedsquare');
        });
    });
}

// Set styles on elements
function setStyle(element, properties) {
    for (prop in properties) {
        element.style[prop] = properties[prop];
    }
}