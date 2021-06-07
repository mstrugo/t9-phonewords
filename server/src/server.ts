import cors from 'cors';
import express, { Response, Request } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { resolvers } from './resolvers';
import { schemas } from './schemas';

const app = express();

app.use(cors())

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  rootValue: resolvers,
  schema: schemas,
}));

app.use("*", (_: Request, res: Response) => {
  res.send("<h1>Forbidden!</h1>");
});

export default app;
