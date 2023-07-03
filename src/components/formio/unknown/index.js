import BaseComponent from '../base/index.js';

export default class UnknownComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  toHtml (element) {
    return null;
  }
}
