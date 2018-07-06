
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base=prompt("Base");
	base=parseInt(base);
	altura=prompt("Altura");
	altura=parseInt(altura);
	superficie=(base*altura)/2;
	perimetro=base*3;
	alert("El perímetro es "+perimetro+" La superficie es "+superficie);

}
