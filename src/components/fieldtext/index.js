import React from "react";
  import { InputAdornment, TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";



const FieldText = ({
  type,
  value,
  onChange,
  onBlur,
  label,
  variant,
  id,
  InputProps,
  className,
  fullWidth,
  name,
  touched,
  errors,
  inputLabelProps,
  sx
}) => {
  return (
    <TextField
      disableUnderline={true}
      fullWidth={fullWidth || false}
      sx={sx}
      className={className}
      type={type}
      InputProps={InputProps}
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      // InputProps={{
      //   sx: {
      //     color: "white",
      //     "& .MuiInputBase-input": {
      //       color: "white",
      //     },
      //   },
       
      // }}
      
      InputLabelProps={inputLabelProps}
      variant={variant}
      name={name}
      touched={touched}
      errors={errors}
    />
  );
};

export default FieldText;
