// Dichiara la lunghezza dei tre lati di un triangolo 
var lato1 = 5; 
var lato2 = 12; 
var lato3 = 13; 

// Calcola il semiperimetro del triangolo
var semiperimetro  = (lato1 + lato2 + lato3) / 2;

// Usa la formula di Erone per calcolare l'area del triangolo.
var area = Math.sqrt(semiperimetro  * ((semiperimetro  - lato1) * (semiperimetro  - lato2) * (semiperimetro  - lato3)));

// Dichiara l'area calcolata nella console 
console.log(area);