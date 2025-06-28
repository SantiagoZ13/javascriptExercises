// 1, 1, 2, 3, 5, ,8 ,13
const fibonacci = (n) => {
  if (n < 2) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
};

const fibonacci2 = (n) => {
  secuencia = [0, 1];
  for (let i = 2; i < n; i++) {
    secuencia.push(secuencia[i - 2] + secuencia[i - 1]);
  }
  return secuencia;
};

const resultado = fibonacci2(10);
console.log(resultado);
