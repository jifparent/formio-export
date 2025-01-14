const _ = require('lodash');
const BaseComponent = require('../base/index.js');

class AddressComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    if (_.isNil(this._value)) {
      return this.emptyValue();
    }
    return _.isObject(this._value) ? this._value.formatted_address : this._value;
  }
}

module.exports = {
  default: AddressComponent
};
