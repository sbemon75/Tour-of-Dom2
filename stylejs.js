const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    // console.log(section);
    section.style.border = '2px solid green' ;
    section.style.marginBottom = '10px' ;
    section.style.borderRadius = '15px' ;
    section.style.paddingLeft = '10px' ;
    section.style.backgroundColor = 'lightgray' ;
}


const capitalContainer = document.getElementById('capital-container') ;
capitalContainer.style.backgroundColor = 'green' ;



const fruitContainer = document.getElementById('fruit-container');
fruitContainer.childNodes[2];




//getElementByTagName
//getElementById
//getElementsByClassName
//querySelectorAll
//querySelector

//document.createElement('div')

const li2 = document.createElement('li');
li2.innerText('I love You jan');

placeLi.appenedChild('li2');