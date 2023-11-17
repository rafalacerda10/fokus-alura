// Definicao das variaveis em planejamento

const html = document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');

//Interatividade entre as páginas alterando o atributos do html 
btnFoco.addEventListener('click',() => {
    html.setAttribute('data-contexto', 'foco')
})

btnCurto.addEventListener('click', () => {
    html.setAttribute('data-contexto','descanso-curto')
})
btnLongo.addEventListener('click',() =>{
    html.setAttribute('data-contexto', 'descanso-longo')
})

