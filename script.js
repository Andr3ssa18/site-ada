document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  
  if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" &&
      document.getElementById("telefone").value != ""){
    alert("prontinho! você receberá as novidades por email.")
  }else{
    alert("peça a usuaria que preencha os campos nome e email!")
  }
}
