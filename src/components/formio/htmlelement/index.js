const _ = require('lodash');
const BaseComponent = require('../base/index.js');

class HtmlElementComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    if (_.isNil(this.component.content)) {
      return this.emptyValue();
    }
    return this.toHtml(this.component.content);
  }
}

module.exports = {
  default: HtmlElementComponent
};
