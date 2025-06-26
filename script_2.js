let nmb = prompt("De quel nombre veux-tu calculer la factorielle ?");
nmb = parseInt(nmb);

function factorielle(n) {
  let resultat = 1;
  for (let i = 1; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}

console.log("Le résultat est : " + factorielle(nmb));