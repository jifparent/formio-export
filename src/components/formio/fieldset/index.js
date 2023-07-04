const PanelComponent = require('../panel/index.js');

class FieldSetComponent extends PanelComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }
}

module.exports = {
  default: FieldSetComponent
};
