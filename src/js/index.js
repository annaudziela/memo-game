import '../scss/main.scss';

console.log('Did you try? 🙇‍♂️')

let selectedPair = [];

let elementsToShuffle = document.querySelector('.grid__list');
let classesToShuffle = Array.from(elementsToShuffle.children);

console.log(classesToShuffle);

const shuffleButton = document.querySelector('.shuffle');
shuffleButton.addEventListener('click', () => {
    console.log(classesToShuffle.sort(() => Math.random() - 0.5));
})


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

// const shuffleButton = document.querySelector('.shuffle');
// shuffleButton.addEventListener('click', () => {
//     newArray.sort(() => Math.random() - 0.5);
// })

// const shuffle = newArray.sort(() => Math.random() - 0.5);
// document.onload = shuffle;
// console.log(shuffle);
