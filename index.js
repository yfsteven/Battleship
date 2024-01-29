const playerBlocksContainer = document.getElementById('player-blocks-container');
const enemyBlocksContainer = document.getElementById('enemy-blocks-container');

const createGrid = (table) => {
    const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    for(let i = 0; i < 10; i++){
        const tr = document.createElement('tr');
        for(let w = 0; w < 10; w++){
            const td = document.createElement('td');
            if(i === 0) {
                td.className = `${letterArray[w]}1`;
                tr.append(td);
            } else {
                td.className = `${letterArray[w]}${w + 1}`;
                tr.append(td);
            }
        }
        table.appendChild(tr);
    }
}
createGrid(playerBlocksContainer);
createGrid(enemyBlocksContainer);

const allBlocks = document.querySelectorAll('.blocks');

allBlocks.forEach((block) => {
    block.addEventListener('click', () => {
        console.log(block.outerHTML);
    });
});


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