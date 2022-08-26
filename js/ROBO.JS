let robotron=document.querySelector("#robo")
robotron.addEventListener("click", dizer)// não colcar () na função pos quando coloca é feito a chamada em tempo de execução  

function dizer (){
    console.log("oi safada")
}

let braco = document.querySelector('#braco')//seleciona o elemento todas suas caracteristicas
let somar = document.querySelector('#somar')
let sub = document.querySelector('#subtrair')

//somar.addEventListener("click",()=>{manipuladados("+")}// adiciona um evento o addeventlistener e parametro e tipo click mais a função
//)




let controle = document.querySelectorAll(".controle-ajuste")
controle.forEach((element) => {
    element.addEventListener("click",(evento)=>{
        manipuladados(evento.target.textContent,evento.target.parentNode)// pega o texto que está no html 
    })
});
function manipuladados(operacao,controle){
   let peca = controle.querySelector(".controle-contador")
    if("+"===operacao){
        peca.value= parseInt(peca.value)+1
    }
    else{
        peca.value= (parseInt(peca.value)>=1)? parseInt(peca.value)-1:00
    }
}