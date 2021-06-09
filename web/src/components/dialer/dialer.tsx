import { ChevronDoubleLeft } from '@kiwicom/orbit-components/icons';
import Button from '@kiwicom/orbit-components/lib/Button';
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';
import styled from 'styled-components';
import { dialerLetters, dialerNumbers } from '../../utils';
import { DialerButton } from '../dialer-button';
import { useInputsContext } from '../inputs-context';

const StyledGrid = styled(Grid)`
  margin: 0 auto;

  button:nth-child(10) {
    grid-column-start: 2;
  }
`;

export const Dialer = () => {
  const { value, actions } = useInputsContext();

  const clickHandler = (v: number) => actions.changeHandler(`${value}${v}`);

  return (
    <StyledGrid columnGap="20px" columns="repeat(3, minmax(40px, 1fr))" rows="repeat(4, 60px)">
      {dialerNumbers.map(n => (
        <DialerButton
          key={n}
          disabled={!dialerLetters[n - 1]}
          firstLine={n}
          secondLine={dialerLetters[n - 1]}
          onClick={() => clickHandler(n)}
        />
      ))}
      <Button
        iconLeft={<ChevronDoubleLeft />}
        onClick={() => actions.deleteHandler()}
        title="Remove last character"
        type="secondary"
        fullWidth
      />
    </StyledGrid>
  );
};
