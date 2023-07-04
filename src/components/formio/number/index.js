const _ = require('lodash');
const BaseComponent = require('../base/index.js');

class NumberComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    if (_.isNil(this._value)) {
      return this.emptyValue();
    }
    return this._value.toLocaleString();
  }
}

module.exports = {
  default: NumberComponent
};
