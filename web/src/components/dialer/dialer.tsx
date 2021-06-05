import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import styled from 'styled-components';
import { dialerLetters, dialerNumbers } from '../../utils';
import { DialerButton } from '../dialer-button';

const StyledGrid = styled(Grid)`
  justify-content: center;

  button:last-of-type {
    grid-column-start: 2;
  }
`;

export const Dialer = () => {
  const clickHandler = (value: number) => {
    console.log(value);
  };

  return (
    <StyledGrid columnGap="20px" columns="repeat(3, minmax(40px, 1fr))" rows="repeat(4, 60px)">
      {dialerNumbers.map(n => (
        <DialerButton
          key={n}
          disabled={!dialerLetters[n - 1]}
          firstLine={n}
          secondLine={dialerLetters[n - 1]}
          onClick={clickHandler}
        />
      ))}
    </StyledGrid>
  );
};
