import Box from '@kiwicom/orbit-components/lib/Box';
import Card, { CardSection } from '@kiwicom/orbit-components/lib/Card';
import styled from 'styled-components';
import { Input } from '../input';
import { Dialer } from '../dialer';

const StyledBox = styled(Box)`
  height: 330px;
`;

export const Inputs = () => (
  <Card>
    <CardSection>
      <StyledBox align="center" display="flex" wrap="wrap">
        <Input />
        <Dialer />
      </StyledBox>
    </CardSection>
  </Card>
);
