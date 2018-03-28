import { PureComponent } from "react";
import ReactDOM from "react-dom";

const SCROLL_OFFSET = 256;

export default class MDCBase extends PureComponent {
  constructor(props) {
    super(props);
    this.mdcRootElement = null;
    this.mdcObject = null;
  }

  scrollToTop() {
    const rect = this.mdcRootElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo(0, rect.top + scrollTop - SCROLL_OFFSET);
  }

  getConstructor() {
    throw new Error("Implementation of this method is required in subclass.");
  }

  getRootElement() {
    if (!this.mdcRootElement) {
      this.mdcRootElement = ReactDOM.findDOMNode(this);
    }

    return this.mdcRootElement;
  }

  componentDidMount() {
    const MDCClass = this.getConstructor();
    this.mdcObject = new MDCClass(this.getRootElement());
  }

  componentWillUnmount() {
    this.mdcObject.destroy();
  }
}
