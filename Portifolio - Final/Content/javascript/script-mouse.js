const rastroContainer = document.getElementById('rastro-container');

document.addEventListener('mousemove', (event) => {
    const rastro = document.createElement('div');
    rastro.classList.add('rastro');

    const x = event.clientX;
    const y = event.clientY + window.scrollY; // Adiciona o deslocamento vertical da página

    rastro.style.left = x - 10 + 'px'; // Ajuste o valor conforme necessário
    rastro.style.top = y - 10 + 'px'; // Ajuste o valor conforme necessário

    rastroContainer.appendChild(rastro);

    // Remova o rastro após um curto período de tempo
    setTimeout(() => {
        rastro.style.opacity = '0';
        setTimeout(() => {
            rastro.remove();
        }, 500); // Tempo de duração da transição (0.5 segundos)
    }, 150); // Tempo até o rastro começar a desaparecer (0.15 segundos)
});