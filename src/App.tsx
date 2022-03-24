import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, IconButton, Typography, Button, createTheme, ThemeProvider, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StackGrid from "react-stack-grid";
import { ButtonDisplay } from './components/ButtonDisplay';


const theme = createTheme({
  palette: {
    background: {
      paper: '#e4b5a0',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    primary: {
      main: '#964322',
    },
    secondary: {
      main: '#e4f3fb'
    }
  },
});



const App = () => {

  return (
    <ThemeProvider theme={theme} >

      <Paper elevation={0} sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        height: '100%',
        width: '100%'
      }}>
        <Paper className="App-header" sx={{}}>
          <AppBar position="static" >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Button Boys
              </Typography>
            </Toolbar>
          </AppBar>
        </Paper>
        <Paper elevation={0} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 9,
          height: '80%',
          overflowY: 'scroll',
        }}>
          <ButtonDisplay />

        </Paper>
      </Paper>
    </ThemeProvider >

  );
}

export default App;