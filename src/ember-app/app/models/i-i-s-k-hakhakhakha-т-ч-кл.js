import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧКлMixin
} from '../mixins/regenerated/models/i-i-s-k-hakhakhakha-т-ч-кл';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧКлMixin, Validations, {
});

defineProjections(Model);

export default Model;
