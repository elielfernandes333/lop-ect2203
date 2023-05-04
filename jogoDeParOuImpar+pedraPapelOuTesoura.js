var parOuImpar;
var jogador1 
var jogador2
var vencedorParcial1
var vencedorParcial2
var ppt1
var ppt2

parOuImpar = prompt('Escolha par ou impar: ')
jogador1 = parseInt(prompt('Digite um número entre 1 e 5'))
jogador2 = parseInt(prompt('Digite um número entre 1 e 5'))
if(parOuImpar === 'par' && (jogador1 + jogador2)%2 === 0){
    vencedorParcial1 = 'Jogador 1'
}
else if(parOuImpar === 'par' && (jogador1 + jogador2)%2 !== 0){
    vencedorParcial1 = 'Jogador 2'
}
else if(parOuImpar === 'impar' && (jogador1 + jogador2)%2 !== 0){
    vencedorParcial1 = 'Jogador 1'
}
else if(parOuImpar === 'impar' && (jogador1 + jogador2)%2 === 0){
    vencedorParcial1 = 'Jogador 2'
}

ppt1 = prompt('papel, pedra ou tesoura?')
ppt2 = prompt('papel, pedra ou tesoura?')

if(ppt1 === 'papel' && ppt2 === 'pedra'){
    vencedorParcial2 = 'Jogador 1'
}
else if(ppt1 === 'pedra' && ppt2 === 'papel'){
    vencedorParcial2 = 'Jogador 2'
}
else if(ppt1 === 'pedra' && ppt2 === 'tesoura'){
    vencedorParcial2 = 'Jogador 1'
}
else if(ppt1 === 'tesoura' && ppt2 === 'pedra'){
    vencedorParcial2 = 'Jogador 2'
}
else if(ppt1 === 'tesoura' && ppt2 === 'papel'){
    vencedorParcial2 = 'Jogador 1'
}
else if(ppt1 === 'papel' && ppt2 === 'tesoura'){
    vencedorParcial2 = 'Jogador 2'
}
else if(ppt1 === ppt2){
    vencedorParcial2 = 'Empate'
}else{

}

if(vencedorParcial1 === 'Jogador 1' && vencedorParcial2 === 'Jogador 1'){
    alert('Jogador 1 venceu no par ou impar\nJogador 1 venceu no papel, pedra ou tesoura\nResultado Final: Jogador 1 venceu')
}
else if(vencedorParcial1 === 'Jogador 2' && vencedorParcial2 === 'Jogador 2'){
    alert('Jogador 2 venceu no par ou impar\nJogador 2 venceu no papel, pedra ou tesoura\nResultado Final: Jogador 2 venceu')
}
else if(vencedorParcial1 === 'Jogador 1' && vencedorParcial2 === 'Jogador 2'){
    alert('Jogador 1 venceu no par ou impar\nJogador 2 venceu no papel, pedra ou tesoura\nResultado Final: Empate')
}
else if(vencedorParcial1 === 'Jogador 2' && vencedorParcial2 === 'Jogador 1'){
    alert('Jogador 2 venceu no par ou impar\nJogador 1 venceu no papel, pedra ou tesoura\nResultado Final: Empate')
}
else if(vencedorParcial2 === 'Empate' && vencedorParcial1 === 'Jogador 1'){
    alert('Jogador 1 venceu no par ou impar\nEmpate no papel, pedra ou tesoura\nResultado Final: Jogador 1 venceu')
}
else if(vencedorParcial2 === 'Empate' && vencedorParcial1 === 'Jogador 2'){
    alert('Jogador 2 venceu no par ou impar\nEmpate no papel, pedra ou tesoura\nResultado Final: Jogador 2 venceu')
}
