import '../scss/main.scss';

console.log('Did you try? 🙇‍♂️')

function clickedClass(e) {
    var targetClass = e.target.className;
    console.log(targetClass);
}

const classCheck = document.querySelectorAll('.grid__element');

for (const elementsClass of classCheck) {
    elementsClass.addEventListener('click', clickedClass);
}




const gridElement = document.querySelectorAll('.grid__element');

for (const elements of gridElement) {
    elements.addEventListener('click', () => {
        elements.innerHTML = 'tile changed';
    })
}

const b = gridElement[6];
console.log(`${b}`);

console.log(`${gridElement.length}`);
const newArray = Array.from(gridElement);


const shuffleButton = document.querySelector('.shuffle');
shuffleButton.addEventListener('click', () => {
    newArray.sort(() => Math.random() -0.5); 
})

const shuffle = newArray.sort(() => Math.random() -0.5);
document.onload = shuffle;
console.log(shuffle);
