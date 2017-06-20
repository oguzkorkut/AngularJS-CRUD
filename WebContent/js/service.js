'use strict';
crudApp.service("crudService", function(cacheService) {
	
	function kaydet(kullanici) {
		return cacheService.kaydet(kullanici);
	}
	
	function sil(id) {
		return cacheService.sil(id);
	}
	
	function guncelle(kullanici) {
		return cacheService.guncelle(kullanici);
	}
	
	function kullaniciGetir(id) {
		return cacheService.kullaniciGetir(id);
	}
	
	return{
		kaydet : kaydet,
		sil : sil,
		guncelle:guncelle,
		kullaniciListesiGetir : function(){
			return cacheService.kullaniciListesiGetir();
		},
		kullaniciGetir:kullaniciGetir,
		listeyiBosalt:function(){
			cacheService.listeyiBosalt();
		}
	};
	
});