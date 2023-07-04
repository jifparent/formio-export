const _ = require('lodash');
const BaseComponent = require('../base/index.js');

const { toHtml } = require('./plugins/index.js');

class SelectBoxesComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  toHtml (element) {
    return toHtml(element, this);
  }

  formatValue (value) {
    if (_.isNil(value)) {
      return BaseComponent.emptyValue;
    }
    let item = _.find(this.values, (o) => {
      return o.value === value;
    });

    return item ? item.label : value;
  }

  formatValues () {
    if (_.isNil(this._value)) {
      return [];
    }
    let values = [];

    _.forEach(this._value, (selected, value) => {
      if (selected) {
        values.push(this.formatValue(value));
      }
    });
    return values;
  }
}

module.exports = {
  default: SelectBoxesComponent
};
