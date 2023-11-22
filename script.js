// Definicao das variaveis

//html
const html = document.querySelector('html');

//titulo
const titulo = document.querySelector( '.app__title')

//botões
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
//arrya botoes
const botoes = document.querySelectorAll('.app__card-button');


//Variaveis de Processos dentro da página 

// Variavel imagem para realizar a troca de imagens junto
const banner = document.querySelector('.app__image');

//Musica
const inputFocoMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3')

//beep de ligar e desligar
const audioPlay = new Audio ('./sons/play.wav')
const audioPause = new Audio ('./sons/pause.mp3')

//Variaveis de tempo
let tempoSegundosDecorrido = 5 ;
const btnStartPause = document.querySelector('#start-pause')
let intervaloID = null;



inputFocoMusica.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})


//Interatividade entre as páginas alterando o atributos do html 
btnFoco.addEventListener('click',() => {
    // html.setAttribute('data-contexto', 'foco')
    // banner.setAttribute('src', '/imagens/foco.png')
    alterarContexto('foco')
    //metodo para deixar dinâmico o estilo 
    btnFoco.classList.add('active')
})

btnCurto.addEventListener('click', () => {
    // html.setAttribute('data-contexto','descanso-curto')
    // banner.setAttribute('src','/imagens/descanso-curto.png')
    alterarContexto('descanso-curto')
    btnCurto.classList.add('active')
})
btnLongo.addEventListener('click',() =>{
    // html.setAttribute('data-contexto', 'descanso-longo')
    // banner.setAttribute('src','/imagens/descanso-longo.png')
    alterarContexto('descanso-longo')
    btnLongo.classList.add('active')
})


    //função para ativação com o botão 
    
    function alterarContexto(contexto) {
        botoes.forEach(function (contexto) {
            contexto.classList.remove('active')
    })
    

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

const contagemRegressiva = () => {
    if(tempoSegundosDecorrido <= 0) {
    zerar();
    alert('Tempo finalizado')
    return
    } 
   // iniciar();
    tempoSegundosDecorrido -= 1;
    console.log(`Tempo decorrido em segundos ${tempoSegundosDecorrido}`)
}




//evento preisa ser feito após a criação do que tem que se realizar
btnStartPause.addEventListener('click', iniciarOuPausar) 

//funcçai de iniciar e pausar a contagem 
function iniciarOuPausar() {
    if(intervaloID) {
        audioPause.play();
        zerar()
        return
    } 
        audioPlay.play();
        intervaloID = setInterval( contagemRegressiva, 1000 )
}
function zerar() {
    clearInterval(intervaloID)
    intervaloID = null;
}