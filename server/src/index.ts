import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { resolvers } from './resolvers';
import { schemas } from './schemas';

const app = express();

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  rootValue: resolvers,
  schema: schemas,
}));

app.listen(4000, () => console.log('Running a GraphQL API server at localhost:4000/graphql'));
