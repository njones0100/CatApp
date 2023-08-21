// to be used if weight is entered in pounds

export default class ConvertLbs {
  static lbsConverter(weight) {
    weight = weight * 0.45349237; // Pound to kilogram conversion formula obtained from: https://www.rapidtables.com/convert/weight/how-pound-to-kg.html
  }
}
