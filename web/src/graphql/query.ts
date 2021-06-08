export const query = `
  query($term: String!) {
    words(term: $term)
  }
`;
