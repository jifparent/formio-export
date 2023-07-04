const TextFieldComponent = require('../textfield/index.js');

class EmailComponent extends TextFieldComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }
}

module.exports = {
  default: EmailComponent
};
