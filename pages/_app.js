import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const theme = createTheme({ 
  palette: {
    primary: {
      light: "#757ce8",
      main: "#f1f1f1",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      main: "#922dcc",
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    </ThemeProvider>
  ) ;
}

export default MyApp;
