class CatDietCalculator {
    constructor(cat) {
        this.cat = cat;
    }

    calculateCaloricRequirement(cat) {
        const restingEnergyRequirement = 70 * (Math.pow(this.cat.weight, 3 / 4)); //universal base metabolic factor
        let adjustedRestingRequirement;
        let lifeStageFactor;
        let activityFactor;
        let bodyConditionFactor;
        let maintenanceEnergyRequirement;
        let isNeuteredFactor;

        if (this.cat.lifeStage == "kitten") {
            lifeStageFactor = 2;
        } else if (this.cat.lifestage == "adult") {
            lifeStageFactor = 1.2;
        } else if (this.cat.lifestage == "senior") {
            lifeStageFactor = 0.85;
        } else {
            throw new Error('Please select lifestage.')
        }


        // Adjust requirement based on activity level
        if (this.cat.isIndoor == true) {
            activityFactor = 1.0;
        } else if (this.cat.isIndoor == false) {
            activityFactor = 1.2;
        } else { 
            throw new Error('Please select indoor or outdoor.');
        }

        // Adjust requirement based on sterilization status
        const sterilizationMultiplier = this.cat.isSterilized ? 0.9 : 1.0;

        // variable returned by the function ...
        const  caloricRequirement = restingEnergyRate * activityMultiplier * sterilizationMultiplier;
        
        // ... to output to the user
        return caloricRequirement;
    }

    calculateMetabolizableEnergy(crudeProtein, crudeFat, crudeFibre, moisture, ash) {
        
    }
}