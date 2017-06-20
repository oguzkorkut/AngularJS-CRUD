crudApp.config(function($stateProvider,$urlRouterProvider) {
	
	
	$urlRouterProvider.otherwise("/");
	
	$stateProvider
		.state("kullaniciListesi",{
			url:'/',
			templateUrl: "templates/kullaniciListesi.html",
			controller: "KullaniciListesiController"
		})
		.state("kaydet",{
			url:'/kaydet',
			templateUrl: "templates/kullaniciFormValidation.html",
			controller: "KaydetController"
		})
		.state("guncelle",{
			url:"/guncelle/:id",
			templateUrl: "templates/kullaniciFormValidation.html",
			controller:"GuncelleController"
		})
		.state("detay",{
			url:"/detay/:id",
			templateUrl: "templates/kullaniciFormValidation.html",
			controller:"DetayController"
		});
	
});