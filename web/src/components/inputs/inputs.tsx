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
}

export const Inputs = ({ searchAction }: InputsProps) => {
  const [value, setValue] = useState('');

  const changeHandler = (v: string) => {
    setValue(v);

    if (v.length > 1) {
      searchAction(v);
    }
  };

  const clickHandler = (v: number) => changeHandler(`${value}${v}`);

  return (
    <StyledBox align="center" display="flex" wrap="wrap">
      <Input val={value} onChange={changeHandler} />
      <Dialer onClick={clickHandler} />
    </StyledBox>
  );
};
