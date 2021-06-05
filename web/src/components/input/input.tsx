import { KeyboardEvent } from 'react';
import InputField from '@kiwicom/orbit-components/lib/InputField';
import { forbiddenKeyCodes } from '../../utils';

export const Input = () => {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (forbiddenKeyCodes.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <InputField
      autoComplete="off"
      dataAttrs={{ 'data-recording-ignore': true }}
      inlineLabel
      label="Input"
      onChange={() => undefined}
      onKeyDown={handleKeyPress}
      placeholder="Type or click buttons"
      type="number"
    />
  );
};
