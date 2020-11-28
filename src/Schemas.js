import { schema } from 'normalizr';

const productSchema = new schema.Entity('products', {}, { idAttribute: 'id' });

export default productSchema;
