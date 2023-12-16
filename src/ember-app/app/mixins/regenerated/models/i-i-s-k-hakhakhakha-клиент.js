import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дР: DS.attr('date'),
  наим: DS.attr('string'),
  номерТел: DS.attr('string'),
  банкДан: DS.belongsTo('i-i-s-k-hakhakhakha-банк-дан', { inverse: null, async: false })
});

export let ValidationRules = {
  дР: {
    descriptionKey: 'models.i-i-s-k-hakhakhakha-клиент.validations.дР.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наим: {
    descriptionKey: 'models.i-i-s-k-hakhakhakha-клиент.validations.наим.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТел: {
    descriptionKey: 'models.i-i-s-k-hakhakhakha-клиент.validations.номерТел.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  банкДан: {
    descriptionKey: 'models.i-i-s-k-hakhakhakha-клиент.validations.банкДан.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-k-hakhakhakha-клиент', {
    наим: attr('ФИО', { index: 0 }),
    номерТел: attr('Номер телефона', { index: 1 }),
    дР: attr('Дата рождения', { index: 2 }),
    банкДан: belongsTo('i-i-s-k-hakhakhakha-банк-дан', 'Номер карты', {
      номКарт: attr('Номер карты', { index: 4 })
    }, { index: 3 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-k-hakhakhakha-клиент', {
    наим: attr('ФИО', { index: 0 }),
    номерТел: attr('Номер телефона', { index: 1 }),
    дР: attr('Дата рождения', { index: 2 }),
    банкДан: belongsTo('i-i-s-k-hakhakhakha-банк-дан', 'Номер карты', {
      номКарт: attr('Номер карты', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
