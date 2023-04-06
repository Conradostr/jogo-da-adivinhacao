//variaveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

//funções
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 ){
    alert("Por favor, escreva um numero entre 0 e 10 ")
  }else if(inputNumber.value == ""){
    alert("Por favor, digite um numero entre 0 e 10")
  }else{
    console.log(inputNumber.value)
    console.log(attempts)
    console.log(randomNumber)
    if(Number(inputNumber.value) == randomNumber) {
      toggleScreen()
      document.querySelector(".screen2 h2").innerText = `Você acertou em ${attempts} tentativas`
    }
  }

  inputNumber.value = ""
  attempts++
}

function handleResetClick(){
  toggleScreen()
  attempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function resetOnEnter(e){
  if(e.key == 'Enter' && screen1.classList.contains("hide")){
    handleResetClick()
  }
}

//eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', resetOnEnter)
