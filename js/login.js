// script para logar

document.querySelector("#btnEntrar").onclick = function(evt){
	var usuario = document.querySelector('#usuario').value;
	var senha = document.querySelector('#senha').value;

	if (!usuario && !senha){
		alert('Você esqueceu de digitar seu nome de usuario ou sua senha');
	}else{
		alert('Você entrou, '+ usuario+'!');
		window.location.href = "limbo.html";
	}
}