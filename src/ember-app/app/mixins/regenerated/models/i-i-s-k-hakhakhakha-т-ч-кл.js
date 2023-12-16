import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колво: DS.attr('number'),
  продукт: DS.attr('string'),
  клиент: DS.belongsTo('i-i-s-k-hakhakhakha-клиент', { inverse: 'тЧКл', async: false })
});

export let ValidationRules = {
  колво: {
    descriptionKey: 'models.i-i-s-k-hakhakhakha-т-ч-кл.validations.колво.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  продукт: {
    descriptionKey: 'models.i-i-s-k-hakhakhakha-т-ч-кл.validations.продукт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-k-hakhakhakha-т-ч-кл.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧКлE', 'i-i-s-k-hakhakhakha-т-ч-кл', {
    продукт: attr('Продукт', { index: 0 }),
    колво: attr('Количество продуктов', { index: 1 })
  });
};
