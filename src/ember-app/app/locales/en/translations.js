import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKHakhakhakhaБанкДанLForm from './forms/i-i-s-k-hakhakhakha-банк-дан-l';
import IISKHakhakhakhaКлиентLForm from './forms/i-i-s-k-hakhakhakha-клиент-l';
import IISKHakhakhakhaБанкДанEForm from './forms/i-i-s-k-hakhakhakha-банк-дан-e';
import IISKHakhakhakhaКлиентEForm from './forms/i-i-s-k-hakhakhakha-клиент-e';
import IISKHakhakhakhaБанкДанModel from './models/i-i-s-k-hakhakhakha-банк-дан';
import IISKHakhakhakhaКлиентModel from './models/i-i-s-k-hakhakhakha-клиент';
import IISKHakhakhakhaТЧКлModel from './models/i-i-s-k-hakhakhakha-т-ч-кл';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-k-hakhakhakha-банк-дан': IISKHakhakhakhaБанкДанModel,
    'i-i-s-k-hakhakhakha-клиент': IISKHakhakhakhaКлиентModel,
    'i-i-s-k-hakhakhakha-т-ч-кл': IISKHakhakhakhaТЧКлModel
  },

  'application-name': 'K hakhakhakha',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'K hakhakhakha',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'K hakhakhakha',
          title: 'K hakhakhakha'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'k-hakhakhakha': {
          caption: 'KHakhakhakha',
          title: 'KHakhakhakha',
          'i-i-s-k-hakhakhakha-банк-дан-l': {
            caption: 'Банковские данные',
            title: ''
          },
          'i-i-s-k-hakhakhakha-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-k-hakhakhakha-банк-дан-l': IISKHakhakhakhaБанкДанLForm,
    'i-i-s-k-hakhakhakha-клиент-l': IISKHakhakhakhaКлиентLForm,
    'i-i-s-k-hakhakhakha-банк-дан-e': IISKHakhakhakhaБанкДанEForm,
    'i-i-s-k-hakhakhakha-клиент-e': IISKHakhakhakhaКлиентEForm
  },

});

export default translations;
