import _ from 'lodash';
import BaseComponent from '../base/index.js';

class HtmlElementComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    if (_.isNil(this.component.content)) {
      return this.emptyValue();
    }
    return this.toHtml(this.component.content);
  }
}

export default HtmlElementComponent;
