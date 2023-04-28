       /*
	   Resultado abaixo de 17 - Muito abaixo do peso;
	   Resultado entre 17 e 18,49 - Abaixo do peso;
	   Resultado entre 18,5 e 24,99 - Peso ideal;
	   Resultado entre 25 e 29,99 - Sobrepeso;
	   Resultado entre 30 e 34,9 - Obesidade 1ºgrau;
	   Resultado entre 35 e 39,9 - Obesidade 2ºgrau (severa);
	   Resultado acima de 40 - Obesidade 3ºgrau (mórbida).
	   */
	   var altura;
	   var peso;
	   var imc;
	   var resultado;
	   
	   function calcular(event){
		   event.preventDefault();
		   
		   peso = parseFloat(document.getElementById("peso").value);
		   altura = parseFloat(document.getElementById("altura").value);
		   
		   imc = peso / (altura * altura);
		   
		   resultado = document.getElementById("resultado");
		   
		   if (imc < 17) {
			   resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado você está muito abaixo do peso!";
		   } else if (imc >= 17 && imc <= 18.49) {
			   resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está abaixo do peso!";
		   } else if (imc >= 18.5 && imc <= 24.99) {
			   resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está no peso ideal!";
		   } else if (imc >= 25 && imc <= 29.99) {
			   resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado você está com sobrepeso!";
		   } else if (imc >= 30 && imc <= 34,99) {
			   resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, obesidade 1ºgrau!";
		   } else if (imc >= 35 && imc <= 39,99) {
			   resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, obesidade 2ºgrau (severa)!";
		   } else if (imc >= 40) {
			   resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, obesidade 3ºgrau (mórbida)!";
		   }	

           document.getElementById("peso").value = "";
           document.getElementById("altura").value = "";		   
	   }