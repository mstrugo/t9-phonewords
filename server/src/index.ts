import cors from 'cors';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { resolvers } from './resolvers';
import { schemas } from './schemas';
import { getEnvironmentPort } from './utils';

const app = express();
const port = getEnvironmentPort();

app.use(cors())

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  rootValue: resolvers,
  schema: schemas,
}));

app.listen(port, () => console.log('Running a GraphQL API server at localhost:4000/graphql'));
