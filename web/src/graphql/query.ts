import { gql } from '@apollo/client';

export const query = gql`
  query ($term: String!) {
    words(term: $term)
  }
`;
