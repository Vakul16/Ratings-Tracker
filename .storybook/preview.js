import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import theme from "../src/stories/Theming/theme";
import { withThemes } from "@react-theming/storybook-addon";
import { muiTheme } from "storybook-addon-material-ui";
import { theme1, theme2 } from "../src/stories/Theming/theme";
import Center from "../src/stories/Decorators/Center";
import MediaControlCard from "../src/stories/MaterialTheme/MediaControlCard";
addDecorator((story) => <Center>{story()}</Center>);
// const newTheme = {
//   themeName: "Grey Theme",
//   palette: {
//     primary1Color: "#00bcd4",
//     alternateTextColor: "#4a4a4a",
//     canvasColor: "#616161",
//     textColor: "#bdbdbd",
//     secondaryTextColor: "rgba(255, 255, 255, 0.54)",
//     disabledColor: "#757575",
//     accent1Color: "#607d8b",
//   },
// };
storiesOf("Material-UI/Theme", module)
  .addDecorator(muiTheme([theme1, theme2]))
  .add("Media Control Card", () => <MediaControlCard />);
// export const decorators = [muiTheme([newTheme])];
// export const decorators = [muiTheme([theme1, theme2])];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// import React from "react";
// import { withThemes } from "@react-theming/storybook-addon";
// import { ThemeProvider } from "@material-ui/core";
// import { createTheme } from "@material-ui/core/styles";

// import SignUp from "../src/components/SignUp";
// import { theme1, theme2 } from "../src/stories/Theming/theme";

// const providerFn = ({ theme, children }) => {
//   const serialTheme = JSON.parse(JSON.stringify(theme));
//   const muTheme = createTheme(serialTheme);
//   return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
// };

// export default {
//   title: "MUI Examples",
//   component: SignUp,
//   decorators: [withThemes(null, [theme1, theme2], { providerFn })],
// };

// export const ToStorybook = () => <SignUp />;

// ToStorybook.story = {
//   name: "SignUp",
// };
