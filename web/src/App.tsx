import Box from '@kiwicom/orbit-components/lib/Box';
import Card, { CardSection } from '@kiwicom/orbit-components/lib/Card';
import Layout, { LayoutColumn } from '@kiwicom/orbit-components/lib/Layout';
import styled from 'styled-components';
import { Dialer, Input, Output } from './components';
import './App.css';

const StyledBox = styled(Box)`
  height: 330px;
`;

const App = () => (
  <div className="App">
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
        <Card>
          <CardSection>
            <Output />
          </CardSection>
        </Card>
      </LayoutColumn>
    </Layout>
  </div>
);

export default App;
