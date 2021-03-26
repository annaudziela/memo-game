import '../scss/main.scss';

console.log('Did you try? 🙇‍♂️')

let selectedPair = [];



function clickedClass(e) {
    let currentCard = e.currentTarget;

    selectedPair.push(currentCard);

    currentCard.classList.add('opened-card');


    if (selectedPair.length === 2) {

        // let myResult = selectedPair[0] == selectedPair[1];
        let myResult = selectedPair[0].className == selectedPair[1].className;
    

        if (myResult == true) {
            // alert('good job, you have a match');
            selectedPair.splice(0, 2);

        } else {
            // alert('it is not a pair, try again');
            console.log(selectedPair);

// opóźnić pętlę for i osobno wywołać czyszczenie tablicy
            
            for (const openedElement of selectedPair) {
                setTimeout(() => {
               openedElement.classList.remove('opened-card'); 
        }, 800);
    } 
            selectedPair.splice(0, 2); 
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
            document.documentElement.style.setProperty('--display-two', 'block');
            visibility = false;
        } else {
            document.documentElement.style.setProperty('--display-one', 'block');
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
    newArray.sort(() => Math.random() - 0.5);
})

const shuffle = newArray.sort(() => Math.random() - 0.5);
document.onload = shuffle;
console.log(shuffle);
