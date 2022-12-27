// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Industry, Company, Home } = initSchema(schema);

export {
  Industry,
  Company,
  Home
};