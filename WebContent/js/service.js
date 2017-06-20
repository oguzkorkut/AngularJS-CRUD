'use strict';
crudApp.service("crudService", function(crudRestService) {
	
	function kaydet(kullanici) {
		return crudRestService.kaydet(kullanici);
	}
	
	function sil(id) {
		return crudRestService.sil(id);
	}
	
	function guncelle(kullanici) {
		return crudRestService.guncelle(kullanici);
	}
	
	function kullaniciGetir(id) {
		var params = {
				id: id
		};
		return crudRestService.getKullaniciById(params);
	}
	
	return{
		kaydet : kaydet,
		sil : sil,
		guncelle:guncelle,
		kullaniciListesiGetir : function(){
			return crudRestService.getKullanicilar();
		},
		kullaniciGetir:kullaniciGetir
	};
	
});