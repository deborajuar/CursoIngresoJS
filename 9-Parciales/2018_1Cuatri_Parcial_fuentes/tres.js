function mostrar()
{
	var precio;
	var porcentaje;
	var precioFinal;

	precio=prompt("Precio");
	porcentaje=prompt("Porcentaje");
	precioFinal=precio-(porcentaje*precio/100);
	precio=parseInt(precio);
	porcentaje=parseInt(porcentaje);
	document.getElementById('elPrecioFinal').value=precioFinal;
}
