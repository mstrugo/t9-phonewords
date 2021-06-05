import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import styled from 'styled-components';
import { DialerButton } from '../dialer-button';

const StyledGrid = styled(Grid)`
  justify-content: center;

  button:last-of-type {
    grid-column-start: 2;
  }
`;

const letters = [undefined, 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ', undefined];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const Dialer = () => {
  return (
    <StyledGrid columnGap="20px" columns="repeat(3, minmax(40px, 1fr))" rows="repeat(4, 60px)">
      {numbers.map(n => (
        <DialerButton key={n} disabled={!letters[n - 1]} firstLine={n} secondLine={letters[n - 1]} />
      ))}
    </StyledGrid>
  );
};
