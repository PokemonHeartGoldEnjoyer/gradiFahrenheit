// Definisci una funzione chiamata prova37 che pesca un parametro x
function prova37(x) {
    // Controlla se x e divisibile per 3 o 7
    if (x % 3 == 0 || x % 7 == 0) {
      // Se non e 0 viene scritto il risultato 
      return vero;
    } 
    // Se non e divisibile per 3 o 7 dai come risultato falso  
    else {
      return falso;
    }
  }
  
  // Salva il risultato della funzione prova37 nel argomento 12 della console
  console.log(prova37(12));
  
  // Salva il risultato della funzione prova37 nel argomento 14 della console
  console.log(prova37(14));
  
  // Salva il risultato della funzione prova37 nel argomento 10 della console
  console.log(prova37(10));
  
  // Salva il risultato della funzione prova37 nel argomento 11 della console
  console.log(prova37(11)); 
