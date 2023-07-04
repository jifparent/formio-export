const _ = require('lodash');
const BaseComponent = require('../base/index.js');

class DateTimeComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    if (_.isNil(this._value)) {
      return this.emptyValue();
    }
    return _.isString(this._value) ? this._value.replace('T', ' ').split('.')[0] + ' UTC' : this._value;
  }
}

module.exports = {
  default: DateTimeComponent
};
