/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre=prompt ("Ingrese su nombre");
	document.getElementById("elNombre").value=nombre;
	/*en este caso para que se muestre el valor en el cuadro deseado se pone el document.getElementById("elNombre").value y luedo el "=nombre" diferente al ejercicio anterior. 
}

