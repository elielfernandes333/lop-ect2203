var jogador1 = prompt('papel, pedra ou tesoura?')
var jogador2 = prompt('papel, pedra ou tesoura?')

if(jogador1 === 'papel' && jogador2 === 'pedra'){
    alert('Jogador 1 venceu o papel, pedra ou tesoura')
}
else if(jogador1 === 'pedra' && jogador2 === 'papel'){
    alert('Jogador 2 venceu o papel, pedra ou tesoura')
}
else if(jogador1 === 'pedra' && jogador2 === 'tesoura'){
    alert('Jogador 1 venceu o papel, pedra ou tesoura')
}
else if(jogador1 === 'tesoura' && jogador2 === 'pedra'){
    alert('Jogador 2 venceu o papel, pedra ou tesoura')
}
else if(jogador1 === 'tesoura' && jogador2 === 'papel'){
    alert('Jogador 1 venceu o papel, pedra ou tesoura')
}
else if(jogador1 === 'papel' && jogador2 === 'tesoura'){
    alert('Jogador 2 venceu o papel, pedra ou tesoura')
}
else if(jogador1 === jogador2){
    alert('Empate')
}
