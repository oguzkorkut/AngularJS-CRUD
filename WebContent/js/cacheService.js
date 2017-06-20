crudApp.factory("cacheService", function(localStorageService) {
	
//	var kullanici = {
//			id: 0,
//			adi: "",
//			soyadi: "",
//			ePosta:""
//	}
	
	function kullaniciListesiGetir(){
		var  kullaniciListesi = localStorageService.get("kullaniciListesi");
		
		if(typeof kullaniciListesi == undefined || kullaniciListesi == null){
			kullaniciListesi = new Array();
		}
		return kullaniciListesi;
	}
	 
	function kaydet(kullanici) {
		
		var kullaniciListesi = kullaniciListesiGetir();
		
		var id = kullaniciListesi.length != 0 ? kullaniciListesi[kullaniciListesi.length-1].id + 1 : 1;
		
		kullanici["id"] = id;
		
		var tempKullanici = angular.copy(kullanici);
		
		kullaniciListesi.push(tempKullanici);
		
		localStorageService.set("kullaniciListesi", kullaniciListesi);
		
		return id;
	}
	
	function sil(id) {
		var kullaniciListesi = kullaniciListesiGetir();
		
		for(var i = 0;i<kullaniciListesi.length; i++){
			if(kullaniciListesi[i].id  == id){
				kullaniciListesi.splice(i,1);
				
				localStorageService.set("kullaniciListesi", kullaniciListesi);
				return true;
			}
		}
		return false;
	}
	
	function guncelle(kullanici) {
		var kullaniciListesi = kullaniciListesiGetir();
		
		for(var i = 0;i<kullaniciListesi.length; i++){
			if(kullaniciListesi[i].id  == kullanici.id){
				kullaniciListesi[i] = kullanici;
				
				localStorageService.set("kullaniciListesi", kullaniciListesi);
				return true;
			}
		}
		return false;
	}
	
	function kullaniciGetir(id) {
		var kullaniciListesi = kullaniciListesiGetir();
		
		for(var i = 0;i<kullaniciListesi.length; i++){
			if(kullaniciListesi[i].id  == id){
				return kullaniciListesi[i];
			}
		}
		return null;
	}
	
	return{
		kaydet : kaydet,
		sil : sil,
		guncelle:guncelle,
		kullaniciListesiGetir : kullaniciListesiGetir,
		kullaniciGetir:kullaniciGetir,
		listeyiBosalt:function(){
			localStorageService.remove("kullaniciListesi");
		}
	};
	
});