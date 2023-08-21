// USED FOR DEBUGGGING

// Import necessary classes and functions
import Cat from "./CatConstructor.mjs";
import MacroAnalyzer from "./MacroAnalyzer.mjs";
import CatCaloricCalculator from "./CatCaloricCalculator.mjs";
import ConvertCaloriesToGrams from "./ConvertCaloriesToGrams.mjs";
import ConvertLbs from "./lbsConverter.mjs";

// Create test instances and run calculations
const userCat = new Cat("adult", 4, "ideal", true, true); // Create a sample cat

// variables used for testing
//const weight = 2.2;
const kCalPerKG = 3543;

const metabolizableEnergy = MacroAnalyzer.calculateMetabolizableEnergy(
  27, // crudeProtein
  0.12, // crudeFat
  0.057, // crudeFiber
  0.08, // moisture
  0.08 // ash (refers to mineral content)
);

const caloricRequirement =
  CatCaloricCalculator.calculateCaloricRequirement(userCat);

const numberOfGrams = ConvertCaloriesToGrams.caloriesToGramsConverter(
  caloricRequirement,
  kCalPerKG
);

//const weightConversion = ConvertLbs.lbsConverter(weight);

// Output the results
console.log("Metabolizable Energy per serving:", metabolizableEnergy);
console.log("Caloric Requirement:", caloricRequirement);
console.log("You shoud feed your cat ", numberOfGrams, " grams of food.");
console.log("The weight in KG is: ", weightConversion);
