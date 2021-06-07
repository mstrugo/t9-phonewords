import { KeyboardEvent } from 'react';
import { Remove } from '@kiwicom/orbit-components/icons';
import InputField from '@kiwicom/orbit-components/lib/InputField';
import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
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

  const handleClear = () => onChange('');

  return (
    <InputField
      autoComplete="off"
      dataAttrs={{ 'data-recording-ignore': true }}
      inlineLabel
      label="Input"
      onChange={handleOnChange}
      onKeyDown={handleKeyPress}
      suffix={
        <ButtonLink compact iconLeft={<Remove />} onClick={handleClear} size="small" type="critical" title="Clear" />
      }
      placeholder="Only numbers 2-9"
      type="number"
      value={val}
    />
  );
};
