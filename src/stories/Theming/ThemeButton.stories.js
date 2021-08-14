import React from "react";
import Button from "@material-ui/core/Button";

export default {
  title: "MaterialUi/Button",
  component: Button,
};
export const ThemePrimary = () => (
  <Button variant="outlined" color="primary">
    Primary
  </Button>
);
export const ThemeSecondary = () => (
  <Button variant="outlined" color="secondary">
    Secondary
  </Button>
);

export const ThemeDisabled = () => (
  <Button variant="outlined" disabled>
    Disabled
  </Button>
);

export const ThemeDefault = () => <Button variant="outlined">Default</Button>;
