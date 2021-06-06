import { KeyboardEvent } from 'react';
import InputField from '@kiwicom/orbit-components/lib/InputField';
import { forbiddenKeyCodes } from '../../utils';

interface InputProps {
  val: string;
  onChange: (v: string) => void;
}

export const Input = ({ val, onChange }: InputProps) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (forbiddenKeyCodes.includes(e.key)) {
      e.preventDefault();
    }
  };

  // Should be SyntheticEvent<HTMLInputElement, Event>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <InputField
      autoComplete="off"
      dataAttrs={{ 'data-recording-ignore': true }}
      inlineLabel
      label="Input"
      onChange={handleOnChange}
      onKeyDown={handleKeyPress}
      placeholder="Type or click buttons"
      type="number"
      value={val}
    />
  );
};
