// Crea una funzine che converte Celsius in Fahrenheit
function cToF(celsius) {
    // Immette l'imput Celsius in una variabile
    var cTemp = celsius;
  
    // Calcola l'equivalente della temperatura in Fahrenheit
    var cToFahr = cTemp * 9 / 5 + 32;
  
    //Crea un messaggio string spiegando la conversione dei risultati
    var messaggio = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
  
    // Scrive i messaggi in console
    console.log(messaggio);
  }
  
  // Crea una funzione che converte Fahrenheit in Celcius
  function fToC(fahrenheit) {
    // Immagazzina l'input Fahrenheit in una variabile
    var fTemp = fahrenheit;
  
    // Calcola l'equivalente in Celsius
    var fToCel = (fTemp - 32) * 5 / 9;
  
    // Crea un messaggio string scrivendo i risultati della conversione
    var messaggio = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
  
    // Scrive i messaggi in console
    console.log(messaggio);
  }
  
  // Richiama la funzione cToF con una temperatura di 60 gradi Celcius
  cToF(60);
  
  // Richiama la funzione cToF con una temperatura di 45 gradi FahrenheitS
  fToC(45);