function fact(nbr) 
{
// Si nbr = 0 la factorielle retournera 1
  if (nbr === 0)
  {
     return 1;
  }
// appelez à nouveau la procédure récursive
  return nbr * fact(nbr-1);
}
console.log(fact(3));