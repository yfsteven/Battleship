const playerBlocksContainer = document.getElementById('player-blocks-container');
const enemyBlocksContainer = document.getElementById('enemy-blocks-container');

const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

const createGrid = (table) => {
    for(let i = 0; i < 10; i++){
        const tr = document.createElement('tr');
        for(let w = 0; w < 10; w++){
            const td = document.createElement('td');
            switch(i){
                case 0:
                    td.className = `${letterArray[w]}1`;
                    tr.append(td);
                    break;
                case 1:
                    td.className = `${letterArray[w]}2`;
                    tr.append(td);
                    break;
                case 2:
                    td.className = `${letterArray[w]}3`;
                    tr.append(td);
                    break;
                case 3:
                    td.className = `${letterArray[w]}4`;
                    tr.append(td);
                    break;
                case 4:
                    td.className = `${letterArray[w]}5`;
                    tr.append(td);
                    break;
                case 5:
                    td.className = `${letterArray[w]}6`;
                    tr.append(td);
                    break;
                case 6:
                    td.className = `${letterArray[w]}7`;
                    tr.append(td);
                    break;
                case 7:
                    td.className = `${letterArray[w]}8`;
                    tr.append(td);
                    break;
                case 8:
                    td.className = `${letterArray[w]}9`;
                    tr.append(td);
                    break;
                case 9:
                    td.className = `${letterArray[w]}10`;
                    tr.append(td);
                    break;
            }
        }
        table.appendChild(tr);
    }
}
createGrid(playerBlocksContainer);
createGrid(enemyBlocksContainer);









/*
const allBlocks = document.querySelectorAll('td');

let coordinatesArray = [];

allBlocks.forEach((block) => {
    coordinatesArray.push(block.classList.value);
});

class Ship {
    constructor() {
        this.slength = Math.ceil(Math.random()*5);
        this.numOfHits = 0;
        this.sunk = this.slength === this.numOfHits ? true : false;
        this.coordinates = getCoordinates(this.slength);
    }
    getCoordinates(size) {
        let shipCoordinates = [];
        for(let w = 0; w < size; w++){
            shipCoordinates.push(coordinatesArray[Math.ceil(Math.random()*coordinatesArray.length)]);
        }
        return shipCoordinates;
    }
    hit() {
        this.numOfHits++;
    }
    isSunk() {
        this.sunk = true;
    }
}

const ship1 = new Ship();
const ship2 = new Ship();
const ship3 = new Ship();
const ship4 = new Ship();
const ship5 = new Ship();
const ship6 = new Ship();
const ship7 = new Ship();
const ship8 = new Ship();

class Player {
    constructor() {
        this.turn = false;
    }
}



class Gameboard {
    constructor() {
        this.player = new Player();
        this.enemy = new Player();
    }
    
}

allBlocks.forEach((block) => {
    coordinatesArray.push(block.classList.value);
    block.addEventListener('click', () => {
        gameStart.enemy.ship1.coordinates.includes(block.classList.value) ?  console.log('hit') : console.log('Nthing');
    });
});
*/