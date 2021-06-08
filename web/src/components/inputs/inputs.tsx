import Box from '@kiwicom/orbit-components/lib/Box';
import styled from 'styled-components';
import { Input } from '../input';
import { Dialer } from '../dialer';

const StyledBox = styled(Box)`
  height: 330px;
`;

export const Inputs = () => (
  <StyledBox align="center" display="flex" wrap="wrap">
    <Input />
    <Dialer />
  </StyledBox>
);
