import React, { CSSProperties } from 'react';
import { TextField, FormHelperText, useMediaQuery } from "@mui/material";
import textInputStyles from './TextInput.styes';

interface IProps {
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

const TextInput = (props: IProps) => {
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

  const matches = useMediaQuery('(min-width:600px)');

  const verifyMediaSizeInputBox = () => !matches ?
    { ...textInputStyles.boxTextInput, ...textInputStyles.boxTextInputCell }
    : { ...textInputStyles.boxTextInput, ...textInputStyles.boxTextInputDesk };

  return (
    <article style={ textInputStyles.boxTextInput as CSSProperties }>
      <TextField
        id={ id }
        type={ type }
        label={ label }
        name={ name }
        value={ value }
        onChange={ onChange }
        style={ { ...style, padding: 0 } }
        error={ error }
        variant="outlined"
      />
      <FormHelperText
        style={ !matches ? {...textInputStyles.errorMessageCell  as CSSProperties } : {} }
        error={error}
      >
        {helperText}
      </FormHelperText>
    </article>
  )
}

export default TextInput;
