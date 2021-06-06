import { memo } from 'react';
import Card, { CardSection } from '@kiwicom/orbit-components/lib/Card';
import List, { ListItem } from '@kiwicom/orbit-components/lib/List';

interface OutputProps {
  loading: boolean;
  results: string[];
}

const Output = memo(({ loading, results }: OutputProps) => (
  <Card loading={loading}>
    <CardSection>
      <List>
        {results.map(res => (
          <ListItem key={res}> {res} </ListItem>
        ))}
      </List>
    </CardSection>
  </Card>
));

Output.displayName = 'Output';

export { Output };
