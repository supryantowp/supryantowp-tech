import React from "react";
import { ThemeProvider } from "emotion-theming";
import { CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

import theme from "./theme";
import Routes from "./routes";
import { cssResetConfig } from "./utils/chakra-ui.ts";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ColorModeProvider value="dark">
          <CSSReset config={cssResetConfig} />
          <Routes />
        </ColorModeProvider>
      </ThemeProvider>
    </Router>
  );
}
export default App;
