var kelimeler=["KÜTÜPHANE","BİLGİ OKURYAZARI","KATALOG","KAĞIT","DERLEME","ARŞİV ODASI","SİSTEM","DOKÜMANTASYON","VERİ TABANI","ELEKTRONİK YAYINCILIK" ];
var gelenKelime="" , Bulmaca="" , Harfler=[] , yanlıs=0;

$(document).ready(function(){
$("button#yeniButon").on("click",function(){
$("div#adam img").hide;
Bulmaca= "";
yanlıs= 0;
Harfler= [];
$("#harfler").text("");    
$("#sonuc").text("") ;
var numara = Math.floor(Math.random() * kelimeler.length);
gelenKelime=kelimeler[numara];
kelimeler.splice(numara, 1);    
for(var i=0;i<gelenKelime.length;i++){
if(gelenKelime.charAt(i) !=" ") Bulmaca += "_";
else Bulmaca +=" ";}  
$("#bulmaca").text(Bulmaca);  
$("#sonuc").text("");
    
$(window).on("keypress",function(e){
var harf= String.fromCharCode(e.which);     //hangi harf basılmış   
harf=(harf=="i")?"İ": harf.toUpperCase();    //harfleri büyütme
if(("ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".indexOf(harf)== -1) || (Harfler.indexOf(harf) > -1 )){
return false;}
Harfler.push(harf);
$("#div_harfler").text(Harfler.join(" , "));
    
if(gelenKelime.indexOf(harf)>-1){
for(var i=0;i<gelenKelime.length;i++){
if(gelenKelime.charAt (i)==harf){
    Bulmaca=Bulmaca.substring(0,i) + harf + Bulmaca.substring(i+1)}    
}
$("#bulmaca").text(Bulmaca); 
if(Bulmaca.indexOf("_")==-1){
$(window).off("keypress"); 
$("#sonuc").text("Tebrikler :)");   }    
}
else{
$("#adam img").hide().eq(yanlıs).show();
yanlıs++;
if (yanlıs==6) {
$("#sonuc").text("Kaybettiniz :( ")
$("#bulmaca").Text(gelenKelime);
$(window).off("keypress");  
}    
}    
}); //keypress       
}); //button click  
}); //ready doc.