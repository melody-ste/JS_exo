let etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
etage = parseInt(etage);

for (let i = 1; i <= etage; i++) {
  let espaces = " ".repeat(etage - i);
  let dieses = "#".repeat(i);
  console.log(espaces + dieses);
}