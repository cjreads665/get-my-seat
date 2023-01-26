import { Container, Paper, styled, TextField, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Form = () => {
  const theme = useTheme();
  console.log(theme);
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });
  return (
    <Container>
      <Paper
        className="pnr-form"
        elevation={12}
        sx={{
          backgroundColor: theme.palette.secondary.main,
          p: "2rem",
          position: "relative",
          bottom: "1rem",
        }}
      >
        <Typography sx={{color: theme.palette.primary.main}}>Enter your PNR Here</Typography>
        <TextField id="standard-basic" label="PNR" variant="standard" sx={{ input: { color: 'white' } }} />
      </Paper>
    </Container>
  );
};

export default Form;
