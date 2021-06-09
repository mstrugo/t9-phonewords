import Heading from '@kiwicom/orbit-components/lib/Heading';
import Layout, { LayoutColumn } from '@kiwicom/orbit-components/lib/Layout';
import { ApolloProvider } from '@apollo/client';
import styled from 'styled-components';
import { client } from './graphql';
import { Inputs, InputsContextProvider, Output } from './components';

const StyledAppWrapper = styled.div`
  margin: 20px;
`;

const StyledHeadingWrapper = styled.div`
  padding: 20px;
`;

const App = () => (
  <ApolloProvider client={client}>
    <StyledAppWrapper>
      <StyledHeadingWrapper>
        <Heading spaceAfter="medium" type="title1" as="h1">
          T9 - Phonewords
        </Heading>
      </StyledHeadingWrapper>
      <InputsContextProvider>
        <Layout type="Booking">
          <LayoutColumn>
            <Output />
          </LayoutColumn>
          <LayoutColumn>
            <Inputs />
          </LayoutColumn>
        </Layout>
      </InputsContextProvider>
    </StyledAppWrapper>
  </ApolloProvider>
);

export default App;
