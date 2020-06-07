import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#00a79926',
      main: '#00a79980',
      dark: '#00A799',
      contrastText: '#484848',
    },
    secondary: {
      main: '#FF585B',
      contrastText: '#FFFFFF',
    },
  },
  spacing: 8,
});

export default theme;
