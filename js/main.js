let controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")

console.log(estatisticas)
const pecas ={
"braco":{
    "forca":29,
    "poder":35,
    "energia":-21,
    "velocidade":-5
},
"blindagem":{
    "forca":41,
    "poder":20,
    "energia":0,
    "velocidade":-20
},
"nucleo":{
    "forca":0,
    "poder":7,
    "energia":40,
    "velocidade":-4
},
"perna":{
    "forca":27,
    "poder":21,
    "energia":-32,
    "velocidade":43
},"foguete":{
    "forca":0,
    "poder":28,
    "energia":0,
    "velocidade":-2
}








}
controle.forEach((element) => {
    element.addEventListener("click",(evento)=>{
       console.log(evento.target.dataset.controle)
       console.log(evento.target.parentNode)
        manipuladados(evento.target.dataset.controle,evento.target.parentNode)// pega o que esta na propriedade data-controle 
        console.log(evento.target.dataset.peca)
        atualizarpropriedadesdorobo(evento.target.dataset.peca)
    })
});
function manipuladados(operacao,controle){// RECEBE O VALOR DATA-CONTOROLE E O ELEMENTO PAI QUE FOI CLICADO
   const peca = controle.querySelector("[data-contador]")
    if("+"===operacao){
        peca.value= parseInt(peca.value)+1
    }
    else{
        peca.value= (parseInt(peca.value)>=1)? parseInt(peca.value)-1:00
    }
}

function atualizarpropriedadesdorobo(peca){

estatisticas.forEach((elemento)=>{
elemento.textContent= parseInt(elemento.textContent)+pecas[peca][elemento.dataset.estatistica]

})
}