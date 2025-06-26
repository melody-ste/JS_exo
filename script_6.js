function arnToProteine(arn) {
  const codonMap = {
    'UCU': 'Sérine', 'UCC': 'Sérine', 'UCA': 'Sérine', 'UCG': 'Sérine', 'AGU': 'Sérine', 'AGC': 'Sérine',
    'CCU': 'Proline', 'CCC': 'Proline', 'CCA': 'Proline', 'CCG': 'Proline',
    'UUA': 'Leucine', 'UUG': 'Leucine',
    'UUU': 'Phénylalanine', 'UUC': 'Phénylalanine',
    'CGU': 'Arginine', 'CGC': 'Arginine', 'CGA': 'Arginine', 'CGG': 'Arginine', 'AGA': 'Arginine', 'AGG': 'Arginine',
    'UAU': 'Tyrosine', 'UAC': 'Tyrosine'
  };

  // Découpe en codons (groupes de 3 lettres)
  const codons = arn.match(/.{3}/g);
  // console.log(codons);

  // Traduit chaque codon en acide aminé
  const proteines = codons.map(codon => codonMap[codon] || 'Inconnu');
  console.log(proteines.join('-'));
}

arnToProteine("CCGUCGUUGCGCUACAGC");      
arnToProteine("CCUCGCCGGUACUUCUCG"); 