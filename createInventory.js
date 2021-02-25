const inventory = document.querySelector('#inventory');
// const inventorySum = document.createElement('h3');
// inventorySum.innerHTML = `wood : ${wood}\n
// stones : ${stones}\n
// dirts: ${dirts}
// grass: ${grass}`;

// // refresh inventory function
// const tick = () => {
//   inventorySum.innerHTML = `wood : ${wood}\n
// stones : ${stones}\n
// dirts: ${dirts}
// grass: ${grass}`;
// };

// inventory.append(inventorySum);
const inventorySum = document.createElement('div');
inventory.setAttribute('id', 'matiriales-container');
for (let i = 0; i < 4; i++) {
  const boxy = document.createElement('div');
  boxy.setAttribute('id', `mat-${i}`);
  inventory.append(boxy);
}
// refresh inventory function
const tick = () => {
  inventorySum.innerHTML = `wood : ${wood}\n
stones : ${stones}\n
dirts: ${dirts}
grass: ${grass}`;
};

inventory.append(inventorySum);
