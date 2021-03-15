import '../scss/main.scss';

console.log('Did you try? 🙇‍♂️')

let selectedPair = [];

function clickedClass(e) {
    const targetClass = e.currentTarget.className;
    selectedPair.push(targetClass);
    console.log(targetClass);
    console.log(selectedPair); 
    console.log(selectedPair.length);

    if (selectedPair.length === 2) {  

    let myResult = selectedPair[0] == selectedPair[1];
    selectedPair.splice(0,2); 

    if (myResult == true) {
    alert('good job, you have a match');

    } else {
        alert('it is not a pair, try again');
    }
    } 
}

const classCheck = document.querySelectorAll('.grid__element');


for (const elementsClass of classCheck) {
    elementsClass.addEventListener('click', clickedClass);
}

for (const elementsClass of classCheck) {
    elementsClass.addEventListener('click', () => {

        let visibility = false;

        if (visibility) {
        document.documentElement.style.setProperty('--display-one', 'none');
        document.documentElement.style.setProperty('--display-two', 'display'); 
        visibility = false;
        } else {
        document.documentElement.style.setProperty('--display-one', 'display');
        document.documentElement.style.setProperty('--display-two', 'none'); 
        visibility = true;
        }
    })
}



// const testDiv = document.querySelector('.test-div');
// testDiv.addEventListener('click', () => {
//     testDiv.innerHTML = targetClass;
// })

// const gridElement = document.querySelectorAll('.grid__element');

// for (const elements of gridElement) {
//     elements.addEventListener('click', () => {
//         elements.innerHTML = 'tile changed';
//     })
// }

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
