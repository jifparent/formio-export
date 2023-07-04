const _ = require('lodash');
const BaseComponent = require('../base/index.js');

class TextFieldComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    if (_.isEmpty(this._value)) {
      return this.emptyValue();
    }
    return _.isString(this._value) ? this._value : this._value.toString();
  }
}

module.exports = {
  default: TextFieldComponent
};
