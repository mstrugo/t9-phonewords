import Card, { CardSection } from '@kiwicom/orbit-components/lib/Card';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Layout, { LayoutColumn } from '@kiwicom/orbit-components/lib/Layout';
import { setDefaultClient } from 'micro-graphql-react';
import styled from 'styled-components';
import { Inputs, InputsContextProvider, Output } from './components';
import { client } from './graphql';

setDefaultClient(client);

const StyledAppWrapper = styled.div`
  margin: 20px;
`;

const StyledHeadingWrapper = styled.div`
  padding: 20px;
`;

const App = () => (
  <StyledAppWrapper>
    <StyledHeadingWrapper>
      <Heading spaceAfter="medium" type="title1" as="h1">
        T9 - Phonewords
      </Heading>
    </StyledHeadingWrapper>
    <InputsContextProvider>
      <Layout type="Search">
        <LayoutColumn>
          <Card>
            <CardSection>
              <Inputs />
            </CardSection>
          </Card>
        </LayoutColumn>
        <LayoutColumn>
          <Output />
        </LayoutColumn>
      </Layout>
    </InputsContextProvider>
  </StyledAppWrapper>
);

export default App;
