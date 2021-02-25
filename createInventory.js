const inventory = document.querySelector('#inventory');
const inventorySum = document.createElement('h3');
inventorySum.innerHTML = `wood : ${wood}\n
stones : ${stones}\n
dirts: ${dirts}
grass: ${grass}`;

// refresh inventory function
const tick = () => {
  inventorySum.innerHTML = `wood : ${wood}\n
stones : ${stones}\n
dirts: ${dirts}
grass: ${grass}`;
};


inventory.append(inventorySum);
