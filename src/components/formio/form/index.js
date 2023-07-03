import ContainerComponent from '../container/index.js';
import { toHtml, getDimensions } from './plugins/index.js';

class FormComponent extends ContainerComponent {
  constructor (component, data, options = {}) {
    super(component, data, options);
  }

  getDimensions () {
    return getDimensions(this);
  }

  toHtml (element) {
    return toHtml(element, this);
  }
}

export default FormComponent;
