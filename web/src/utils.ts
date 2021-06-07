export const GRAPHQL_PROD_URL = 'https://t9-phonewords-server.herokuapp.com';
export const GRAPHQL_LOCAL_URL = 'http://localhost:4000';

export const getGraphUrl = () => (process.env.NODE_ENV === 'production' ? GRAPHQL_PROD_URL : GRAPHQL_LOCAL_URL);

export const dialerLetters = [undefined, 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ', undefined];

export const dialerNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const forbiddenKeyCodes = ['0', '1', 'e', 'E', '-', '+', '.', ','];

export const getPhonewords = async (term: string) => {
  const query = `
    query {
      words(term: "${term}")
    }
  `;

  const response = await fetch(`${getGraphUrl()}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  return await response.json();
};
