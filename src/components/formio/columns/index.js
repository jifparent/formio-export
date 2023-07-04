const _ = require('lodash');
const BaseComponent = require('../base/index.js');
const { toHtml, getDimensions } = require('./plugins/index.js');

class ColumnsComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);

    if (this.columns && _.isArray(this.columns)) {
      _.forEach(this.columns, (column) => {
        let components = [];

        _.forEach(column.components, (c) => {
          components.push(this.createComponent(c, data));
        });
        column.components = components;
      });
    }
  }

  getDimensions () {
    this._dims = getDimensions(this);
    return this._dims;
  }

  toHtml (element) {
    return toHtml(element, this);
  }
}

module.exports = {
  default: ColumnsComponent
};
