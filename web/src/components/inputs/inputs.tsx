import Box from '@kiwicom/orbit-components/lib/Box';
import styled from 'styled-components';
import { Input } from '../input';
import { Dialer } from '../dialer';
import { useEffect, useState } from 'react';

const StyledBox = styled(Box)`
  height: 330px;
`;

interface InputsProps {
  searchAction: (value: string) => void;
}

export const Inputs = ({ searchAction }: InputsProps) => {
  const [value, setValue] = useState('');

  const changeHandler = (v: string) => setValue(v);

  const clickHandler = (v: number) => changeHandler(`${value}${v}`);

  useEffect(() => {
    if (value.length > 1) {
      searchAction(value);
    }
  }, [searchAction, value]);

  return (
    <StyledBox align="center" display="flex" wrap="wrap">
      <Input val={value} onChange={changeHandler} />
      <Dialer onClick={clickHandler} />
    </StyledBox>
  );
};
