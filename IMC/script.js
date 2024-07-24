//depois de criado o html, definida a estrutura do site, faremos o script

//aqui definiremos o que o botão criado que está na estrutura html "calcular" fará:
window.onload = function(){ //assim que a janela for carregada, a função será ativada
    document.getElementById("calcular").addEventListener("click", function(){ //assim que a função for disparada (de cliclar no botão, vou chamar outra função:)
        peso = document.getElementById("peso").value; //recuperando o num1 do html de acordo com o id e informando que quero capturar o valor dele pelo '.value'
        altura = document.getElementById("altura").value;
        //nos dois de cima, a variável recebe o valor 'value' que for digitado pelo usuário, no de baixo o value recebe o valor do cáluco do imc.
        resultado = document.getElementById("result").value = parseFloat(peso) / (parseFloat(altura)*parseFloat(altura)/10000); //estou acessando o result através do document.getelemtbyid (id) e dando um valor para ele.
        //o parseFloat por se tratar de um resultado com vírgula
        if (resultado < 18.5) //definindo os parâmetros para mostrar o resultado de acordo com a tabela de imc
            alert("Abaixo do peso")
        else if (resultado <=24.9)
            alert("Peso normal")
        else if (resultado <29.9)
            alert("Sobrepeso")
        else if (resultado >= 30)
            alert("Obesidade")

    })
    
    document.getElementById("limpar").addEventListener("click", function(){ //ao clicar no botão limpar, atribui o valor vazio aos campos de digitação de peso, altura e resultado
        peso = document.getElementById("peso").value=("");
        altura = document.getElementById("altura").value=("");
        resultado = document.getElementById("result").value=("");
    })

}



//tentei fazer a função de validação para que não permitisse caracteres diferentes de números ou maiores que 3 dígitos, mas não consegui fazer rodar no site.

function limpa_formulario(){ //definindo função que limpa o conteúdo dos campos do formulario
    document.getElementById("peso").value=("");
    document.getElementById("altura").value=("");
}

function validapeso(valor){
    var peso = valor.replace(/\D/g,'')
        if (peso != ""){
            var validapeso = /^[0-9]{1-3}$/;
            if(validapeso.test(peso)){
                document.getElementById("peso").value=(peso);
        
            }else {
                limpa_formulario();
                alert("Peso inválido");
            }

        }else {
        limpa_formulario();
        }
}

function validaaltura(valor){
    var altura = valor.replace(/\D/g,'')
        if (altura != ""){
            var validaaltura = /^[0-9]{1-3}$/;
            if(validaaltura.test(peso)){
                document.getElementById("altura").value=(altura);
        
            }else {
                limpa_formulario();
                alert("Altura inválida");
            }

        }else {
        limpa_formulario();
        }
}