import React, { CSSProperties } from 'react';
import { TextField, FormHelperText } from "@mui/material";

interface Props {
  id?: string;
  value: string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error?: boolean;
  helperText?: string;
  label?: string;
  type?: string;
  style?: CSSProperties;
}

const TextInput = (props: Props) => {
  const {
    id,
    type = "text",
    label,
    name,
    value,
    onChange,
    style,
    helperText,
    error,
  } = props;
  return (
    <>
      <TextField
        id={ id }
        type={ type }
        label={ label }
        name={ name }
        value={ value }
        onChange={ onChange }
        style={ style }
        error={ error }
        variant="outlined"
      />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </>
  )
}

export default TextInput;