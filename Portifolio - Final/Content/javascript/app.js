// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    // console.log(links.classList);
    // console.log(links.classList.contains('random'));
    // console.log(links.classList.contains('links'));
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // } else {
    //     links.classList.add('show-links');
    // }

    links.classList.toggle('show-links');
})










const texts = ["Web Dev"];
let textIndex = 0;
let charIndex = 0;
const textElement = document.querySelector(".text");

function type() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Velocidade de digitação (50ms)
    } else {
        setTimeout(erase, 
2000); // Tempo antes de começar a apagar (1000ms)
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100); // Velocidade de apagar (30ms)
    } else {
        textIndex = (textIndex + 1) % texts.length; // Avança para o próximo texto
        setTimeout(type, 500); // Tempo antes de começar a digitar o próximo texto (500ms)
    }
}

type(); // Inicia a animação
