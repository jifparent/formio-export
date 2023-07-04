const NumberComponent = require('../number/index.js');

class CurrencyComponent extends NumberComponent {
  constructor (component, data) {
    super(component, data);
  }
}

module.exports = {
  default: CurrencyComponent
};
