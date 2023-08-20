// Calculate Gross Energy (GE) in kcal
function calculateGEKcal(crudeProtein, crudeFat, nfe, crudeFibre) {
  return 5.7 * crudeProtein + 9.4 * crudeFat + 4.1 * (nfe + crudeFibre);
}

// Calculate energy digestibility for cats in %
function calculateEnergyDigestibilityCats(crudeFibreDM) {
  return 87.9 - 0.88 * crudeFibreDM;
}

// Calculate Digestible Energy (DE) in kcal
function calculateDEKcal(geKcal, energyDigestibility) {
  return (geKcal * energyDigestibility) / 100;
}

// Calculate Metabolisable Energy (ME) for cats in kcal
function calculateMEKcalCats(deKcal, crudeProtein) {
  return deKcal - 0.77 * crudeProtein;
}
