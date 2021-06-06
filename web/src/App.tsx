import Card, { CardSection } from '@kiwicom/orbit-components/lib/Card';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Layout, { LayoutColumn } from '@kiwicom/orbit-components/lib/Layout';
import { useState } from 'react';
import styled from 'styled-components';
import { Inputs, Output } from './components';

const StyledAppWrapper = styled.div`
  margin: 20px;
`;

const StyledHeadingWrapper = styled.div`
  padding: 20px;
`;

const App = () => {
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getResults = (query: string) => {
    console.log('eff');
    if (!loading) {
      console.log({ query });
      setLoading(true);
      setResults([...results, 'test']);
    }
  };

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
              <Inputs searchAction={getResults} />
            </CardSection>
          </Card>
        </LayoutColumn>
        <LayoutColumn>
          <Output results={results} />
        </LayoutColumn>
      </Layout>
    </StyledAppWrapper>
  );
};

export default App;
