function mostrar()
{
	var precio;
	var porcentaje;
	var descuentoDinero;
	var precioDescuento;
	var iva;
	var precioFinal;

	precio=prompt("Precio");
	precio=parseInt(precio);
	porcentaje=prompt("porcentaje");
	porcentaje=parseInt(porcentaje);
	descuentoDinero=(porcentaje*precio)/100;
	descuentoDinero=parseInt(descuentoDinero);
	precioDescuento=precio-descuentoDinero;
	iva=(precioDescuento*21)/100;
	iva=parseInt(iva);
	precioFinal=parseInt(precioFinal);
	precioFinal=precioDescuento+iva;
	document.getElementById('elPrecioFinal').value=precioFinal;

	alert("El descuento es de $"+descuentoDinero+". El precio con el descuento es $"+precioDescuento);



}
