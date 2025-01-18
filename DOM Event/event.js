console.log('Dom ar ajka special event');

// option:1
// <button onclick="console.log(10)">Click me</button>



// option:2
function makegreen() {
    document.body.style.backgroundColor = 'green'
}


// option:3
const makeblue = document.getElementById('make-blue');
makeblue.onclick = makeblue1;

function makeblue1 () {
    document.body.style.backgroundColor = 'blue';
}