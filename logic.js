// globals
// TODO : slected function to highlight selected tool , headline for tools and inventory
let chosenTool = 10;
let stones = 5;
let wood = 5;
let dirts = 5;
let grass = 5;
// start button
const startBtn = document.querySelector('.start');
const landingPage = document.querySelector('.landing');

startBtn.addEventListener('click', () => {
  console.log('btn work');
  landing.style.visibility = 'hidden';
});
// event listeners
// functions

const chose = (e) => {
  chosenTool = parseInt(e.target.innerHTML);
  console.log(chosenTool);
};
const choseMat = (e) => {
  if (e.target.classList.value === 'cl-0') {
    chosenTool = 3;
  }
  if (e.target.classList.value === 'cl-1') {
    chosenTool = 4;
  }
  if (e.target.classList.value === 'cl-2') {
    chosenTool = 5;
  }
  if (e.target.classList.value === 'cl-3') {
    chosenTool = 6;
  }
};
function choshen() {

}
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
      if (dirts > 0) {
        dirts--;
        e.currentTarget.setAttribute('data-type', 'dirt');
        tick();
      }
    }
  }
  // add wood
  if (chosenTool === 4) {
    if (e.currentTarget.attributes['data-type'].value === 'sky') {
      if (wood > 0) {
        wood--;
        e.currentTarget.setAttribute('data-type', 'tree-base');
        tick();
      }
    }
  }
  // add grass
  if (chosenTool === 5) {
    if (e.currentTarget.attributes['data-type'].value === 'sky') {
      if (grass > 0) {
        grass--;
        e.currentTarget.setAttribute('data-type', 'grass');
        tick();
      }
    }
  }
  // add stone
  if (chosenTool === 6) {
    if (e.currentTarget.attributes['data-type'].value === 'sky') {
      if (stones > 0) {
        stones--;
        e.currentTarget.setAttribute('data-type', 'stone');
        tick();
      }
    }
  }
  console.log(chosenTool);
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
tick();
