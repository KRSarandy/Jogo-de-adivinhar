document.addEventListener('DOMContentLoaded', () => {
    let numeroSorteado;
    let jogoIniciado = false;

    const sortearBtn = document.getElementById('sortear');
    const tentarBtn = document.getElementById('tentar');
    const palpiteInput = document.getElementById('palpite');
    const logTextarea = document.getElementById('log');

    sortearBtn.addEventListener('click', () => {
        numeroSorteado = Math.floor(Math.random() * 100) + 1;
        jogoIniciado = true;
        logTextarea.value = 'Jogo iniciado! Faça seu palpite.\n';
        palpiteInput.value = '';
        palpiteInput.focus();
    });

    tentarBtn.addEventListener('click', registrarPalpite);
    palpiteInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            registrarPalpite();
        }
    });

    function registrarPalpite() {
        if (!jogoIniciado) {
            alert('O jogo ainda não foi iniciado.');
            return;
        }

        const palpite = parseInt(palpiteInput.value, 10);
        if (isNaN(palpite)) {
            alert('Por favor, digite um número válido.');
            return;
        }

        if (palpite < numeroSorteado) {
            logTextarea.value += `Seu palpite ${palpite} é menor que o número sorteado.\n`;
        } else if (palpite > numeroSorteado) {
            logTextarea.value += `Seu palpite ${palpite} é maior que o número sorteado.\n`;
        } else {
            logTextarea.value += `Acertou! O número sorteado era ${numeroSorteado}.\n`;
            jogoIniciado = false;
        }

        palpiteInput.value = '';
        palpiteInput.focus();
    }
});
