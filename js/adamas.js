var sayac = 0;
var say;
var cevap;
var harfi;
var ciz = new Array;
function sorular(){    
    var sorular=new Array(
        new Array("Dilde sesleri gösteren imgelerden her biri?","harf"),
        new Array("Yalnız yasaca akraba sayılan aralarında kan bağı bulunmayan öz olmayan?","üvey"),
        new Array("Birini uydurma bir sebeble bırakıp gitmek savuşturmak, atlatmak?","ekmek"),
        new Array("Ateşi canlandırmak için kullanılan ve açılıp kapandıkça havayı içine üfleyen araç?","körük"),
        new Array("İçine genellikle para konulan, cebe girebilecek boyutta çanta?","cüzdan"),
        new Array("Gömleğin kol ağzına geçirilen, genellikle çift katlı kumaştan yapılan bölüm, kolluk?","manşet"),
        new Array("Ansızın birden bire?","şıpdiye"),
        new Array("Yüksek veya geçirilmesi güç bir yerin üstünden diğer yanına geçirmek?","aşırmak"),
        new Array("Belirli sürede görev yeri değişikliği?","rotasyon"),
        new Array("Bir ilçede devleti temsil eden en yetkili yönetim görevlisi?","kaymakam"),
        new Array("Bir düşünce veya istek üzerinde durmak direnmek ısrar etmek","üstelemek"),
        new Array("Mecaz anlamda bir kimseyi çok azarlamak?","fırçalamak")
    );    
     say = sorular.length ;    
    var rasgele = Math.floor((Math.random()* say ) + 0);    
    var yaz = document.getElementById("soru").innerHTML = sorular[rasgele][0];
    cevap = sorular[rasgele][1];
    cizgi();
}
function cizgi(){
    var cizgiDizi = new Array;
    var harfsay = cevap.length;   
        for(var z = 0; z < harfsay; z++){
            cizgiDizi[z]="_";
        }
    document.getElementById("bilmece").innerHTML = cizgiDizi.join(" ");   
   ciz = cizgiDizi ;
}
function kontrol(harf){
 harfi = harf;
    document.getElementById(harfi).style.display = "none";
        for(var i = 0; i <cevap.length; i++){
            if(cevap.charAt(i) == harfi){
                ciz[i] = harfi;
                document.getElementById("bilmece").innerHTML = ciz.join(" ");
            }
        }
var win = ciz.indexOf("_");
    if(win == -1){
    document.getElementById("bak").innerHTML ="kazandın";
    document.getElementById("alfabe").style.display = "none";
   }
        if(cevap.search(harfi) == -1){
                sayac = sayac + 1;
                      if(sayac <= 5){
                        resim();
                      } else{
                        document.getElementById("bak").innerHTML ="oyun bitti";
                        document.getElementById("alfabe").style.display = "none";
                      }      
            }           
   }   
   function resim(){
        switch(sayac){
                case 0:
            document.getElementById("res1").style.display = "block";
            break;
                case 1:
            document.getElementById("res1").style.display = "none";
            document.getElementById("res2").style.display = "block";
            break;
                case 2:
            document.getElementById("res2").style.display = "none";
            document.getElementById("res3").style.display = "block";
            break;
                case 3:
            document.getElementById("res3").style.display = "none";
            document.getElementById("res4").style.display = "block";
            break;
                case 4:
            document.getElementById("res4").style.display = "none";
            document.getElementById("res5").style.display = "block";
            break;
                case 5:
            document.getElementById("res5").style.display = "none";
            document.getElementById("res6").style.display = "block";
            break;
        }
   }
   function gizle(){
    document.getElementById("res1").style.display = "block";
    document.getElementById("res2").style.display = "none";
    document.getElementById("res3").style.display = "none";
    document.getElementById("res4").style.display = "none";
    document.getElementById("res5").style.display = "none";
    document.getElementById("res6").style.display = "none";
   }    
function calis(){     
    sorular(); 
}   
