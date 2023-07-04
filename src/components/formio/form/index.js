const ContainerComponent = require('../container/index.js');
const { toHtml, getDimensions } = require('./plugins/index.js');

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

module.exports = {
  default: FormComponent
};
