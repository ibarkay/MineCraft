// globals
let chosenTool = 4;
let stones = 0;
let wood = 0;
let dirts = 0;
let grass = 0;
// event listeners
// functions
const chose = (e) => {
  chosenTool = parseInt(e.target.innerHTML);
  console.log(chosenTool);
};
// whats haapen when we chose a tile :
const choseTile = (e) => {
  // dirt and grass
  if (chosenTool === 0) {
    if (e.currentTarget.attributes['data-type'].value === 'dirt' || e.currentTarget.attributes['data-type'].value === 'grass') {
      if (e.currentTarget.attributes['data-type'].value === 'dirt') {
        dirts++;
      } else {
        grass++;
      }
      e.currentTarget.setAttribute('data-type', 'sky');
      tick();
    }
  }
  // tree and lifs
  if (chosenTool === 1) {
    if (e.currentTarget.attributes['data-type'].value === 'tree-base' || e.currentTarget.attributes['data-type'].value === 'tree-lif') {
      if (e.currentTarget.attributes['data-type'].value === 'tree-base') {
        wood++;
      } else {
        grass++;
      }
      e.currentTarget.setAttribute('data-type', 'sky');
      tick();
    }
  }
  // stone
  if (chosenTool === 2) {
    if (e.currentTarget.attributes['data-type'].value === 'stone') {
      stones++;
      e.currentTarget.setAttribute('data-type', 'sky');
      tick();
    }
  }
  // for debugging:
  // console.log(e.currentTarget);
};

// ev-tools
for (let i = 0; i < 3; i++) {
  const tool = document.querySelector(`[data-type="t${i}"]`);
  tool.addEventListener('click', chose);
}

// ev-tile
for (const row in matrix) {
  for (const col in matrix) {
    matrix[row][col].addEventListener('click', choseTile);
  }
}
