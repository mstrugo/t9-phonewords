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
  firstLine: number;
  secondLine?: string | null;
  onClick: (value: number) => void;
}

export const DialerButton = ({ disabled, firstLine, secondLine, onClick }: DialerProps) => (
  <Button type="primarySubtle" disabled={disabled} onClick={() => onClick(firstLine)}>
    <StyledText>{firstLine}</StyledText>
    <StyledText>{secondLine}</StyledText>
  </Button>
);
