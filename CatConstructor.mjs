export default class Cat {
  constructor(lifeStage, weight, bodyCondition, isIndoor, isSterilized) {
    // if (
    //   !lifestage ||
    //   !bodyCondition ||
    //   weight === undefined ||
    //   isIndoor === undefined ||
    //   isSterilized === undefined
    // ) {
    //   throw new Error("Please provide all required inputs."); //we can remove this if statement if the input validation is handled by a React Native component
    // }

    /** the above error correcting was added for redundancy, but broke the functionality during debugging. I've commented it out, and we can remove it if it is not needed. */

    this.lifeStage = lifeStage; // kitten, adult, or senior (drop-down box or radio buttons)
    this.weight = weight; // cat's weight in KG (should we use an input field or drop down to avoid errors related to user input?)
    this.bodyCondition = bodyCondition; // under, ideal, or over (drop-down box or radio buttons)
    this.isIndoor = isIndoor; // calculator currently assumes a boolean will be assigned to isIndoor (radio buttons)
    this.isSterilized = isSterilized; // calculator expects a boolean here as well (radio buttons)
  }
}

// const userCat = new Cat(catAge, catWeight, catActivityLevel);
