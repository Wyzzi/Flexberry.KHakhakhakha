import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-hakhakhakha-банк-дан', 'Unit | Serializer | i-i-s-k-hakhakhakha-банк-дан', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-k-hakhakhakha-банк-дан',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-k-hakhakhakha-банк-дан',
    'model:i-i-s-k-hakhakhakha-клиент',
    'model:i-i-s-k-hakhakhakha-т-ч-кл',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
