// this function is used to determine how many grams to feed based on calorie count per kg and the cat's caloric requirement

export default class CaloriesToGrams {
  static caloriesToGramsConverter(caloricRequirement, kCalPerKG) {
    const caloriesPerGram = kCalPerKG / 1000;
    const gramsToFeed = Math.round(caloricRequirement / caloriesPerGram);
    return gramsToFeed;
  }
}
