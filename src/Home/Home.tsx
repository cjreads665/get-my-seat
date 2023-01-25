import { TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import homeImage from "../assets/home-page.jpg";
import { containerStyles, typo, imageBox } from "./styles";
const Home = () => {
  const theme = useTheme();
  const [pnr, setPnr] = useState(0);
  return (
    <div>
      <Box sx={{
        position: "relative"
      }} >
        <img src={homeImage} alt="" id="home-page" />
        <Typography variant="h5" sx={{
          position: "absolute",
          bottom:0,
          margin:2,
          mb:4,
          color: "white",
          fontWeight: "bold"
        }}>
          Get PNR status along with seat information
        </Typography>
      </Box>
      <Container sx={containerStyles}>
        <TextField
          {...("hello" === "hello" ? { error: true } : {})} // if the condition is true add the error attribute
          id="outlined-error"
          label="PNR Number"
          InputProps={{ type: "number" }}
        />
      </Container>
    </div>
  );
};

export default Home;
