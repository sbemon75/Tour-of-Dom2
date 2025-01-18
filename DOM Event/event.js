console.log('Dom ar ajka special event');

function makegreen() {
    document.body.style.backgroundColor = 'green'
}


const makeblue = document.getElementById('make-blue');
makeblue.onclick = makeblue1;

function makeblue1 () {
    document.body.style.backgroundColor = 'blue';
}