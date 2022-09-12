import React, { CSSProperties, useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
} from '@material-ui/core';
import { FormHelperText } from "@mui/material";
import selectOptionStyle from './selectOption.styles';

interface IChildComponentProps {
  label?: string;
  options?: string[] | undefined;
  error?: boolean;
  helperText?: string;
  style?: CSSProperties;
}

const initialSelectOption = {
  status: '',
  open: '',
}

const SelectOption = (props: IChildComponentProps) => {
  const {
    label,
    options,
    error,
    helperText,
    style,
  } = props;

  const [selectOptionData, setSelectOptionData] = useState(initialSelectOption);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement> | any) => {
    const { name, value } = event.target;
    setSelectOptionData({
      ...selectOptionData,
      [name]: value,
    });
  };

  const matches = useMediaQuery('(min-width:600px)');

  const selectSize = !matches ? { width: '30vw' } : { width: '15vw' }

  return (
    <FormControl style={ selectOptionStyle.formControl }>
      <InputLabel htmlFor="demo-controlled-open-select">{ label }</InputLabel>
      <Select
        value={ "" }
        onChange={ handleChange }
        error={ error }
        inputProps={{
          name: "status",
          id: "demo-controlled-open-select",
          "data-testid": "select-input"
        }}
        style={ { ...style, ...selectSize as CSSProperties } }
      >
        {
          options?.map((option: string) => (
            <MenuItem
              value={ option }
              key={ option }
            >
              { option }
            </MenuItem>
          ))
        }
      </Select>
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  );
}

export default SelectOption;
