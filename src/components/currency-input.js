import NumberInput from "./number-input";

export default class CurrencyInput extends NumberInput {
  constructor(props) {
    super(props);
    this.box = true;
  }
}
