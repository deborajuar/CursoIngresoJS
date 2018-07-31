/*

jose m 25 
maria f 15
jesus m 33
fer f 81





*/
function mostrar()
{
	var sexo;
	var edad;
	var contador;
	var nombre;
	var cantidadMujeres;
	var cantidadHombres;
	var cantidadMayores;
	var cantidadMenores;

	contador=0;
	cantidadHombres=0;
	cantidadMujeres=0;
	cantidadMenores=0;
	cantidadMayores=0;



	while(contador<4)
	{
		contador++;
		nombre=prompt("Ingrese nombre valido");

		sexo=prompt("Ingrese sexo valido");
		while(sexo!="m"&&sexo!="f")
		{
			sexo=prompt("Ingrese sexo valido");
		}

		edad=prompt("ingrese edad");
		edad=parseInt(edad);
		while(isNaN(edad)||edad<0||edad>100)
		{
			edad=prompt("ingrese edad");
			edad=parseInt(edad);
		}

		if(sexo=='f')
		{
			cantidadMujeres++;
		}
		else
		{
			cantidadHombres++;
		}
		if(edad>=18)
		{
			cantidadMayores++;
		}
		else
		{
			cantidadMenores++;
		}
	}	

	document.write("<br>La cantidad de mujeres es: "+cantidadMujeres);
	document.write("<br>La cantidad de hombres es: "+cantidadHombres);
	document.write("<br>La cantidad de mayores es: "+cantidadMayores);
	document.write("<br>La cantidad de Menores es: "+cantidadMenores);
}
