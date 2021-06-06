import { memo } from 'react';
import Card, { CardSection } from '@kiwicom/orbit-components/lib/Card';
import List, { ListItem } from '@kiwicom/orbit-components/lib/List';

interface OutputProps {
  results: string[];
}

const Output = memo(({ results }: OutputProps) => (
  <Card>
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
