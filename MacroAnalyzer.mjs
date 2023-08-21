//this class calculates the Metabolizable Energy in a food based on the macronutrient profile
// formulas obtained from the FEDIAF Nutritional Guidelijnes found on p50 of https://europeanpetfood.org/wp-content/uploads/2022/03/Updated-Nutritional-Guidelines.pdf

export default class MacroAnalyzer {
  constructor() {}
  static percentageToDecimal = 0.01;
  static calculateMetabolizableEnergy(
    crudeProtein,
    crudeFat,
    crudeFiber,
    moisture,
    ash
  ) {
    //if user enters percentage as 10 rather than 0.10 these if statements will convert the number to a decimal percentage (i.e., 10/100 = 0.10)
    if (crudeProtein > 1) crudeProtein *= MacroAnalyzer.GRAMS_TO_PERCENT;
    if (crudeFat > 1) crudeFat *= MacroAnalyzer.GRAMS_TO_PERCENT;
    if (crudeFiber > 1) crudeFiber *= MacroAnalyzer.GRAMS_TO_PERCENT;
    if (moisture > 1) moisture *= MacroAnalyzer.GRAMS_TO_PERCENT;
    if (ash > 1) ash *= MacroAnalyzer.GRAMS_TO_PERCENT;

    let nitrogenFreeExtract =
      100 - (crudeProtein + crudeFat + crudeFiber + moisture + ash);
    let grossEnergy =
      0.057 * crudeProtein +
      0.094 * crudeFat +
      4.1 * (nitrogenFreeExtract + crudeFiber);
    let energyDigestibility = 87.9 - 0.88 * crudeFiber;
    let digestibleEnergy = (grossEnergy * energyDigestibility) / 100;
    let metabolizableEnergy = (digestibleEnergy - 0.77 * crudeProtein).toFixed(
      2
    ); // calculates and terminates the resulting number after the second decimal place

    return metabolizableEnergy;
  }
}
