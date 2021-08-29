import React from 'react';
import { Button, ThemeProvider, DefaultTheme, setRRTColor } from 'react-ridio-theme';
import './App.css';

function App() {
  return (
    <ThemeProvider themes={{
      them1: DefaultTheme,
      them2: { ...DefaultTheme, colors: { ...DefaultTheme.colors, action: setRRTColor("#F714FF") } }
    }} activeTheme="them1">
      <div className="App rrt-root">
        <Button>Teste</Button>
        <ThemeProvider activeTheme="them2">
          <Button>Teste</Button>
        </ThemeProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;