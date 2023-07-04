const _ = require('lodash');
const BaseComponent = require('../base/index.js');
const { toHtml } = require('./plugins/index.js');

class ContainerComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
    if (this.components && _.isArray(this.components)) {
      let components = [];

      _.forEach(this.components, (c) => {
        components.push(this.createComponent(c, data, options));
      });
      this.components = components;
    }
  }

  toHtml (element) {
    return toHtml(element, this);
  }
}

module.exports = {
  default: ContainerComponent
};
