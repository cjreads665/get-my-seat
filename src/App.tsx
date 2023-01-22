import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from "./Header";
import { ThemeProvider } from "@mui/material";
import { appTheme } from './themes/theme';
import Home from './Home/Home';
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
    <Home/>
    </ThemeProvider>
    </div>
  )
}

export default App
