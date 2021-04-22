import '../scss/main.scss';

console.log('Did you try? 🙇‍♂️')

let selectedPair = [];
let gameOver = [];

let elementsToShuffle = document.querySelector('.grid__list');
let classesToShuffle = Array.from(elementsToShuffle.children);



const shuffleButton = document.querySelector('.shuffle');
shuffleButton.addEventListener('click', () => {
    classesToShuffle.sort(() => Math.random() - 0.5);
    for (let element of classesToShuffle) {
        elementsToShuffle.appendChild(element);
    }
});

// tu moznaby dac funkcje, która bylaby w funkcji clickedClass

function clickedClass(e) {
    let collectCards = e.currentTarget;

    let currentCard = e.currentTarget;

    selectedPair.push(currentCard);
    gameOver.push(collectCards);
    console.log(gameOver);

    currentCard.classList.add('opened-card');

    // if (gameOver.length === 12) {
    //     alert('Congrats, you won the game!');
    // }
    // if checl final 

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
