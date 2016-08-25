app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "app/components/presupuestoDiario/presupuestoDiario.view.html",
		controller: "presupuestoDiarioCtrl"
	})
});