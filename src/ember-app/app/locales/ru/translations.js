import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'K hakhakhakha',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'K hakhakhakha',
          title: 'K hakhakhakha'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-k-hakhakhakha-банк-дан-l': IISKHakhakhakhaБанкДанLForm,
    'i-i-s-k-hakhakhakha-клиент-l': IISKHakhakhakhaКлиентLForm,
    'i-i-s-k-hakhakhakha-банк-дан-e': IISKHakhakhakhaБанкДанEForm,
    'i-i-s-k-hakhakhakha-клиент-e': IISKHakhakhakhaКлиентEForm
  },

});

export default translations;
