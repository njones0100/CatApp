// to be used if weight is entered in pounds
// Pound to kilogram conversion formula obtained from: https://www.rapidtables.com/convert/weight/how-pound-to-kg.html

export default class LbsToKG {
  static lbsConverter(weight) {
    return (weight * 0.45349237).toFixed(2); //runs calculation, rounds after two decimals, returns result
  }
}
