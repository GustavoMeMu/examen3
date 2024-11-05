const esPalindromo = (texto) => {
    texto = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    return texto === texto.split('').reverse().join('');
};

console.log(esPalindromo("Anita lava la tinaa") ? "Es un palindromo" : "No es un palindromo");


//Quité la función esAlfanumerico: En vez de estar revisando cada carácter, usé replace con una expresión regular (/[^a-z0-9]/g)
//para sacar todo lo que no sea alfanumérico
//tambien simplifiqué la comparación del palíndromo
//En vez del while, convertí "texto" en un arreglo de caracteres, lo invertí y lo comparé directamente con el original. 
//Así evito todo el bucle.
//if ternario en la impresión: Usé un operador ternario para decidir qué mensaje mostrar en una sola línea.