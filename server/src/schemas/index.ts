import { buildSchema } from 'graphql';

export const schemas = buildSchema(`
  type Query {
    words(term: String!): [String]
  }
`);
