const BaseComponent = require('../base/index.js');

class EditGridComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
    console.log(this);
  }
}

module.exports = {
  default: EditGridComponent
};
