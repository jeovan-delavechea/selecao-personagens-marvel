/*
ANTES: temos que criar as variáveis dos elementos a serem manipulados

OBJETIVO - quando passar o mouse por cima do personagem, temos que:
    
    - colocar a classe selecionado no personagem que passarmos o mouse em cima, para adicionar a animação nele

    - remover a classe selecionado do elemento inicial 

    - alterar a imagem do jogador 1
    
    - alterar o nome do jogador 1
*/

const personagens = document.querySelectorAll('.personagem');



personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;
        if(idSelecionado === 'ultron') return;

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        
        personagem.classList.add('selecionado');

         
         const imagemJogador1 = document.getElementById('personagem-jogador-1');
         imagemJogador1.src = `src/imagens/${idSelecionado}.png`;

         const nomeJogador1 = document.getElementById('nome-jogador-1')
         const nomeSelecionado = personagem.getAttribute('data-name')

         nomeJogador1.innerHTML = nomeSelecionado;
    })
})


