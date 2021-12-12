import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Layout from "./components/Layout";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
})
const lightTheme = createTheme()

const App = () => {
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    setDark(!dark)
  }

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <CssBaseline/>
      <Layout dark={dark} toggleDark={toggleDark} />
    </ThemeProvider>
  );
}

export default App;
