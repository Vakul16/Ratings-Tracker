import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";
import { muiTheme } from "storybook-addon-material-ui";
// A custom theme for this app
const theme1 = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});
const theme2 = createTheme({
  palette: {
    primary: {
      main: "#8862a1",
    },
    secondary: {
      main: "#f6144a",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});
export default [theme1, theme2];
