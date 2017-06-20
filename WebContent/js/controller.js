'use strict';
crudApp.controller("KaydetController", function($scope,crudService,$state) {
	
	$scope.baslik = "Kullanıcı Kaydı";
	$scope.buttonValue = "Kaydet";

	//Detay sayfasında inputların readonly görünmesi için eklendi
	$scope.detayMi = false;
	
	//Kaydet sayfasındaki kullanici objesi
	$scope.kullanici = {};
	
	$scope.submitForm = function(){
		if ($scope.kullaniciForm.$valid) {
			var id = crudService.kaydet($scope.kullanici);
			
			console.log("Kaydedilen kullanici id:" + id);
			
			$state.go('kullaniciListesi');
		}else{
			console.log("Form valid değil")
		}
		
	}
	
	$scope.geriDon = function() {
		$state.go("kullaniciListesi");
//		$window.history.back();	
	}
});

crudApp.controller("KullaniciListesiController",function($scope,crudService,$state){
	
	$scope.kullaniciListesi = crudService.kullaniciListesiGetir();
	
	$scope.yeniKayit = function() {
		$state.go("kaydet");
	}
	
	//Tabloda bulunan kayıtların güncellenmesi silinmesi ve detayın görüntülenmesi
	$scope.sil = function($index,kullanici){
		crudService.sil(kullanici.id);
		$scope.kullaniciListesi = crudService.kullaniciListesiGetir();
	}
	
	/**
	 * Tablo üzerinde bulunan güncelle butonudur. Butona tıklandığı zaman kaydet template'inde bulunan güncelle butonu aktif oluyor
	 * kaydet butonu gizleniyor
	 */
	$scope.guncelle = function($index,kullanici){
		$state.go("guncelle",{id:kullanici.id});
	}
	
	$scope.detay = function($index,kullanici){
		$state.go("detay",{id:kullanici.id});
	}
	
});

crudApp.controller("GuncelleController",function($scope,crudService,$state,$stateParams){
	
	$scope.baslik = "Kayıt Güncelleme";
	$scope.buttonValue = "Güncelle";
	
	//Detay sayfasında inputların readonly görünmesi için eklendi
	$scope.detayMi = false;
	
	console.log("Güncellenecek kayıt id:" + $stateParams.id);
	
	$scope.kullanici = crudService.kullaniciGetir($stateParams.id);
	/**
	 * Kaydet sayfasındaki güncelle butonu. Kaydın serviste bulunan değerini güncelliyor 
	 */
	$scope.submitForm = function () {
		if ($scope.kullaniciForm.$valid) {
			crudService.guncelle($scope.kullanici);
			$state.go("kullaniciListesi");
		}else{
			console.log("Form valid değil")
		}
		
	}
	
	$scope.geriDon = function() {
		$state.go("kullaniciListesi");
//		$window.history.back();	
	}
});

crudApp.controller("DetayController",function($scope,crudService,$state,$stateParams){
	
	$scope.baslik = "Kayıt Detayı";
	
	$scope.detayMi = true;
	
	console.log("Detayı görüntülenecek kayıt id:" + $stateParams.id);
	
	$scope.kullanici = crudService.kullaniciGetir($stateParams.id);
	
	$scope.geriDon = function() {
		$state.go("kullaniciListesi");
	}
});