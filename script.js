let result = prompt('Adivinhe o número que estou pensando. Está entre 0 e 10')
const random = Math.round(Math.random() * 10)
let attempt = 1


while (Number(result) != random){
  result = prompt('Erro, tente novamente')
  attempt += 1
}

alert(`Parabéns! O número que pensei foi ${random}. Você acertou em ${attempt} tentativas`)