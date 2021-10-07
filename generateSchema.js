import { GraphQLClient } from 'graphql-request';
import { generateTypeScriptTypes } from 'graphql-schema-typescript';
import { buildClientSchema, getIntrospectionQuery } from 'graphql';
import { config } from 'dotenv';

config();

const data = await new GraphQLClient(process.env.ADMIN_ENDPOINT, {
  headers: {
    'X-Shopify-Access-Token': process.env.ACCESS_TOKEN,
  },
}).request(getIntrospectionQuery());
const build = buildClientSchema(data);
await generateTypeScriptTypes(build, './index.d.ts', { typePrefix: '' });