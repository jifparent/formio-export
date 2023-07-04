const BaseComponent = require('../base/index.js');

module.exports = {
  default: class UnknownComponent extends BaseComponent {
    constructor (component, data, options) {
      super(component, data, options);
    }

    toHtml (element) {
      return null;
    }
  }
};
