/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	/*var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	parseInt(numeroUno);
	parseInt(numeroDos);
	resultado=parseInt(numeroUno)+parseInt(numeroDos);
	alert("La suma es "+resultado);*/

	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos;
	alert(resultado);

/*el signo + es java sirve para dos cosas, para sumar para concatenar.
se puede pasar a un numero de dos formas 1. TRANSFORMAR VALOR 2. esta funcion lo que hace es "devolver",
 no transformar como la anterior... esta función es la paseInt. 

*/

}
	
