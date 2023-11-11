let userName = prompt('Por qual nome devo te chamar?');
let userLastName = prompt('Entendi. poderia me informar seu sobrenome também ?');
let userAge = prompt('Qual a sua idade?');




if(userName && userLastName && userAge) {
    alert(`Seu nome é ${userName} ${userLastName} e sua idade é ${userAge}`)
}
else {
    alert('hmmm... Acho que alguma cois deu errado.')
}