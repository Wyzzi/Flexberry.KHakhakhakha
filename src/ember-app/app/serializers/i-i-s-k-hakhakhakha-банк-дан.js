import { Serializer as БанкДанSerializer } from
  '../mixins/regenerated/serializers/i-i-s-k-hakhakhakha-банк-дан';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БанкДанSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
