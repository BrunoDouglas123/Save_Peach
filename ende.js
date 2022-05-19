window.alert("Agora, conclua a fase 2 de seu Cadastro")

const local = document.getElementById("local");
const street = document.getElementById("street");
const block = document.getElementById("block");
const city = document.getElementById("city");
const unity = document.getElementById("unity");
const ibge = document.getElementById("ibge");
const number = document.getElementById("number");

  const localValue = local.value;
  const streetValue = street.value;
  const blockValue = block.value;
  const cityValue = city.value;
  const unityValue = unity.value;
  const ibgeValue = ibge.value;
  const numberValue = number.value;

  const inputName = document.querySelector("#local");

  console.log(inputName);

  inputName.addEventListener("keypress", function(e) {
    
    const keyCode = (e.keyCode ? e.keyCode : e.width);

    console.log(keyCode);

    if(keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }

  });
