window.alert("Agora, conclua a fase 2 de seu Cadastro")

const cep = document.getElementById("cep");
const rua = document.getElementById("rua");
const block = document.getElementById("block");
const city = document.getElementById("city");
const unity = document.getElementById("unity");
const ibge = document.getElementById("ibge");
const number = document.getElementById("number");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs() {
  const cepValue = cep.value;
  const streetValue = street.value;
  const blockValue = block.value;
  const cityValue = city.value;
  const unityValue = unity.value;
  const ibgeValue = ibge.value;
  const numberValue = number.value;

    //Exigência de username
    if (usernameValue === "") {
        setErrorFor(cep, "O CEP é obrigatório.");
    } else if (cepValue.length < 3 || usernameValue.length > 8) {
        setErrorFor(cep, "CEP invalido.");
    } else {
        setSuccessFor(cep);
    }

  //Confirmação de sucesso do formulario
  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log(`CEP: ${cepValue};`);
    console.log(`Rua: ${streetValue};`);
    console.log(`Bairro: ${blockValue};`);
    console.log(`Cidade: ${cityValue};`);
    console.log(`UF: ${unityValue};`);
    console.log(`IBGE: ${ibgeValue};`);
    console.log(`DDD: ${numberValue};`);

  } else {
    document.querySelector('#login').disabled = true;
  }
}  

var filtroTeclas = function(event) {
    return (
    (event.charCode >= 48 && event.charCode<= 57) || 
    (event.keyCode == 45 || event.charCode == 46))
}

function limpa_formulario_cep() {
    //Limpa valores do formulario de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
    document.getElementById('ddd').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
    document.getElementById('ibge').value=(conteudo.ibge);
    document.getElementById('ddd').value=(conteudo.ddd);
} //end if.
else {
    //CEP nao Encontrado.
    limpa_formulario_cep();
    alert("CEP nao encontrado.");
    }
}

function pesquisacep(valor) {

//Nova variavel "cep" somente com digitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressao regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";
        document.getElementById('ibge').value="...";
        document.getElementById('ddd').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteudo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é invalido.
        limpa_formulario_cep();
        alert("Formato de CEP invalido.");
    }
} //end if.
    else {
        //cep sem valor, limpa formulario.
        limpa_formulario_cep();
    }
};


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
  
    // Adiciona a mensagem de erro
    small.innerText = message;
  
    // Adiciona a classe de erro
    formControl.className = "form-control error";
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
  
    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
}

  function setSuccessFor(input) {
    const formControl = input.parentElement;
  
    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
}