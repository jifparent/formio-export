const BaseComponent = require('../base/index.js');
const FormioExportTranslation = require('../../../translation/index.js');
const { toHtml } = require('./plugins/index.js');

class CheckBoxComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    const YES = FormioExportTranslation.translate('YES', this._options);
    const NO = FormioExportTranslation.translate('NO', this._options);

    return this._value ? YES : NO;
  }
  toHtml (element) {
    return toHtml(element, this);
  }
}

module.exports = {
  default: CheckBoxComponent
};
