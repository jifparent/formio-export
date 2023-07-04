const TextFieldComponent = require('../textfield/index.js');

class TimeComponent extends TextFieldComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }
}

module.exports = {
  default: TimeComponent
};
