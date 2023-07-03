import BaseComponent from '../base/index.js';
import { toHtml } from './plugins/index.js';

class FileComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  toHtml (element) {
    return toHtml(element, this);
  }
}

export default FileComponent;
