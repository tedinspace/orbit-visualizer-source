import { Box } from "grommet";
import React from "react";
import { ControlBar } from "./ControlBar/ControlBar";
import OrbitDisplayRoot from "./OrbitDisplay/OrbitDisplayRoot";
import { OrbitManagerRoot } from "./OrbitManager/OrbitManagerRoot";

class RootLayout extends React.Component {
  render() {
    return (
      <Box fill>
        <ControlBar />
        <OrbitDisplayRoot/>
        <OrbitManagerRoot/>
      </Box>
    );
  }
}

export default RootLayout;
export { RootLayout };
