// globals
let chosenTool = 10;
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
const choseMat = (e) => {
  if (e.path[0].classList.value === 'cl-0') {
    chosenTool = 3;
  }
  if (e.path[0].classList.value === 'cl-1') {
    chosenTool = 4;
  }
  if (e.path[0].classList.value === 'cl-2') {
    chosenTool = 5;
  }
  if (e.path[0].classList.value === 'cl-3') {
    chosenTool = 6;
  }
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
  // add dirt
  if (chosenTool === 3) {
    if (e.currentTarget.attributes['data-type'].value === 'sky') {
      stones++;
      e.currentTarget.setAttribute('data-type', 'dirt');
      tick();
    }
  }
  // add wood
  if (chosenTool === 4) {
    if (e.currentTarget.attributes['data-type'].value === 'sky') {
      stones++;
      e.currentTarget.setAttribute('data-type', 'wood');
      tick();
    }
  }
  // add grass
  if (chosenTool === 5) {
    if (e.currentTarget.attributes['data-type'].value === 'sky') {
      stones++;
      e.currentTarget.setAttribute('data-type', 'grass');
      tick();
    }
  }
  // add stone
  if (chosenTool === 6) {
    if (e.currentTarget.attributes['data-type'].value === 'sky') {
      stones++;
      e.currentTarget.setAttribute('data-type', 'stone');
      tick();
    }
  }
};

// ev-tools
for (let i = 0; i < 3; i++) {
  const tool = document.querySelector(`[data-type="t${i}"]`);
  tool.addEventListener('click', chose);
}
// ev-mat
for (let i = 0; i < 4; i++) {
  const tool = document.querySelector(`#mat.cl-${i}`);
  tool.addEventListener('click', choseMat);
}

// ev-tile
for (const row in matrix) {
  for (const col in matrix) {
    matrix[row][col].addEventListener('click', choseTile);
  }
}
