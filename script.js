// Definicao das variaveis
//html
const html = document.querySelector('html');
//titulo
const titulo = document.querySelector( '.app__title')

//botões
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
//arrys botoes
const botoes = document.querySelectorAll('.app__card-button');

//BOTÃO COMEÇAR
const iniciarOuPausarBtIcone = document.querySelector(".app__card-primary-butto-icon") 
const BtnInicioPausa = document.querySelector('#start-pause span')



// Variavel imagem para realizar a troca de imagens junto
const banner = document.querySelector('.app__image');

//Musica
const inputFocoMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3')

//beep de ligar e desligar
const audioPlay = new Audio ('./sons/play.wav')
const audioPause = new Audio ('./sons/pause.mp3')
const finalizadoTempo = new Audio ('./sons/beep.mp3')

//Variaveis de tempo
let tempoSegundosDecorrido = 1500
const btnStartPause = document.querySelector('#start-pause')
let intervaloID = null;

// Variavel html 

// variavel img
const imagemPlay = document.querySelector('#start-pause img')




//timer
const tempoTela = document.querySelector('#timer')

musica.loop = true;

inputFocoMusica.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})


//Interatividade entre as páginas alterando o atributos do html 
btnFoco.addEventListener('click',() => {
    tempoSegundosDecorrido = 1500;
    alterarContexto('foco');
    btnFoco.classList.add('active');
    alterarContexto('foco');
})

// Interatividade descanso curto
btnCurto.addEventListener('click', () => {
    tempoSegundosDecorrido = 300;
    alterarContexto('descanso-curto');
    btnCurto.classList.add('active');
   
})
// Interatividade descanso longo
btnLongo.addEventListener('click',() =>{
    tempoSegundosDecorrido = 900;
    alterarContexto('descanso-longo')
    btnLongo.classList.add('active')


})


//função para ativação com o botão    
    function alterarContexto(contexto) {
        mostrarTempo()
        botoes.forEach (function (contexto){
        contexto.classList.remove('active')
    }
    )
    

    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src',`/imagens/${contexto}.png`)

    // Utilizar o switch para dependente de cada caso 

    switch (contexto) {
        case "foco":
            titulo.innerHTML =
            `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">
                mergulhe no que importa.
            </strong>
            `
            break;
            case "descanso-curto":
                titulo.innerHTML = 
                `
                    Que tal dar uma respirada?
                    <strong class="app__title-strong">
                        Faça uma pausa curta!
                    </strong>
                `
            break;

            case "descanso-longo":
                titulo.innerHTML =
                `
                Hora de voltar à surpefície.
                <strong class="app__title-strong">
                    Faça uma pausa longa.
                </strong>
                `
            break;
        default:
            break;
    }
}

//Contagem regresiva
const contagemRegressiva = () => {
    if(tempoSegundosDecorrido <= 0) {
    finalizadoTempo.play();
    alert('Tempo finalizado')
    zerar();
    return
    } 
   // iniciar();
    tempoSegundosDecorrido -= 1;
    mostrarTempo();
}



//evento preisa ser feito após a criação do que tem que se realizar
btnStartPause.addEventListener('click', iniciarOuPausar) 

//funçao de iniciar e pausar a contagem 
function iniciarOuPausar() {
    if(intervaloID) {
        audioPause.play();
        zerar()
        return
    }
        audioPlay.play();
        intervaloID = setInterval( contagemRegressiva, 1000 )
        BtnInicioPausa.textContent = "Pausar"
        iniciarOuPausarBtIcone.setAttribute('src', `/imagens/pause.png`)
}
       

function zerar() {
    clearInterval(intervaloID)
    iniciarOuPausarBtIcone
    intervaloID = null;
    BtnInicioPausa.textContent = "Começar"
    imagemPlay.innerHTML = `${tempo}`;
    
 

}

function mostrarTempo() {
    const tempo = new Date(tempoSegundosDecorrido * 1000)
    const tempoFormatado =  tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second:'2-digit'})
    tempoTela.innerHTML = `${tempoFormatado}`
}
mostrarTempo()