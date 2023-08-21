// USED FOR DEBUGGGING

// Import necessary classes and functions
import Cat from "./CatConstructor.mjs";
import MacroAnalyzer from "./MacroAnalyzer.mjs";
import CatCaloricCalculator from "./CatCaloricCalculator.mjs";
import CaloriesToGrams from "./CaloriesToGrams.mjs";

// Create test instances and run calculations
const userCat = new Cat("adult", 4, "ideal", true, true); // Create a sample cat

const metabolizableEnergy = MacroAnalyzer.calculateMetabolizableEnergy(
  0.27, // crudeProtein
  0.12, // crudeFat
  0.057, // crudeFiber
  0.08, // moisture
  0.08 // ash (refers to mineral content)
);

const catCaloricCalculator = new CatCaloricCalculator(userCat);
const caloricRequirement = catCaloricCalculator.calculateCaloricRequirement();

// Output the results
console.log("Metabolizable Energy per serving:", metabolizableEnergy);
console.log("Caloric Requirement:", caloricRequirement);

const kCalPerKG = 3543;
const numberOfGrams = CaloriesToGrams.convertCaloriesToGrams(
  caloricRequirement,
  kCalPerKG
);

console.log("You shoud feed your cat ", numberOfGrams, " grams of food.");
