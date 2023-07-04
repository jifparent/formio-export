const Html2Pdf = require('html2pdf.js');
const FormioExportUtils = require('../../utils/index.js');

module.exports = {
  default: (config = {}) => {
    return new Promise((resolve, reject) => {
      try {
        config = FormioExportUtils.verifyProperties(config, {
          source: {
            type: Element,
            required: true
          }
        });
        Html2Pdf.getPdf(config).then((pdf) => resolve(pdf));
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }
};
