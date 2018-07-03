/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	nombre=document.getElementById('elNombre').value;
	alert (nombre);	
}


/*lo que hicimos fue extraer del html el objeto, ingresando document.getElementById('elNombre').value; no hay que olvidarse de ingresar ".value" porque sino se importa solo el objeto y no el valor.*/