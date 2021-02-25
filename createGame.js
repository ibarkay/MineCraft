// globals
const worldSize = 30;
const matrix = [];
const game = document.querySelector('#game');
const world = document.querySelector('#world');

// const inventory = document.querySelector('#inventory');

// create the matrix
function create() {
  for (let row = 0; row < worldSize; row++) {
    matrix[row] = [];
    for (let col = 0; col < worldSize; col++) {
      matrix[row][col] = document.createElement('div');
      matrix[row][col].setAttribute('data-row', row);
      matrix[row][col].setAttribute('data-col', col);
      matrix[row][col].setAttribute('data-type', 'sky');
      matrix[row][col].classList.add('tile');

      world.appendChild(matrix[row][col]);
    }
  }
}
create(); // check

function createland(fromLine) {
  for (let row = fromLine; row < worldSize; row++) {
    for (let col = 0; col < worldSize; col++) {
      matrix[row][col].setAttribute('data-type', 'dirt');
    }
  }
}
createland(22); // check

function createCloud() {
  let temp;
  let temp2;
  let temp3;
  let temp4;
  for (let row = 2; row < 5; row++) {
    for (let col = 4; col < 9; col++) {
      matrix[row][col].setAttribute('data-type', 'cloud');
      temp = matrix[row + 1][col - 3];
      temp2 = matrix[row - 1][col - 5];
      temp3 = matrix[row - 2][col - 2];
      temp4 = matrix[row - 2][col];
    }
  }temp.setAttribute('data-type', 'cloud');
  temp2.setAttribute('data-type', 'cloud');
  temp3.setAttribute('data-type', 'sky');
  temp4.setAttribute('data-type', 'sky');
}
createCloud();

function createGrass() {
  const line = 23;
  for (let row = 22; row < line; row++) {
    for (let col = 0; col < worldSize; col++) {
      matrix[row][col].setAttribute('data-type', 'grass');
    }
  }
}
createGrass();

function createTree() {
  const line = 24;
  for (let row = 17; row < 22; row++) {
    for (let col = 23; col < line; col++) {
      matrix[row][col].setAttribute('data-type', 'tree-base');
    }
  }
  for (let row = 12; row < 17; row++) {
    for (let col = 20; col < 27; col++) {
      matrix[row][col].setAttribute('data-type', 'tree-lif');
    }
  }
}
createTree();

function createSun() {
  for (let row = 3; row < 5; row++) {
    for (let col = 23; col < 25; col++) {
      matrix[row][col].setAttribute('data-type', 'sun');
    }
  }
}
createSun();
function createStone() {
  for (let row = 21; row < 22; row++) {
    for (let col = 7; col < 15; col++) {
      matrix[row][col].setAttribute('data-type', 'stone');
    }
  }
  for (let row = 20; row < 21; row++) {
    for (let col = 8; col < 14; col++) {
      matrix[row][col].setAttribute('data-type', 'stone');
    }
  }
  for (let row = 19; row < 21; row++) {
    for (let col = 9; col < 14; col++) {
      matrix[row][col].setAttribute('data-type', 'stone');
    }
  }
  for (let row = 18; row < 21; row++) {
    for (let col = 9; col < 14; col++) {
      matrix[row][col].setAttribute('data-type', 'stone');
    }
  }
}
createStone();
