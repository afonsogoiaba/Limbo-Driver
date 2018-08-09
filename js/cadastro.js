// script para finalizar cadastro e logar

document.querySelector("#btnRegistro").onclick = function(evt){
	var nome = document.querySelector("#nome").value;
	var usuario = document.querySelector("#usuario").value;
	var senha = document.querySelector("#senha").value;
	var email = document.querySelector("#email").value;
	var tel = document.querySelector("#tel").value;

	if (!nome && !usuario && !senha && !email && !tel) {
		alert('Você deixou de preencher alguns campos obrigatórios!');
	}else{
		alert('Realizamos seu cadastro');
		window.location.href = "login.html";
	}
}