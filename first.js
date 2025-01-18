console.log('i love you');

const mainsection = document.getElementById('main-container');
//console.log(mainsection);

const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'section titel-5';
section.appendChild(h1);

const ul = document.createElement('ul');

const li10 = document.createElement('li');
li10.innerText = 'item-1';
ul.appendChild(li10);

const li11 = document.createElement('li');
li11.innerText = 'item-2';
ul.appendChild(li11);

const li12 = document.createElement('li');
li12.innerText = 'item-3';
ul.appendChild(li12);

const li13 = document.createElement('li');
li13.innerText = 'item-4';
ul.appendChild(li13);
 

section.appendChild(ul);
mainsection.appendChild(section);
