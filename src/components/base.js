import { PureComponent } from "react";
import ReactDOM from "react-dom";

export default class MDCBase extends PureComponent {
  constructor(props) {
    super(props);
    this.mdcRootElement = null;
    this.mdcObject = null;
  }

  getConstructor() {
    throw new Error("Implementation of this method is required in subclass.");
  }

  getRootElement() {
    return this.mdcRootElement || ReactDOM.findDOMNode(this);
  }

  componentDidMount() {
    const MDCClass = this.getConstructor();
    this.mdcObject = new MDCClass(this.getRootElement());
  }

  componentWillUnmount() {
    this.mdcObject.destroy();
  }
}
