// Definicao das variaveis em planejamento

const html = document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');

// Variavel imagem para realizar a troca de imagens junto
const banner = document.querySelector('.app__image');


//Interatividade entre as páginas alterando o atributos do html 
btnFoco.addEventListener('click',() => {
    // html.setAttribute('data-contexto', 'foco')
    // banner.setAttribute('src', '/imagens/foco.png')
    alterarContexto('foco')
})

btnCurto.addEventListener('click', () => {
    // html.setAttribute('data-contexto','descanso-curto')
    // banner.setAttribute('src','/imagens/descanso-curto.png')
    alterarContexto('descanso-curto')
})
btnLongo.addEventListener('click',() =>{
    // html.setAttribute('data-contexto', 'descanso-longo')
    // banner.setAttribute('src','/imagens/descanso-longo.png')
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src',`/imagens/${contexto}.png`)
}

