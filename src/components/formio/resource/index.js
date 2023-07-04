const _ = require('lodash');
const FormioExportUtils = require('../../../utils/index.js');
const SelectComponent = require('../select/index.js');

class ResourceComponent extends SelectComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValues () {
    if (_.isNil(this._value)) {
      return this.emptyValue();
    }
    let values = [];

    _.forEach(this._value, (value) => {
      values.push(this.formatValue(value));
    });
    return values;
  }

  formatValue (value) {
    if (_.isNil(value)) {
      return this.emptyValue();
    }
    if (_.isPlainObject(value)) {
      return FormioExportUtils.interpolate(this.template, { item: value });
    }
    return value;
  }
}

module.exports = {
  default: ResourceComponent
};
