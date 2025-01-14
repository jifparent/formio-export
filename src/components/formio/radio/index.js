const _ = require('lodash');
const BaseComponent = require('../base/index.js');

class RadioComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    if (_.isNil(this._value)) {
      return this.emptyValue();
    }
    let item = _.find(this.values, (o) => {
      return o.value === this._value;
    });

    return item ? item.label : this._value;
  }
}

module.exports = {
  default: RadioComponent
};
