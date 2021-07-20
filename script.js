//recebe o evento de teclado de qualquer local da página
document.body.addEventListener('keyup', (event) => {

    //executa a função passando o evento recebido
    playsound(event.code.toLocaleLowerCase());
});

//executa ação com click no elemento identificado
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.getElementById('input').value; //traz o valor recebido no input

    //executa a função de composição
    if (song !== '') {
        let songArray = song.split(''); //transforma o valeu do input em array
        playComposition(songArray);
    }
});

//função responsável por receber o evento do teclado e executar audio correspondente
function playsound(sound) {
    //busca no html os elementos correspondentes ao evento
    let audioElement = document.getElementById(`s_${sound}`); 
    let keyElement = document.querySelector(`div[data-key="${sound}"]`); //busca um elemento div, com atribuito data-key, com valor determinado

    //reproduz audio quando o evento é válido
    if (audioElement) {
        audioElement.currentTime = 0; //seta o tempo do audio ao pressionar alguma tecla
        audioElement.play();
    }

    //adiciona classe ao elemento identificado
    if (keyElement) {
        keyElement.classList.add('active');

        //retira a classe do elemento após tempo determinado
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

//função responsável por receber a composição e executar corretamente
function playComposition(songArray) {
    let wait = 0;

    //executa cada item do array
    for (let songItem of songArray) {
        //tempos para exercutar os itens
        setTimeout(() => {
            playsound(`key${songItem}`);
        }, wait);

        wait += 250; //adiciona 250ms a cada loop 
    }
}

