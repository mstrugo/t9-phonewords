import { memo, useEffect, useState } from 'react';
import { Check } from '@kiwicom/orbit-components/icons';
import Card, { CardSection } from '@kiwicom/orbit-components/lib/Card';
import { ListItem } from '@kiwicom/orbit-components/lib/List';
import Pagination from '@kiwicom/orbit-components/lib/Pagination';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { query } from '../../graphql';
import { useInputsContext } from '../inputs-context';

interface OutputProps {
  paginateAt?: number;
}

const DEFAULT_PAGINATION_AMOUNT = 30;

const StyledCardSection = styled.div`
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledPaginationWrapper = styled.div`
  margin: 0 auto;
`;

const StyledList = styled.ul`
  columns: 3;
  margin: 0;
  padding: 0;
`;

interface QueryData {
  words: string[];
}

interface QueryVariables {
  term: string;
}

const Output = memo(({ paginateAt = DEFAULT_PAGINATION_AMOUNT }: OutputProps) => {
  const { value } = useInputsContext();
  const { loading, error, data } = useQuery<QueryData, QueryVariables>(query, { variables: { term: value } });

  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const handleChange = (newPage: number) => setPage(newPage);

  useEffect(() => {
    let pagesNeeded = 0;

    if (data && data.words.length > paginateAt) {
      pagesNeeded = Math.round(data.words.length / paginateAt);
    }

    setTotalPages(pagesNeeded);
    setPage(1);
  }, [data]);

  const index = (page - 1) * paginateAt;
  const subset = data ? data.words.slice(index, index + paginateAt) : [];

  return (
    <Card>
      <CardSection>
        {error ? (
          'Oops! Something went wrong! Please try again!'
        ) : (
          <StyledCardSection>
            <StyledList>
              {!loading && subset[0] !== '' ? (
                subset.map(res => (
                  <ListItem key={res} icon={<Check color="tertiary" size="small" />}>
                    {res} -
                  </ListItem>
                ))
              ) : (
                <ListItem>Start typing...</ListItem>
              )}
            </StyledList>
            {totalPages > 1 && (
              <StyledPaginationWrapper>
                <Pagination onPageChange={handleChange} pageCount={totalPages} selectedPage={page} size="normal" />
              </StyledPaginationWrapper>
            )}
          </StyledCardSection>
        )}
      </CardSection>
    </Card>
  );
});

Output.displayName = 'Output';

export { Output };
