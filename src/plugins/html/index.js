const FormioExportUtils = require('../../utils/index.js');
const { style } = require('./style.js');

module.exports = {
  default: (component) => {
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
  }
};
