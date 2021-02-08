import '../scss/main.scss';

console.log('Did you try? 🙇‍♂️')

const gridElement = document.querySelector('.grid__list');


if (gridElement) {
    gridElement.addEventListener('click', () => {
        gridElement.innerHTML = 'Działa?';
    })
} 

const aGridElement = document.querySelector('.grid__element--a');

if (aGridElement) {
    aGridElement.addEventListener('click', () => {
        aGridElement.innerHTML = '⏰';
    })
}
