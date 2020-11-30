import { schema } from 'normalizr';

export const productSchema = new schema.Entity(
  'products',
  {},
  { idAttribute: 'id' }
);

export const cartProductSchema = new schema.Entity(
  'products',
  {},
  { idAttribute: 'productId' }
);
