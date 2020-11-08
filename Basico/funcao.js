//Aula Funções

//Criar uma função - 1 forma

function media() { //Declaração da função
 //Para criar a função tem que ter esse parenteses
    var nota1 = 10
    var nota2= 8
    var media = (nota1 + nota2) / 2
    console.log(media) 
}

media() //Execução da função -tb precisa dos parênteses

    //Colocando argumentos (o que fica dentro do parênteses) variáveis

    function med(n1,n2) { //qd a declaração da variável for como argumento, não precisa do var
           var med = (n1+n2) / 2
           console.log(med) 
       }
    med(6,7) 
    med(8,7) 

       //de outra forma...

       function media2(n1,n2) { 
        var med = (n1+n2) / 2
        
        return med
       }

       var resultado1  = media2(10,7) //Quando coloca return a forma de executar a função é criando uma variável 
       var resultado2  = media2(2,7)
       
       console.log(resultado1 + " E " + resultado2)
       console.log(resultado1 + resultado2)// Ao invés de escrever, somar os resultados


//Aula Funções Parte 2

function saudacao(){
    return 'Olá Mundo!'
}

var s = saudacao() /*Para exec a função assim, usa o parênteses tb, se não usar ele imprime a função inteira, não o resultado dela. Nesse caso, a função seria uma variável e se quisesse imprimir seu resultado era só fazer var s = saudacao console.log(s()) */
console.log(s)

//Criar Função - 2 forma (colocando uma função dentro de uma variável.)

var media = function (n1,n2){ //assim não precisa nomear a função, pq ja nomeou na variável
    return (n1+n2)/2
}
    console.log(media(5,6))
    //ou
    var m = media(4,8) 
    console.log(m)


//Criar Função - 3 forma

var media = (n1,n2) => {  //no lugar do function entra o =>
    return (n1+n2)/2
}
    console.log(media(5,6))
    //ou
    var m = media(4,8) 
    console.log(m)