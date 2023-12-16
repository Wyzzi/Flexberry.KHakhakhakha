import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-k-hakhakhakha-банк-дан-l');
  this.route('i-i-s-k-hakhakhakha-банк-дан-e',
  { path: 'i-i-s-k-hakhakhakha-банк-дан-e/:id' });
  this.route('i-i-s-k-hakhakhakha-банк-дан-e.new',
  { path: 'i-i-s-k-hakhakhakha-банк-дан-e/new' });
  this.route('i-i-s-k-hakhakhakha-клиент-l');
  this.route('i-i-s-k-hakhakhakha-клиент-e',
  { path: 'i-i-s-k-hakhakhakha-клиент-e/:id' });
  this.route('i-i-s-k-hakhakhakha-клиент-e.new',
  { path: 'i-i-s-k-hakhakhakha-клиент-e/new' });
});

export default Router;
