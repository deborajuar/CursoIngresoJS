function mostrar()
{

	var ancho;
	var nombre;
	var alto;
	var peso;

	contador=0

	while(contador<5)
	{
		nombre=prompt("ingrese nombre");
		
		alto=prompt("ingrese alto");
		alto=parseInt(alto);

		while(isNaN(alto)||alto<0||alto>10)
		{
			alto=prompt("ingrese alto");
			alto=parseInt(alto);

		}
	}


	alert("comentar esta linea 7");
}
/*7-(2pts.) Realizar un algoritmo que permita el ingreso 

del nombre,
 el ancho,
  el alto y 
  el peso de 5 productos .Validar todos los datos, sabiendo que no puede tener más de 10 de ancho y 10 de alto, y su peso no puede superar los 1000 kilos. Informar: 
a- el peso más pesado
b- la altura más alta
c- el menor ancho.
d- la cantidad que tiene un peso entre 300 y 600 kilos.*/




