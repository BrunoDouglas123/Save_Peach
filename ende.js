window.alert("Agora, conclua a fase 2 de seu Cadastro")

const local = document.getElementById("local");
const street = document.getElementById("street");
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
  const localValue = local.value;
  const streetValue = street.value;
  const blockValue = block.value;
  const cityValue = city.value;
  const unityValue = unity.value;
  const ibgeValue = ibge.value;
  const numberValue = number.value;

  //Confirmação de sucesso do formulario
  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log(`CEP: ${localValue};`);
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
