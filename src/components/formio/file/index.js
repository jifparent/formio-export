const BaseComponent = require('../base/index.js');
const { toHtml } = require('./plugins/index.js');

class FileComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  toHtml (element) {
    return toHtml(element, this);
  }
}

module.exports = {
  default: FileComponent
};
