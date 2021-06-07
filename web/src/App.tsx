import Card, { CardSection } from '@kiwicom/orbit-components/lib/Card';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Layout, { LayoutColumn } from '@kiwicom/orbit-components/lib/Layout';
import { useState } from 'react';
import styled from 'styled-components';
import { Inputs, Output } from './components';
import { getPhonewords } from './utils';

const StyledAppWrapper = styled.div`
  margin: 20px;
`;

const StyledHeadingWrapper = styled.div`
  padding: 20px;
`;

const defaultResult = ['Start typing...'];

const App = () => {
  const [results, setResults] = useState<string[]>(defaultResult);
  const [loading, setLoading] = useState<boolean>(false);

  const getResults = (query: string) => {
    if (!loading) {
      setLoading(true);

      getPhonewords(query)
        .then(res => {
          setResults(res.data.words);
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }
  };

  const clearResults = () => setResults(defaultResult);

  return (
    <StyledAppWrapper>
      <StyledHeadingWrapper>
        <Heading spaceAfter="medium" type="title1" as="h1">
          T9 - Phonewords
        </Heading>
      </StyledHeadingWrapper>
      <Layout type="Search">
        <LayoutColumn>
          <Card>
            <CardSection>
              <Inputs searchAction={getResults} clearResultsAction={clearResults} />
            </CardSection>
          </Card>
        </LayoutColumn>
        <LayoutColumn>
          <Output loading={loading} results={results} />
        </LayoutColumn>
      </Layout>
    </StyledAppWrapper>
  );
};

export default App;
