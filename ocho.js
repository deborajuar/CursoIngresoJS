function mostrar()
{
	var titulo;
	var cantidadCapitulos;
	var tipo;
	var respuesta;
	var SeriesCapitulosPares;
	var masCapìtulos;
	var primerSerie;


	respuesta=="n";

		while(respuesta!="n")
		{

			titulo=prompt("ingrese titulo");
			cantidadCapitulos=prompt("ingrese cantidad de capitulos");
			while(isNaN(cantidadCapitulos)||cantidadCapitulos<0)
			{			
				cantidadCapitulos=prompt("ingrese cantidad de capitulos");
			}
			tipo=prompt("ingrese tipo");
			while(tipo!="d"&&tipo!="t"&&tipo!="c"&&tipo!="o")
			{
				tipo=prompt("ingrese tipo");
			} 

			if(cantidadCapitulos%2==0)
			{
				SeriesCapitulosPares++;
			}
			if(primerSerie==0)
			{
				primerSerie=1;
				masCapìtulos=cantidadCapitulos;
				masCapìtulosNombre=nombre;
			}








			respuesta=prompt("Ingrese n para salir");

		}










	alert("comentar esta linea 8");
}
/*

8-(2pts.) Realizar un algoritmo que pide el ingreso de varias series televisivas, de las cuales 
se pide el título, 
la cantidad de capítulos (más de 0) 
y el tipo (‘d’ = drama, ‘t’ = triller, ‘c’ = comedia y ‘o’ = otras).
 Se pide 
informar:
a- la cantidad de series con capítulos pares.
b- el nombre de la que tiene más capítulos.
c- el tipo de la que tiene menos capítulos.
d- el promedio de capítulos entre todas las ingresadas. 
  	
*/
