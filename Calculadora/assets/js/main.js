const tela = document.getElementById("numeros");
var numero = '';

function valor(a){
    numero += a;
    tela.innerHTML = numero;
}

function resultado(){
    var resultado = eval (numero); // computa um código JavaScript representado como uma string
    numero = resultado;
    tela.innerHTML = resultado;
}

function limpar(){
    numero = 0;
    tela.innerHTML = numero;
}