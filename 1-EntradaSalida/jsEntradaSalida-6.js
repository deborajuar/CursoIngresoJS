/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	var numerouno;
	var numerodos;
	var resultado;
	numerouno=document.getElementById('numeroUno').value;
	numerodos=document.getElementById('numeroDos').value;
	parseInt(numerouno);
	parseInt(numerodos);
	resultado=parseInt(numerouno)+parseInt(numerodos);
	console.log("La suma es "+resultado);
	alert("La suma es "+resultado);


}
	
