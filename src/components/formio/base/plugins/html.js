const _ = require('lodash');
const FormioExportUtils = require('../../../../utils/index.js');

module.exports = {
  default: (element, component) => {
    if (component && component.input) {
      let componentElement = FormioExportUtils.createElement('div', {
        class: `formio-component ${component.type}-component`,
        id: Math.random().toString(36).substring(7)
      });
      let labelElement = FormioExportUtils.createElement('div', {
        class: 'col component-label'
      }, component.label);
      let valueElement = FormioExportUtils.createElement('div', {
        class: 'col component-value'
      }, component.formatValue());

      if (!component.hideLabel && (!component.inDataGrid || component.dataGridLabel)) {
        labelElement.className += component._options.equalCols ? '' : ' col-sm-3';
        valueElement.className += component._options.equalCols ? '' : ' col-sm-9';
        componentElement.appendChild(labelElement);
      }
      componentElement.appendChild(valueElement);
      if (_.isElement(element)) {
        element.appendChild(componentElement);
      }
      return componentElement;
    }
    if (component && component.content) {
      let componentElement = FormioExportUtils.createElement('div', {
        class: `formio-component ${component.type}-component`,
        id: Math.random().toString(36).substring(7)
      });

      componentElement.innerHTML = component.content;
      if (_.isElement(element)) {
        element.appendChild(componentElement);
      }
      return componentElement;
    }
    return null;
  }
};
