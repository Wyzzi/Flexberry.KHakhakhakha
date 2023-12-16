import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-hakhakhakha-клиент', 'Unit | Model | i-i-s-k-hakhakhakha-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-k-hakhakhakha-банк-дан',
    'model:i-i-s-k-hakhakhakha-клиент',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
