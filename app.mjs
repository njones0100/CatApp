// Import necessary classes and functions
import Cat from "./CatConstructor.mjs";
import MacroAnalyzer from "./MacroAnalyzer.mjs";
import CatCaloricCalculator from "./CatCaloricCalculator.mjs";

// Create test instances and run calculations
const userCat = new Cat("adult", 5, "ideal", true, true); // Create a sample cat

const metabolizableEnergy = MacroAnalyzer.calculateMetabolizableEnergy(
  0.25, // crudeProtein
  0.15, // crudeFat
  0.05, // crudeFiber
  0.1, // moisture
  0.05 // ash
);

const catCaloricCalculator = new CatCaloricCalculator(userCat);
const caloricRequirement = catCaloricCalculator.calculateCaloricRequirement();

// Output the results
console.log("Metabolizable Energy:", metabolizableEnergy);
console.log("Caloric Requirement:", caloricRequirement);
