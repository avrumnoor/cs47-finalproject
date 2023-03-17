export default class Coin {
  id;
  name;
  symbol;
  price;
  percentChange;
  constructor({ id, name, symbol, price, percentChange }) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
    this.price = price;
    this.percentChange = percentChange;
  }
}
