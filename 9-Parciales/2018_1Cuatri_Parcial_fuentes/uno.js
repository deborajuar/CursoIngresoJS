
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	
	ancho=prompt("ancho");
	largo=prompt("largo");
	ancho=parseInt(ancho);
	Largo=parseInt(largo);
	perimetro=ancho*2+largo*2;
	
	alert("El perímetro es "+perimetro);
}
