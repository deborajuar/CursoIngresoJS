function mostrar()
{

	var divisores;
	var numeroIngresado;
	var numeroAnterior;
	var numeroRecoridos;

	divisores=0;
	numeroIngresado=prompt("Ingrese numero");
	numeroAnterior=parseInt(numeroIngresado);

	for(numeroRecoridos=numeroIngresado;numeroRecoridos>1;numeroRecoridos--);
	{
		divisires=0;
		for(numerosAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--);
		{
			if(numeroRecoridos%numeroAnterior==0)
			{
				divisores++;
				break;
			}
		}

	}


	
	for(numerosAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
	{
		if(numeroIngresado%numeroAnterior==0)
		{
			divisores++;
			break;
		}

	if(divisores==0)
	{
		console.log("es primo");
	}
	else
	{
		console.log("no es primo");
	}	



}//FIN DE LA FUNCIÓN