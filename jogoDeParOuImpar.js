var parOuImpar;
var jogador1 
var jogador2

parOuImpar = prompt('Escolha par ou impar: ')
jogador1 = parseInt(prompt('Digite um número entre 1 e 5'))
jogador2 = parseInt(prompt('Digite um número entre 1 e 5'))
if(parOuImpar === 'par' && (jogador1 + jogador2)%2 === 0){
    alert('Jogador 1 venceu no par ou impar')
}
else if(parOuImpar === 'par' && (jogador1 + jogador2)%2 !== 0){
    alert('Jogador 2 venceu no par ou impar')
}
else if(parOuImpar === 'impar' && (jogador1 + jogador2)%2 !== 0){
    alert('Jogador 1 venceu no par ou impar')
}
else if(parOuImpar === 'impar' && (jogador1 + jogador2)%2 === 0){
    alert('Jogador 2 venceu no par ou impar')
}
