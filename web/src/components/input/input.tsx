import InputField from '@kiwicom/orbit-components/lib/InputField';

export const Input = () => (
  <InputField
    autoComplete="off"
    dataAttrs={{
      'data-recording-ignore': true,
    }}
    inlineLabel
    label="Input"
    onChange={() => undefined}
    placeholder="Type at least 2 characters"
    type="number"
  />
);
