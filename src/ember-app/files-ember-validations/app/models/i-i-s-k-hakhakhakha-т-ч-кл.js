import {
  defineNamespace,
  defineProjections,
  Model as ТЧКлMixin
} from '../mixins/regenerated/models/i-i-s-k-hakhakhakha-т-ч-кл';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧКлMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
