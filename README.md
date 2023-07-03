# This is a fork from Formio Exports
You can find the original project at https://github.com/airarrazaval/formio-export/

# Formio Export Tools

![GitHub package version](https://img.shields.io/github/package-json/v/jifparent/formio-export.svg) 
![npm (tag)](https://img.shields.io/npm/v/@jfparent/formio-export/latest.svg)


This library is a plain JavaScript export tool for Form.io componets.  This allows to export any Form.io component (with or without submission data) to PDF (other formats comming soon).

* [Live Demo - Source](https://stackblitz.com/edit/formio-export)
* [Live Demo - Package](https://stackblitz.com/edit/formio-export-npm)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

To install this package into your project, you can use the following command within your terminal

```
npm install --save @jfparent/formio-export
```

# Usage

Creating a FormioExport instance

```javascript
import FormioExport from '@jfparent/formio-export';

let exporter = new FormioExport(component, data, options);
```

Using static methods
```javascript
let options = {
  component: component,
  data: data,
  formio: {
    // component specific configuration
  },
  config: {
    // pdf export configuration
  }, 
  i18n: {
    en: {
      "YES": "YES",
      "NO": "NO"
    },
    fr: {
      "YES": "OUI",
      "NO": "NON"
    }
  },
  language: "fr"
};

FormioExport.toPdf(options).then((pdf) => {
  // do something
})
```
# Configuration

The FormioExport instance can be initialized using the following configuration:

```javascript
let options = {
  component: component    // the formio component
  data: data              // the formio component's data or submission
  formio: {
    ignoreLayout: true,   // should html render respect formio layouts (columns, lables positions, etc)
    emptyValue: 'n/a'     // default empty value for rendered components
  }
}
```

The PDF export is also configurable using the following parameters:

```javascript
let config: {
  download: false,      // should the pdf file be downloaded once rendered
  filename: 'file.pdf', // the pdf file name
  margin: 10,           // the pdf file margins
  html2canvas: {
    scale: 2,           // scale factor for rendering the canvas (overall resolution of the canvas image)
    logging: false      // should console logging be enable during rendering
  },
  jsPDF: {
    orientation: 'p',   // PDF orientation - potrait / landscape
    unit: 'mm',         // measurement units used
    format: 'a4'        // paper size - can also accept custom (i.e. A4 - [210, 297])
  }
}
```

To get more information on PDF file configuration please read the following documentation:

* [html2canvas](http://html2canvas.hertzen.com/configuration) - JavaScript html to canvas renderer library
* [jsPDF](https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html) - Client-sdie JavaScript PDF generator library

# Simple Example

Using the FormioExport instance:

```javascript
import FormioExport from '@jfparent/formio-export';

let component = {
  type: 'form',
  title: 'Example',
  display: 'form',
  components: [
    {
      type: 'textfield',
      key: 'name',
      label: 'Name',
      input: true
    },
    {
      type: 'number',
      key: 'age',
      label: 'Age',
      input: true
    }
  ]
};

let submission = {
  _id: '<submission id>',
  owner: '<owner id>',
  modified: '1970-01-01T00:00:00.000Z',
  data: {
    name: 'John Doe',
    age: 25
  }
};

let options = {
  ignoreLayout: true
}

let exporter = new FormioExport(component, submission, options);

exporter.toHtml().then((html) => {
  document.body.appendChild(html);
});

let config = {
  download: false,
  filename: 'example.pdf'
};

exporter.toPdf(config).then((pdf) => {
  // download the pdf file
  pdf.save();
  // get the datauri string
  let datauri = pdf.output('datauristring');
})
```

Using the FormioExport static methods

```javascript
let config = {
  component: component,
  data: submission,
  config
}
```

# Building

Clone git repository:

```
git clone git@github.com:marcelcruz1/formio-export.git
```

Install dependencies:

```
npm install
```

Build browser bundle

```
npm run build
```

## Running the tests

Tests use samples provided in `test/samples` and should use [Form.io's Component JSON Schema](https://github.com/formio/formio.js/wiki/Components-JSON-Schema) structure.

```
npm run test
```

## Built With

* [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) - html2pdf.js converts any webpage or element into a printable PDF entirely client-side using html2canvas and jsPDF

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
