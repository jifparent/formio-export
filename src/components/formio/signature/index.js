const FileComponent = require('../file/index.js');

class SignatureComponent extends FileComponent {
  constructor (component, data, options) {
    super(component, data, options);

    if (this._value) {
      this._value = [{
        storage: 'base64',
        type: 'image/png',
        url: this._value
      }];
    }
  }
}

module.exports = {
  default: SignatureComponent
};
