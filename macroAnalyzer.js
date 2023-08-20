class macroAnalyzer {
  constructor() {}

  calculateMetabolizableEnergy(
    crudeProtein,
    crudeFat,
    crudeFiber,
    moisture,
    ash
  ) {
    //if user enters percentage as 10 rather than 0.10 these if statements will convert the number to a decimal percentage (i.e., 10/100 = 0.10)
    if (crudeProtein > 1) crudeProtein = crudeProtein / 100;
    if (crudeFat > 1) crudeFat = crudeFat / 100;
    if (crudeFiber > 1) crudeFiber = crudeFiber / 100;
    if (moisture > 1) moisture = moisture / 100;
    if (ash > 1) ash = ash / 100;

    let nitrogenFreeExtract =
      100 - (crudeProtein + crudeFat + crudeFiber + moisture + ash);
    let grossEnergy =
      0.057 * crudeProtein +
      0.094 * crudeFat +
      4.1 * (nitrogenFreeExtract + crudeFiber);
    let energyDigestibility = 87.9 - 0.88 * crudeFiber;
    let digestibleEnergy = (grossEnergy * energyDigestibility) / 100;
    let metabolizableEnergy = digestibleEnergy - 0.77 * crudeProtein;

    return metabolizableEnergy;
  }
}
