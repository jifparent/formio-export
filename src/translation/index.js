import FormioExportUtils from './../utils';

export default class FormioExportTranslation {
  static translateComponent (components, options) {
    if (!(options.hasOwnProperty('i18n') && !!options.i18n)) {
      return components;
    }

    if (!(options.hasOwnProperty('language') && !!options.language)) {
      return components;
    }

    FormioExportUtils.eachComponent(components, (component) => {
      ['label', 'content', 'customMessage'].forEach((property) => {
        FormioExportTranslation.translateProperty(property, component, FormioExportTranslation, options);
      });
    }, true);

    return components;
  }

  static translateProperty (property, component, FormioExportTranslation, options) {
    if (component.hasOwnProperty(property)) {
      component[property] = FormioExportTranslation.translate(component[property], options);
    }
    ['questions', 'values'].forEach((arrayProperty) => {
      FormioExportTranslation.translateArrayProperty(component,
        arrayProperty,
        property,
        FormioExportTranslation,
        options);
    });
  }

  static translateArrayProperty (component, arrayProperty, property, FormioExportTranslation, options) {
    if (component.hasOwnProperty(arrayProperty)) {
      component[arrayProperty].forEach((arrayProperty) => {
        if (arrayProperty.hasOwnProperty(property)) {
          arrayProperty[property] = FormioExportTranslation.translate(arrayProperty[property], options);
        }
      });
    }
  }

  static translate (value, options) {
    var translated;

    if (options && options.i18n) {
      translated = options.i18n[options.language][value];
      return translated ? translated : value;
    }
    return value;
  }
};
