import FormioExportUtils from '../../utils';
import { style } from './style';

export default (component) => {
  return new Promise((resolve, reject) => {
    try {
      let container = FormioExportUtils.createElement('div', { id: 'formio__export' });
      let head = FormioExportUtils.createElement('head');
      let body = FormioExportUtils.createElement('body');

      component.toHtml(container);
      body.appendChild(container);

      head.appendChild(FormioExportUtils.createElement('meta', {
        'http-equiv': 'Content-Type',
        content: 'text/html; charset=UTF-8' }));
      head.appendChild(FormioExportUtils.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0' }));
      head.appendChild(style);

      let htmlPage = FormioExportUtils.createElement('html', { xmlns: 'http://www.w3.org/1999/xhtml' }, head, body);

      resolve(htmlPage);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
