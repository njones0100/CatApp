// this class calculates the Metabolizable Energy in 100g of food based on the macronutrient profile
// formulas obtained from the FEDIAF Nutritional Guidelijnes found on p50 of https://europeanpetfood.org/wp-content/uploads/2022/03/Updated-Nutritional-Guidelines.pdf

export default class MacroAnalyzer {
  static calculateMetabolizableEnergy(
    crudeProtein,
    crudeFat,
    crudeFiber,
    moisture,
    ash // refers to mineral content (see notes.md)
  ) {
    const percentageToDecimal = 0.01;
    //if user enters percentage as 10 rather than a decimal figure of 0.10, these if statements will convert the number to a decimal percentage (i.e., 10/100 = 0.10)
    if (crudeProtein > 1) crudeProtein *= percentageToDecimal;
    if (crudeFat > 1) crudeFat *= percentageToDecimal;
    if (crudeFiber > 1) crudeFiber *= percentageToDecimal;
    if (moisture > 1) moisture *= percentageToDecimal;
    if (ash > 1) ash *= percentageToDecimal;

    let nitrogenFreeExtract =
      100 - (crudeProtein + crudeFat + crudeFiber + moisture + ash);
    let grossEnergy =
      0.057 * crudeProtein +
      0.094 * crudeFat +
      4.1 * (nitrogenFreeExtract + crudeFiber);
    let energyDigestibility = 87.9 - 0.88 * crudeFiber;
    let digestibleEnergy = (grossEnergy * energyDigestibility) / 100;
    let metabolizableEnergy = Math.round(
      digestibleEnergy - 0.77 * crudeProtein
    ); // performs the calculation and rounds the result

    return metabolizableEnergy;
  }
}
