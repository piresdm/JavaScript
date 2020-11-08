let lista = document.getElementById('lista')
let num = parseInt(lista.getAttribute('num')) // para usar a forma descrita lá em baixo, no parênteses usa data-num
//esse parseInt foi pra transformar de string pra num
/*aqui ele puxou qual o número que estava em num lá no HTML, se você alterar lá, automaticamente ele altera o resultado no navegador*/

let conteudo = ''

for(let i = 0; i < num; i++){
    conteudo += '<li>' + i + '</li>'

}
lista.innerHTML = conteudo

/*Outra forma de mexer em um atributo já esperado ou em um inventado como foi o num aqui, é usando data-num no
lugar de num e aí quando você bota o data, você pode puxar de outra maneira, que é usando let num = parseInt(lista.dataset.num)
Aqui você pode ainda definir o num ao invés de definir lá no HTML, para isso usa lista.dataset.num = 4, por exemplo*/