import { useState } from 'react';
import Box from '@kiwicom/orbit-components/lib/Box';
import styled from 'styled-components';
import { Input } from '../input';
import { Dialer } from '../dialer';

const StyledBox = styled(Box)`
  height: 330px;
`;

interface InputsProps {
  searchAction: (value: string) => void;
  clearResultsAction: () => void;
}

export const Inputs = ({ searchAction, clearResultsAction }: InputsProps) => {
  const [value, setValue] = useState('');

  const changeHandler = (v: string) => {
    setValue(v);

    if (v.length > 0) {
      searchAction(v);
    } else {
      clearResultsAction();
    }
  };

  const clickHandler = (v: number) => {
    let newVal;

    if (v > 0) {
      newVal = `${value}${v}`;
    } else {
      newVal = value.substring(0, value.length - 1);
    }

    changeHandler(newVal);
  };

  return (
    <StyledBox align="center" display="flex" wrap="wrap">
      <Input val={value} onChange={changeHandler} />
      <Dialer onClick={clickHandler} />
    </StyledBox>
  );
};
