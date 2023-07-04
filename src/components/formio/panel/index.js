const ContainerComponent = require('../container/index.js');

class PanelComponent extends ContainerComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }
}

module.exports = {
  default: PanelComponent
};
