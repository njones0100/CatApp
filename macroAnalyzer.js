class macroAnalyzer {

    constructor { };

    calculateMetabolizableEnergy(
        crudeProtein,
        crudeFat,
        crudeFiber,
        moisture,
        ash
    ) {
        let nitrogenFreeExtract = 100 - (crudeProtein + crudeFat + crudeFiber + moisture + ash);
        let grossEnergy = (0.057 * crudeProtein) + (0.094 * crudeFat) + (4.1 * (nitrogenFreeExtract + crudeFiber));
        let energyDigestibility;
        let digestibleEnergy;
        let metabolizableEnergy;
    
      }

}