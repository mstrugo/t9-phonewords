import Box from '@kiwicom/orbit-components/lib/Box';
import Card, { CardSection } from '@kiwicom/orbit-components/lib/Card';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Layout, { LayoutColumn } from '@kiwicom/orbit-components/lib/Layout';
import styled from 'styled-components';
import { Dialer, Input, Output } from './components';

const StyledAppWrapper = styled.div`
  margin: 20px;
`;

const StyledHeadingWrapper = styled.div`
  padding: 20px;
`;

const StyledBox = styled(Box)`
  height: 330px;
`;

const App = () => (
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
            <StyledBox align="center" display="flex" wrap="wrap">
              <Input />
              <Dialer />
            </StyledBox>
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn>
        <Output />
      </LayoutColumn>
    </Layout>
  </StyledAppWrapper>
);

export default App;
