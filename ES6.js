// Convertu Celsius in Fahrenheit usando la funzione freccia
const cToF = (celsius) => {
    const cTemp = celsius;
    const cToFahr = cTemp * 9 / 5 + 32;
    const messaggio = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
    console.log(messaggio);
  };
  
  // Convertu Fahrenheit in Celsius usando la funzione freccia
  const fToC = (fahrenheit) => {
    const fTemp = fahrenheit;
    const fToCel = (fTemp - 32) * 5 / 9;
    const messaggio = `${fTemp}\xB0F is ${fToCel} \xB0C.`;
    console.log(messaggio);
  };
  
  // Esempio
  cToF(60);
  fToC(45);