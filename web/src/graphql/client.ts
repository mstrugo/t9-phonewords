import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHQL_PROD_URL = 'https://t9-phonewords-server.herokuapp.com';
const GRAPHQL_LOCAL_URL = 'http://localhost:4000';

const getGraphUrl = () => (process.env.NODE_ENV === 'production' ? GRAPHQL_PROD_URL : GRAPHQL_LOCAL_URL);

export const client = new ApolloClient({
  uri: `${getGraphUrl()}/graphql`,
  cache: new InMemoryCache(),
});
