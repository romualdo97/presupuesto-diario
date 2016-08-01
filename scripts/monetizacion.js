// ¿Los usuarios estan dispuestos a pagar por esta solucion?

function pagariasPorEstaApp()
{
	var bool_r = window.confirm("ADVERTENCIA esto es solo una encuesta con fines informativos, no te vamos a cobrar nada\n\n¿Pagarías dos mil pesos mensuales para que terminar el mes con dinero sea más fácil? \n\nACEPTAR para decir SI\nCANCELAR para decir NO");

	if (bool_r)
	{
		console.log("Si pagaria esa cantidad");
	}
	else
	{
		console.log("No, el hp no pagaria esa cantidad (quizas mas o quizas menos)");
	}
}