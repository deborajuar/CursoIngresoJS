function mostrar()
{
	var notas=0;
	var contador=0;
	var acumulador=0;
	var edad=0;
	var sexo;
	var promedio=0;
	var notaBaja=0;
	var notaAlta=0;
	var cantidadhombres=0;


	while(contador<5)
	{
		notas=prompt("Ingrese nota");
		notas=parseInt(notas);
			
			while(notas<0||notas>10)
				{
					alert("Ingrese nota valida")

				}

			if(contador==1)
				{

					notaAlta=notaBaja;
				}
			else
				{
					if(notas<notaBaja)
					{
						notaBaja=notaBaja;
					}
					
				}
		contador++;
		acumulador=acumulador+notas;
	}
	
promedio=acumulador/contador;
document.write("promedio"+promedio);
document.write("nota màs baja"+notaBaja);
}
/*Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10),la edad y el sexo (validar el sexo “f” o “m”)
 de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones mayores a 18, que su nota */