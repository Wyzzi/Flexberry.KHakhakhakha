import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.k-hakhakhakha.caption'),
          title: i18n.t('forms.application.sitemap.k-hakhakhakha.title'),
          children: [{
            link: 'i-i-s-k-hakhakhakha-банк-дан-l',
            caption: i18n.t('forms.application.sitemap.k-hakhakhakha.i-i-s-k-hakhakhakha-банк-дан-l.caption'),
            title: i18n.t('forms.application.sitemap.k-hakhakhakha.i-i-s-k-hakhakhakha-банк-дан-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-k-hakhakhakha-клиент-l',
            caption: i18n.t('forms.application.sitemap.k-hakhakhakha.i-i-s-k-hakhakhakha-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.k-hakhakhakha.i-i-s-k-hakhakhakha-клиент-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})