const BaseComponent = require('../base/index.js');

class TableComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }
}

module.exports = {
  default: TableComponent
};
