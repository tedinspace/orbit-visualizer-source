import React from "react";
import { Grommet } from "grommet";
import RootLayout from "./components/RootLayout";
import { PRIMARY_BACKGROUND } from "./style";

function AppRoot() {
  return (
    <Grommet full background={PRIMARY_BACKGROUND} >
        <RootLayout />
    </Grommet>
  );
}

export default AppRoot;