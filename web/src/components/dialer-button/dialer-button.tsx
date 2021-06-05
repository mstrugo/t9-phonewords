import Button from '@kiwicom/orbit-components/lib/Button';
import styled from 'styled-components';

const StyledText = styled.span`
  text-align: center;
  display: block;

  &:first-of-type {
    font-size: 20px;
    line-height: 1;
  }

  &:last-of-type {
    font-size: 10px;
  }
`;

interface DialerProps {
  disabled: boolean;
  firstLine: string | number;
  secondLine?: string | null;
}

export const DialerButton = ({ disabled, firstLine, secondLine }: DialerProps) => (
  <Button type="primarySubtle" disabled={disabled}>
    <StyledText>{firstLine}</StyledText>
    <StyledText>{secondLine}</StyledText>
  </Button>
);
