import '../scss/main.scss';

console.log('Did you try? 🙇‍♂️')

const gridElement = document.querySelectorAll('.grid__element');

for (const elements of gridElement) {
    elements.addEventListener('click', () => {
        elements.innerHTML = 'tile changed';
    })
}






