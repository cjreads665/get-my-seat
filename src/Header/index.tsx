import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import train from "../assets/train.svg";
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems : "center",
            alignContent: "center",
            width : "100%",
          }}>
          <img src={train} alt="train-logo" width="15%" id='logo' />
          <Typography variant="h6" component="div">
            GetMySeat
          </Typography>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
