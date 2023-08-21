Files extensions changed to .mjs for debugging. Update file extensions to .js before transiterating with babel.

Energy requirement calculations obtained and multiplication factors obtained from:

American Animal Hospital Association: https://www.aaha.org/globalassets/02-guidelines/2021-nutrition-and-weight-management/resourcepdfs/nutritiongl_box1.pdf

and

FEDIAF guidelines: https://europeanpetfood.org/wp-content/uploads/2022/03/Updated-Nutritional-Guidelines.pdf

Pound to kilogram conversion formula obtained from: https://www.rapidtables.com/convert/weight/how-pound-to-kg.html

WSAVA's Body Condition Score guidelines: https://wsava.org/wp-content/uploads/2020/08/Body-Condition-Score-cat-updated-August-2020.pdf

I've had to make some assumptions about UI decisions, and I'm not clear on where the error handling will take place, but it will be simple enough to modify that code.

~~The CatCaloricCalculator is currently using the formula 70 _ Math.pow(this.cat.weight, 0.75) to obtain the restingEnergyRequirement. The FEDIAF guidelines linked above state that a formula of 70 _ Math.pow(this.cat.weight, 0.67) is more accurate if using metabolizableEnergy instead of Gross Energy. Which is listed on the packaging may vary depending on the manufacturer.~~

It appears that most packaging either lists the metabolizable energy or provides the necessary information to calculate it. I've updated the calculator to use the formula 70 \* weight^0.75 in accordance with the FEDIAF guidelines linked above.

The MacroAnalyzer formula requires an input for ash, but this may be difficult to determine if it is not listed on the packaging - and the first example I looked at did not (but they did list their calories in terms of metabolizableEnergy). I have not been able to find a simple and reliable method for determining the content level when ash is not listed on the packaging.

"When ash is used related to animal foods, it means minerals – calcium, phosphorus, iron, copper, zinc, etc. Ash is a crude measurement of the total amounts of minerals in a diet."
https://vetnutrition.tufts.edu/2022/08/all-about-ash/#:~:text=Ash%20is%20a%20crude%20measurement,%27t%20burn%2C%20namely%20minerals.

Using https://www.chewy.com/royal-canin-indoor-adult-dry-cat-food/dp/33853 as an example for analysis, and assuming 8% ash content(5-8% appears to be the average), the calculator is within 3 calories of the ME/cup (90g) as listed on the packaging (322.22 obtained by the calculator and 325 listed on the packaging)

The CaloricRequirement output by the calculateCaloricRequirement in the app.mjs example is 285. We'll need a user input for "kCal ME/kg" (that appears to be how the calories are most often listed on packaging), then use that figure to determine the number of grams to meet the caloricRequirement.

"kCal ME/kg" /1000 = calories per gram

CaloricRequirement/(calories per gram) will give us the number of grams to feed the cat.

Using the food linked above as an example, 3534/1000 = 3.534. 285 / 3.534 = 80.64 ... however, this is nearly twice what the packaging recommends. We need to review the multiplication factors.
