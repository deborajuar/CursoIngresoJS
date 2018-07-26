function mostrar()
{
//tomo la edad  
var mesDelAño=document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño){
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
		alert("Tiene 31 días");
	break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		alert("Tiene 30 días");
	break;
	default:
	alert("Este mes tiene 28 días");
}
	

}//FIN DE LA FUNCIÓN