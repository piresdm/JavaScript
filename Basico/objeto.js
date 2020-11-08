//Aula Objetos - Propriedades (São variáveis no objeto)

    //Criação de objeto - 1 forma (cria uma variável e abre chaves)

    var aluno = {
    nome:'Igor',
    nota:7.5
    }
    console.log(aluno.nome) //para acessar o valor que está na chave nome
    console.log(aluno['nota']) //outra forma de acessar o valor que está na chave
    console.log(aluno) //mostra todo o objeto

    //Objeto com array
    var aluno = {
        nome:'Igor',
        notas:[7.5,5.0] //array
        }
    console.log(aluno.notas[0]) //Para consultar uma posição do array
    console.log(aluno['notas'][1]) //Outra forma de consultar array

    //Add propriedade ao objeto depois que ele foi criado
    aluno.matricula = 12345 //é como add
    aluno["sobrenome"] = 'Oliveira' //outra forma de add
    console.log(aluno) //para ver que foi add


    //Criação Objeto - 2 forma

    var aluno = new Object()
    aluno.nome = 'Igor'
    console.log(aluno)

    //Com adição das infos antes fica
    var aluno = new Object({nome:'Igor'})
    console.log(aluno) //Não faz mt sentido pq se tirar o new object fica igual a lá em cima



//Aula Objetos - Métodos (São funções no objeto)

    var aluno = {
        nome:'Igor',
        notas: [5, 8],

        media: function (n1,n2){
            return ((n1+n2)/2)
        }
    }

    console.log(aluno)
    console.log(aluno.media(aluno.notas[0],aluno.notas[1]))

    //Forma para facilitar alteração da função caso haja vários objetos

    function calcMedia(n1,n2) {
        return ((n1+n2)/2)
    }

    var aluno = {
        nome:'Igor',
        notas: [7, 8],

        media: calcMedia 
    }

    var aluno1 = {
        nome:'João',
        notas: [6, 8],

        media: calcMedia 
    }

    console.log(aluno)
    console.log(aluno.media(aluno.notas[0],aluno.notas[1]))

    console.log(aluno1)
    console.log(aluno1.media(aluno1.notas[0],aluno1.notas[1]))

    //Usando THIS 

    function calcMedia() { //não precisa botar nada no ()
        return (this.notas[0]+this.notas[1])/2
    } /*o this mostra que se refere a nota que estiver dentro do objeto. Repare que essa função está fora do objeto, mas pode ser assim mesmo. Porém para que funcione, ela tem que estar ligada a propriedade do objeto, como está (foi chamada dentro do objeto sendo atribuída a propriedade media), se ela for chamada fora do objeto (através do calcMedia(), por ex) não vai funcionar.*/

    var aluno = {
        nome:'Igor',
        notas: [7, 8],

        media: calcMedia /*É a ligação da propriedade do objeto com a função que tem o this para que essa função funcione ao ser executada.*/
    }

    var aluno1 = {
        nome:'João',
        notas: [6, 8],

        media: calcMedia 
    }

    console.log(aluno)
    console.log(aluno.media()) //como usou o this, não precisa mais puxar o array detro no ()

    console.log(aluno1)
    console.log(aluno1.media())



//Aula Objeto - Construtores 

    //Automatizando o sistema acima - atenção, isso NÃO é um objeto, apenas retorna um objeto

        function criarAluno(nome, n1, n2) {
            return {
                nome: nome,
                nota1: n1,
                nota2: n2,
                media: function(){
                    return (this.nota1+this.nota2)/2
                }
            }
        }

        var turma = [
            criarAluno('Igor', 9, 6),
            criarAluno('João', 7, 4)
        ]

        var aluno = turma[1]
        console.log(aluno)
        console.log(aluno.media())

        /* Para fazer uma lista (varrer o array) usando a autmatização acima, pode fazer um for específico para array (array tb é um objeto, então ele tb tem métodos e esse forEach é um desses métodos)*/
        turma.forEach(function(elemento) {
            console.log(elemento)
        })

        //Caso queira fazer o for comum é:
        for(var aluno of turma){
            console.log(aluno)
        }

        //Se quiser uma lista bonita:
        for (var aluno of turma){
            console.log(aluno.nome + ' - ' + aluno.media())
        }
    

    //Automatizando a criação de um objeto

       function aluno(nome, n1, n2) {
            this.nome = nome
            this.nota1 = n1
            this.nota2 = n2

            this.media = function media() {
                return (this.nota1 + this.nota2) / 2
            }
        }

        var a = new aluno('Igor', 8, 7);
        /*Nesse formato a criação do aluno tem que ser através desse new. Isso se chama instanciar um objeto, ou seja, cada objeto (infos do aluno) será uma instância.*/
        console.log(a)
        
        /*Essa ultima function ta dando erro mas pq ta nesse arquivo, se levar para outro funciona.*/

