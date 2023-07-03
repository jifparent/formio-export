import Html2Pdf from 'html2pdf.js';
import FormioExportUtils from '../../utils';

export default (config = {}) => {
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
};
