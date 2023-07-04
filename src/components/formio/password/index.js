const TextFieldComponent = require('../textfield/index.js');

class PasswordComponent extends TextFieldComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }
}

module.exports = {
  default: PasswordComponent
};
