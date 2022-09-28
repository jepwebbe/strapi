import './App.css';
import AppRouter from './Components/App/Router/AppRouter';
import { ThemeProvider } from "styled-components"
import { useDarkmodeStore } from './Components/DarkmodeSwitch/useDarkmodeStore';
import { darkTheme, lightTheme } from './Components/App/AppTheme/AppTheme';
import { Toggler } from './Components/DarkmodeSwitch/Toggler';
import { GlobalStyles } from './Styles/Global';

function App() {
  const { theme } = useDarkmodeStore()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}>
      <Toggler />
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
