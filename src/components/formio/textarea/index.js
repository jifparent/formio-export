const TextFieldComponent = require('../textfield/index.js');

class TextAreaComponent extends TextFieldComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }
}

module.exports = {
  default: TextAreaComponent
};
