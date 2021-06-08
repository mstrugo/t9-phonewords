import { createContext, ReactNode, useState, useContext } from 'react';

type Actions = {
  changeHandler: (v: string) => void;
  clearHandler: () => void;
  deleteHandler: () => void;
};
type InputsContextProviderProps = { children: ReactNode };
type InputsContextShape = { value: string; actions: Actions } | undefined;

const InputsContext = createContext<InputsContextShape>(undefined);

export const InputsContextProvider = ({ children }: InputsContextProviderProps) => {
  const [value, setValue] = useState('');

  const changeHandler = (v: string) => setValue(v);

  const clearHandler = () => setValue('');

  const deleteHandler = () => setValue(value.substring(0, value.length - 1));

  const data = {
    value,
    actions: {
      changeHandler,
      clearHandler,
      deleteHandler,
    },
  };

  return <InputsContext.Provider value={data}>{children}</InputsContext.Provider>;
};

export const useInputsContext = () => {
  const context = useContext(InputsContext);

  if (context === undefined) {
    throw new Error('Missing InputsContextProvider');
  }

  return context;
};
