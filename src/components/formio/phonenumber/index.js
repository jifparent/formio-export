const TextFieldComponent = require('../textfield/index.js');

class PhoneNumberComponent extends TextFieldComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }
}

module.exports = {
  default: PhoneNumberComponent
};
