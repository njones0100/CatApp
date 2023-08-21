// does the caloric requirement calculations

export default class CatCaloricCalculator {
  static calculateCaloricRequirement(cat) {
    const restingEnergyRequirement = 70 * Math.pow(cat.weight, 0.67); /** 
    RER calculation obtained from: https://www.aaha.org/globalassets/02-guidelines/2021-nutrition-and-weight-management/resourcepdfs/nutritiongl_box1.pdf
    */
    let lifeStageFactor;
    let activityFactor;
    let bodyConditionFactor;
    let isSterilizedFactor;

    // "==" is replaced with "===" in these if-else statements to ensure both value and type equality - expects input from radio button or drop down box
    // need to update the right side with whatever is assigned by the dropdown / radio
    if (cat.lifeStage === "kitten") {
      lifeStageFactor = 2;
    } else if (cat.lifeStage === "adult") {
      lifeStageFactor = 1.2;
    } else if (cat.lifeStage === "senior") {
      lifeStageFactor = 0.85;
    } else {
      throw new Error("Please select a life stage."); //exception handling in place for redundancy, can remove if handled elsewhere
    }

    // "==" is replaced with "===" in these if-else statements to ensure both value and type equality - expects input from radio button or drop down box
    // need to update the right side with whatever is assigned by the dropdown / radio
    if (cat.bodyCondition === "under") {
      bodyConditionFactor = 1.4;
    } else if (cat.bodyCondition === "ideal") {
      bodyConditionFactor = 1.0;
    } else if (cat.bodyCondition === "over") {
      bodyConditionFactor = 0.8;
    } else {
      throw new Error("Please indicate the cat's body condition."); //exception handling in place for redundancy, can remove if handled elsewhere
    }

    // Adjust requirement based on activity level
    if (cat.isIndoor == true) {
      activityFactor = 1.0;
    } else if (cat.isIndoor == false) {
      activityFactor = 1.2;
    } else {
      throw new Error(
        "Please select whether the cat is an indoor cat or is allowed outdoors."
      ); //exception handling in place for redundancy, can remove if handled elsewhere
    }

    // Adjust requirement based on sterilization status
    if (cat.isSterilized == true) {
      isSterilizedFactor = 1.2;
    } else if (cat.isSterilized == false) {
      isSterilizedFactor = 1.4;
    } else {
      throw new Error("Please select whether or not the cat is sterilized."); //exception handling in place for redundancy, can remove if handled elsewhere
    }

    let maintenanceEnergyRequirement =
      lifeStageFactor * restingEnergyRequirement;
    // variable returned by the function ...
    const caloricRequirement = Math.round(
      maintenanceEnergyRequirement *
        bodyConditionFactor *
        activityFactor *
        isSterilizedFactor
    ); // performs the calculation and rounds the result

    // ... to output to the user
    return caloricRequirement;
  }
}
