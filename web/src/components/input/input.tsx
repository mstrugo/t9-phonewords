import { KeyboardEvent } from 'react';
import { Remove } from '@kiwicom/orbit-components/icons';
import InputField from '@kiwicom/orbit-components/lib/InputField';
import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
import { forbiddenKeyCodes } from '../../utils';
import { useInputsContext } from '../inputs-context';

export const Input = () => {
  const { value, actions } = useInputsContext();

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (forbiddenKeyCodes.includes(e.key)) {
      e.preventDefault();
    }
  };

  // Should be SyntheticEvent<HTMLInputElement, Event>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnChange = (e: any) => {
    actions.changeHandler(e.target.value);
  };

  const handleClear = () => actions.clearHandler();

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
      value={value}
    />
  );
};
