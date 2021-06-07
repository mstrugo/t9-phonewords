import { memo, useEffect, useState } from 'react';
import { Check } from '@kiwicom/orbit-components/icons';
import Card, { CardSection } from '@kiwicom/orbit-components/lib/Card';
import { ListItem } from '@kiwicom/orbit-components/lib/List';
import Pagination from '@kiwicom/orbit-components/lib/Pagination';
import styled from 'styled-components';

interface OutputProps {
  loading: boolean;
  results: string[];
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

const Output = memo(({ loading, results, paginateAt = DEFAULT_PAGINATION_AMOUNT }: OutputProps) => {
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const handleChange = (newPage: number) => setPage(newPage);

  useEffect(() => {
    let pagesNeeded = 0;

    if (results.length > paginateAt) {
      pagesNeeded = Math.round(results.length / paginateAt);
    }

    setTotalPages(pagesNeeded);
    setPage(1);
  }, [results]);

  const index = (page - 1) * paginateAt;
  const subset = results.slice(index, index + paginateAt);

  return (
    <Card loading={loading}>
      <CardSection>
        <StyledCardSection>
          <StyledList>
            {subset.map(res => (
              <ListItem key={res} icon={<Check color="tertiary" size="small" />}>
                {res}
              </ListItem>
            ))}
          </StyledList>
          {totalPages > 1 && (
            <StyledPaginationWrapper>
              <Pagination onPageChange={handleChange} pageCount={totalPages} selectedPage={page} size="normal" />
            </StyledPaginationWrapper>
          )}
        </StyledCardSection>
      </CardSection>
    </Card>
  );
});

Output.displayName = 'Output';

export { Output };
