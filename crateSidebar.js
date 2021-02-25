const sidebar = document.querySelector('#sidebar');
const tools = document.querySelector('#tools');

for (let i = 0; i < 3; i++) {
  const div = document.createElement('div');
  div.classList.add('tool');
  div.setAttribute('data-type', `t${i}`);
  div.innerHTML = i;
  tools.appendChild(div);
}
