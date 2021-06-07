import cors from 'cors';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { resolvers } from './resolvers';
import { schemas } from './schemas';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors())

app.use("*", (_, res) => {
  res.send("<h1>Welcome!</h1>");
});

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  rootValue: resolvers,
  schema: schemas,
}));

app.listen(port, () => console.log(`Running a GraphQL API server at localhost:${port}/graphql`));
