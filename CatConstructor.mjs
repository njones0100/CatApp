export default class Cat {
  constructor(lifeStage, weight, bodyCondition, isIndoor, isSterilized) {
    this.lifeStage = lifeStage; // Cat's age in years
    this.weight = weight; // Cat's weight (current formula assumes KG)
    this.bodyCondition = bodyCondition;
    this.isIndoor = isIndoor; // Boolean for activity level (indoor/outdoor)
    this.isSterilized = isSterilized; // Boolean for sterilization status
  }
}

// const userCat = new Cat(catAge, catWeight, catActivityLevel);
