const getPlayerBlocksContainer = document.getElementById('player-blocks-container');
const getEnemyBlocksContainer = document.getElementById('enemy-blocks-container');

const createGrid = (table) => {
    for(let i = 0; i < 10; i++){
        const tr = document.createElement('tr');
        for(let w = 0; w < 10; w++){
            const td = document.createElement('td');
            tr.append(td);
        }
        table.appendChild(tr);
    }
}
createGrid(getPlayerBlocksContainer);
createGrid(getEnemyBlocksContainer);

class Ship {
    constructor() {
        this.length = Math.round(Math.random()*5);
        this.numOfHits = 0;
        this.sunk = false;
    }
    hit() {
        this.numOfHits++;
    }
    isSunk() {
        if(this.length === this.numOfHits) {
            this.sunk = true;
        }
    }
}