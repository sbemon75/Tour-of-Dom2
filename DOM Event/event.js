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




// option:4

const makepink = document.getElementById('make-pink');
makepink.addEventListener('click', makepink1);

function makepink1(){
    document.body.style.backgroundColor = 'pink';
}



// option: 4 final
document.getElementById('make-org').addEventListener('click' , function(){
    document.body.style.backgroundColor = 'orange';
})