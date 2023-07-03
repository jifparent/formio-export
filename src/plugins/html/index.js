import FormioExportUtils from '../../utils/index.js';
import { style } from './style.js';

export default (component) => {
  return new Promise((resolve, reject) => {
    try {
      let container = FormioExportUtils.createElement('div', { id: 'formio__export' }, style);

      component.toHtml(container);
      resolve(container);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
