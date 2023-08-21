// Import necessary classes and functions
import Cat from "./CatConstructor.mjs";
import MacroAnalyzer from "./MacroAnalyzer.mjs";
import CatCaloricCalculator from "./CatCaloricCalculator.mjs";

// Create test instances and run calculations
const userCat = new Cat("adult", 5, "ideal", true, true); // Create a sample cat

const metabolizableEnergy = MacroAnalyzer.calculateMetabolizableEnergy(
  0.32, // crudeProtein
  0.12, // crudeFat
  0.03, // crudeFiber
  0.12, // moisture
  0.02 // ash (refers to mineral content)
);

const catCaloricCalculator = new CatCaloricCalculator(userCat);
const caloricRequirement = catCaloricCalculator.calculateCaloricRequirement();

// Output the results
console.log("Metabolizable Energy per serving:", metabolizableEnergy);
console.log("Caloric Requirement:", caloricRequirement);
