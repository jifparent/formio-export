const TextFieldComponent = require('./textfield/index.js');
const TextAreaComponent = require('./textarea/index.js');
const EmailComponent = require('./email/index.js');
const PasswordComponent = require('./password/index.js');
const PhoneNumberComponent = require('./phonenumber/index.js');

const NumberComponent = require('./number/index.js');
const CurrencyComponent = require('./currency/index.js');

const DateTimeComponent = require('./datetime/index.js');
const DayComponent = require('./day/index.js');
const TimeComponent = require('./time/index.js');
const AddressComponent = require('./address/index.js');

const CheckBoxComponent = require('./checkbox/index.js');
const RadioComponent = require('./radio/index.js');
const SelectBoxesComponent = require('./selectboxes/index.js');
const SelectComponent = require('./select/index.js');
const ResourceComponent = require('./resource/index.js');

const SurveyComponent = require('./survey/index.js');
const FileComponent = require('./file/index.js');
const SignatureComponent = require('./signature/index.js');

const ContainerComponent = require('./container/index.js');
const DataGridComponent = require('./datagrid/index.js');
const EditGridComponent = require('./editgrid/index.js');

const FormComponent = require('./form/index.js');

const ColumnsComponent = require('./columns/index.js');
const PanelComponent = require('./panel/index.js');
const FieldSetComponent = require('./fieldset/index.js');
const HtmlElementComponent = require('./htmlelement/index.js');

const UnknownComponent = require('./unknown/index.js');

const FormioComponent = {
  textfield: TextFieldComponent,
  textarea: TextAreaComponent,
  email: EmailComponent,
  password: PasswordComponent,
  phoneNumber: PhoneNumberComponent,
  number: NumberComponent,
  currency: CurrencyComponent,
  datetime: DateTimeComponent,
  day: DayComponent,
  time: TimeComponent,
  address: AddressComponent,
  checkbox: CheckBoxComponent,
  radio: RadioComponent,
  selectboxes: SelectBoxesComponent,
  select: SelectComponent,
  resource: ResourceComponent,
  survey: SurveyComponent,
  file: FileComponent,
  signature: SignatureComponent,
  container: ContainerComponent,
  datagrid: DataGridComponent,
  editgrid: EditGridComponent,
  columns: ColumnsComponent,
  panel: PanelComponent,
  fieldset: FieldSetComponent,
  htmlelement: HtmlElementComponent,
  unknown: UnknownComponent,
  form: FormComponent,
  create: (component, data, options) => {
    let c = null;

    if (!component) {
      return null;
    } else if (FormioComponent.hasOwnProperty(component.type)) {
      c = new FormioComponent[component.type](component, data, options);
    } else {
      c = new UnknownComponent(component, data, options);
    }
    return c;
  }
};

module.exports = {
  default: FormioComponent
};
