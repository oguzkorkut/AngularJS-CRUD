'use strict';
crudApp.factory("crudRestService", function($q,$http,SERVICE_ENDPOINT) {
	
	function kaydet(obj){
		return httpCall("POST",obj,{},"user/kaydet","kaydet");
	}
	
	function guncelle(obj){
		return httpCall("PUT",obj,{},"user/guncelle","guncelle");
	}
	
	function sil(id){
		var url = "user/sil/" + id;
		return httpCall("DELETE",null,{},url,"sil");
	}
	
	function getKullaniciById(params){
		return httpCall("GET",null,params,"user/getKullaniciById","getKullaniciById");
	}
	
	function getKullanicilar(){
		return httpCall("GET",null,{},"user/getKullanicilar","getKullanicilar");
	}
	 
	function httpCall(method,data,params,url,serviceName){
		var deferred = $q.defer();
		
		$http({
			method: method,
			url: SERVICE_ENDPOINT + url,
			params:params,
			data: data
		}).then(function success(response) {
			console.log(serviceName + " success");
			
			deferred.resolve(response.data);
			
		}, function(response) {
			console.log(serviceName + " error");
			deferred.reject(response.statusText);
		});
		
		return deferred.promise;
	}
	
	return{
		kaydet:kaydet,
		guncelle:guncelle,
		sil:sil,
		getKullaniciById:getKullaniciById,
		getKullanicilar:getKullanicilar
		
		
	};
	
});
