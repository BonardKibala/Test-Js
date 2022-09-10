function fibonacci(nbr) {
  if (nbr < 2) {
    return nbr;
  }
  return fibonacci(nbr - 1) + fibonacci(nbr - 2);
}
console.log(fibonacci(8));

//pour garder une valeur en cache au cas où sa valeur est déjà trouvé
function fibonacciMemo(nbr, cache = {}) {
  let value = 0;
  if (cache[n]) return cache[n];
  if (n === 0) value;
  if (n === 1) value = 1;
  if (n > 1)
    value = fibonacciMemo(nbr - 1, cache) + fibonacciMemo(nbr - 2, cache);
  cache[n] = value;
  return value;
}