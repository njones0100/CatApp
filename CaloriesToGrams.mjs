export default class CaloriesToGrams {
  convertCaloriesToGrams(caloricRequirement, kCalPerKG) {
    const caloriesPerGram = kCalPerKG / 1000;
    const gramsToFeed = caloricRequirement / caloriesPerGram;
    return gramsToFeed;
  }
}
