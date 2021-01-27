const numero = Number(prompt("Qual o seu número ?"));
const numeroTitulo = document.getElementById('numeroTitulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>A raiz quadrada de ${numero} é: ${(numero ** 0.5).toFixed(2)} </p>`;
texto.innerHTML += `<p>${numero} é um inteiro ? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} </p>`;
texto.innerHTML += `<p>É NaN?  ${Number.isNaN(numero)} </p>`;