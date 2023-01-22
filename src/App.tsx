import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from "./Header";
import { ThemeProvider } from "@mui/material";
import { appTheme } from './themes/theme';
function App() {


// axios.get('http://localhost:8080/status')
//             .then(res => {
//                console.log(res);
//             })
//             .catch(error => {
//                 console.log(error);
//             });

  return (
    <div className="App">
    <ThemeProvider theme={appTheme}>
    <Header/>
    </ThemeProvider>
    </div>
  )
}

export default App
