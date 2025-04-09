import { TextField } from "@mui/material";
import { getIn, useFormikContext } from "formik";
import React from "react";

interface Props {
  name: string;
  label: string;
}

const FormikTextField: React.FC<Props> = ({ name, label, ...props }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  const hasError = getIn(errors, name) && getIn(touched, name);

  return (
    <TextField
      id="textFieldFormik"
      label={label}
      value={getIn(values, name)}
      size="small"
      fullWidth
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(name, event.target.value);
      }}
      error={hasError}
      helperText={hasError && getIn(errors, name)}
      {...props}
    />
  );
};

export default FormikTextField;
