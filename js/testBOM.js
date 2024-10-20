//1. test querySelector
const element = document.querySelector('.pink')
console.log(element.textContent)

const element1 = document.getElementById('mybutton')
console.log(element.textContent)

const element2 = document.getElementsByClassName('pink')
console.log(element2)

const element3 = document.getElementsByTagName('button')
console.log(element3)

const elementList = document.querySelectorAll('.pink')
console.log(elementList)


