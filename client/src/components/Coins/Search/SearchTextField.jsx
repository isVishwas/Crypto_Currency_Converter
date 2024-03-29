import { styled, TextField } from "@mui/material";

import React from "react";

const SearchTextField = (props) => {
  const { children } = props;

  const SearchTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "yellow",
      },
      "&:hover fieldset": {
        borderColor: "green",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });

  return <SearchTextField {...props}>{children}</SearchTextField>;
};

// Test -------------------------- Exporting the current component ------------------------
export default SearchTextField;
