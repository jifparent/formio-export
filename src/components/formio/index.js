import TextFieldComponent from './textfield/index.js';
import TextAreaComponent from './textarea/index.js';
import EmailComponent from './email/index.js';
import PasswordComponent from './password/index.js';
import PhoneNumberComponent from './phonenumber/index.js';

import NumberComponent from './number/index.js';
import CurrencyComponent from './currency/index.js';

import DateTimeComponent from './datetime/index.js';
import DayComponent from './day/index.js';
import TimeComponent from './time/index.js';
import AddressComponent from './address/index.js';

import CheckBoxComponent from './checkbox/index.js';
import RadioComponent from './radio/index.js';
import SelectBoxesComponent from './selectboxes/index.js';
import SelectComponent from './select/index.js';
import ResourceComponent from './resource/index.js';

import SurveyComponent from './survey/index.js';
import FileComponent from './file/index.js';
import SignatureComponent from './signature/index.js';

import ContainerComponent from './container/index.js';
import DataGridComponent from './datagrid/index.js';
import EditGridComponent from './editgrid/index.js';

import FormComponent from './form/index.js';

import ColumnsComponent from './columns/index.js';
import PanelComponent from './panel/index.js';
import FieldSetComponent from './fieldset/index.js';
import HtmlElementComponent from './htmlelement/index.js';

import UnknownComponent from './unknown/index.js';

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

export default FormioComponent;
