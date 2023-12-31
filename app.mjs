// USED FOR DEBUGGGING

// Import necessary classes and functions
import Cat from "./CatConstructor.mjs";
import MacroAnalyzer from "./MacroAnalyzer.mjs";
import CatCaloricCalculator from "./CatCaloricCalculator.mjs";
import CaloriesToGrams from "./CaloriesToGrams.mjs";
import LbsToKG from "./LbsToKG.mjs";

// Create test instances and run calculations
const userCat = new Cat("adult", 4, "ideal", true, true); // Create a sample cat

// variables used for testing
const weight = 2.2;
const kCalPerKG = 3543;

const metabolizableEnergy = MacroAnalyzer.calculateMetabolizableEnergy(
  27, // crudeProtein
  0.12, // crudeFat
  0.057, // crudeFiber
  0.08, // moisture
  0.08 // ash
);

const caloricRequirement =
  CatCaloricCalculator.calculateCaloricRequirement(userCat);

const numberOfGrams = CaloriesToGrams.caloriesToGramsConverter(
  caloricRequirement,
  kCalPerKG
);

const weightConversion = LbsToKG.lbsConverter(weight);

// Output the results
console.log("Metabolizable Energy per serving:", metabolizableEnergy);
console.log("Caloric Requirement:", caloricRequirement);
console.log("You should feed your cat", numberOfGrams, "grams of food.");
console.log("The weight in KG is: ", weightConversion);
