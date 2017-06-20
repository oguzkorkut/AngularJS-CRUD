angular.module("hesaplamaModule",[])
.service("HesaplaService",function(){
    this.cikarma = function(say1,say2){
        var sonuc = say1 - say2;
        console.log("Sonuç:" + sonuc);
        return sonuc;
    }
    this.carpma = function(say1,say2){
        var sonuc = say1 * say2;
        console.log("Sonuç:" + sonuc);
        return sonuc;
    }
    this.bolme= function(say1,say2){
        var sonuc = say1 / say2;
        console.log("Sonuç:" + sonuc);
        return sonuc;
    }
    
    this.topla = function(say1,say2){
         var sonuc = say1 + say2;
         console.log("Sonuç:" + sonuc);
         return sonuc;
     }
});
