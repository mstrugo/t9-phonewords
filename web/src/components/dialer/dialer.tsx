import Button from '@kiwicom/orbit-components/lib/Button';
import Grid from '@kiwicom/orbit-components/lib/utils/Grid';

const letters = [null, 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ', null];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const Dialer = () => {
  return (
    <Grid as="div" columnGap="20px" columns="repeat(3, minmax(40px, 1fr))" rows="repeat(4, 60px)">
      {numbers.map(n => (
        <Button type="primarySubtle" key={n} disabled={!letters[n - 1]}>
          <span>{n}</span>
          <span>{letters[n - 1]}</span>
        </Button>
      ))}
    </Grid>
  );
};
