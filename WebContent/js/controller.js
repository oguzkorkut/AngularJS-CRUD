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
			var promise = crudService.kaydet($scope.kullanici);
			
			promise.then(function(response) {
				var id = response;
				console.log("Kaydedilen kullanici id:" + id);
				$state.go('kullaniciListesi');
			}, function(reason) {
				console.log("Hata:" + reason)
			});
			
		}else{
			console.log("Form valid değil");
		}
	}
	
	$scope.geriDon = function() {
		$state.go("kullaniciListesi");
//		$window.history.back();	
	}
});

crudApp.controller("KullaniciListesiController",function($scope,crudService,$state){
	
	callGetKullanicilar();
	
	$scope.yeniKayit = function() {
		$state.go("kaydet");
	}
	
	//Tabloda bulunan kayıtların güncellenmesi silinmesi ve detayın görüntülenmesi
	$scope.sil = function($index,kullanici){
		
		var promise = crudService.sil(kullanici.id);
		
		promise.then(function(response) {
			$scope.kullaniciListesi  = response;
			
			callGetKullanicilar();
		}, function(reason) {
			console.log("Hata:" + reason)
		});
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
	
	function callGetKullanicilar(){
		var promise = crudService.kullaniciListesiGetir();
		
		promise.then(function(response) {
			$scope.kullaniciListesi  = response;
		}, function(reason) {
			console.log("Hata:" + reason)
		});
	}
	
});

crudApp.controller("GuncelleController",function($scope,crudService,$state,$stateParams){
	
	$scope.baslik = "Kayıt Güncelleme";
	$scope.buttonValue = "Güncelle";
	
	//Detay sayfasında inputların readonly görünmesi için eklendi
	$scope.detayMi = false;
	
	console.log("Güncellenecek kayıt id:" + $stateParams.id);
	
	var promiseKullaniciGetir = crudService.kullaniciGetir($stateParams.id);
	
	promiseKullaniciGetir.then(function(response) {
		$scope.kullanici  = response;
	}, function(reason) {
		console.log("Hata:" + reason)
	});
	
	/**
	 * Kaydet sayfasındaki güncelle butonu. Kaydın serviste bulunan değerini güncelliyor 
	 */
	$scope.submitForm = function () {
		if ($scope.kullaniciForm.$valid) {
			var promiseGuncelle = crudService.guncelle($scope.kullanici);
			
			promiseGuncelle.then(function(response) {
				$state.go("kullaniciListesi");
			}, function(reason) {
				console.log("Hata:" + reason)
			});
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
	
	var promise = crudService.kullaniciGetir($stateParams.id);
	
	promise.then(function(response) {
		$scope.kullanici = response;
	}, function(reason) {
		console.log("Hata:" + reason)
	});
	
	$scope.geriDon = function() {
		$state.go("kullaniciListesi");
	}
});