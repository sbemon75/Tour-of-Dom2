//console.log('append js');


const sportsList = document.getElementById('sportslist');
//console.log(sportsList);

const li1 = document.createElement('li');
li1.innerText = 'Hokie';

const li3 = document.createElement('li');
li3.innerText = 'Kanamachi' ;

sportsList.appendChild(li1);
sportsList.appendChild(li3);


const maincontainer = document.getElementById('main-container');
//console.log(maincontainer);

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Tree';
section.appendChild(h1);


const ul = document.createElement('ul');

const li5 = document.createElement('li');
li5.innerText = 'Mango Tree';
ul.appendChild(li5);


const li6 = document.createElement('li');
li6.innerText = 'Mango Tree';
ul.appendChild(li6);


const li7 = document.createElement('li');
li7.innerText = 'Mango Tree';
ul.appendChild(li7);


section.appendChild(ul);
maincontainer.appendChild(section);
