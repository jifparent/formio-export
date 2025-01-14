const FormioExportUtils = require('../../utils/index.js');
/* eslint max-len:off */
module.exports = {
  style: FormioExportUtils.createElement('style', { type: 'text/css' }, `
  .card,
  .col {
    position: relative
  }

  .card,
  body {
    background-color: #fff
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.3;
    color: #212529;
    text-align: left
  }

  .card-header,
  #formio__export .formio-component.grid-component>.component-value .grid-header,
  .text-bold {
    font-weight: 700
  }

  .card-header,
  .text-center {
    text-align: center
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -8px;
    margin-left: -8px
  }

  .col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px
  }

  .card {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: none;
    border-radius: 0
  }

  .card-header {
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, .03);
    border-bottom: 1px solid rgba(0, 0, 0, .125)
  }

  .card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
  }

  .col-sm-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
  }
  .col-sm-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%
  }

  .text-right {
    text-align: right
  }

  .text-left {
    text-align: left
  }

  .form-title,
  #formio__export .formio-component.signature-component>.component-value {
    text-align: center
  }

  #formio__module.exports = {
    border: 1px solid #ddd;
    font-family: Lato;
    max-width: 790px
  }

  #formio__export .formio-component:not(.no-layout) {
    border-top: 1px solid #ddd;
    min-height: 32px;
    display: flex;
    flex-direction: row
  }

  #formio__export>.formio-component:first-child {
    border-top: none
  }

  #formio__export .formio-component.no-layout {
    flex-direction: column
  }

  #formio__export .formio-component.no-layout>.col {
    padding: 0;
    border-top: 1px solid #ddd
  }

  #formio__export .formio-component.columns-component>.col>.formio-component,
  #formio__export .formio-component>.component-value.card-body.grid-transpose>.grid-row:first-child {
    border-top: none
  }

  #formio__export .formio-component:not(.card)>.component-label {
    border-right: 1px solid #ddd;
    font-weight: 700;
    padding: 8px
  }

  #formio__export .formio-component.card>.component-label {
    border-right: none
  }

  #formio__export .formio-component>.component-value {
    padding: 8px
  }

  #formio__export .formio-component>.component-value>.component-item {
    display: block
  }

  #formio__export .formio-component>.component-value>img {
    max-width: 250px;
      max-height: 70px;
  }

  #formio__export .formio-component:not(.survey-component):not(.grid-component)>.component-value.card-body {
    padding: 0
  }

  #formio__export .formio-component>.component-value.card-body.grid-transpose {
    padding: 0 8px
  }

  .form-title {
    text-transform: uppercase
  }

  #formio__export .formio-component.form-component {
    flex-direction: column
  }

  #formio__export .formio-component.currency-component>.component-value::before {
    content: "$"
  }

  #formio__export .formio-component.columns-component.no-layout {
    flex: columns
  }

  #formio__export .formio-component.columns-component>.col:not(:last-child)>.formio-component {
    border-right: 1px solid #ddd
  }

  #formio__export .formio-component.grid-component>.component-value {
    padding: 8px
  }

  #formio__export .formio-component.grid-component>.component-value .grid-row:not(.grid-header) {
    border-top: 1px solid #ddd
  }

  #formio__export .formio-component.card>.card-body>.formio-component:first-child,
  #formio__export .formio-component.container-component>.component-value>.formio-component:first-child,
  #formio__export .formio-component.grid-component>.component-value .grid-row>.grid-cell>.formio-component {
    border-top: none
  }

  #formio__export .formio-component.grid-component>.component-value .grid-row>.grid-cell {
    padding: 0
  }

  #formio__export .formio-component.grid-component>.component-value .grid-header>.grid-cell {
    padding: 8px
  }

  #formio__export .formio-component.grid-component>.component-value.grid-transpose>.row>.col:first-child {
    padding: 8px;
    border-right: 1px solid #ddd
  }

  #formio__export .formio-component.container-component>.component-value {
    padding: 0
  }

  #formio__export .formio-component.card,
  #formio__export .formio-component.grid-component,
  #formio__export .formio-component.htmlelement-component {
    flex-direction: column
  }

  #formio__export .formio-component.grid-component>.card-body,
  #formio__export .formio-component.survey-component .component-value>.survey-question>* {
    padding: 8px
  }`)
};
