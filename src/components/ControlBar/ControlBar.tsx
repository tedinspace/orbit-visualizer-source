import { Box, Text } from "grommet";
import { Deploy } from "grommet-icons";
import React from "react";

interface IProps {}
export function ControlBar(props: IProps) {
  return (
    <Box
      margin="xsmall"
      round="xsmall"
      background="#2F343C"
      pad="xsmall"
      border={{ color: "#404854" }}
      style={{
        position:"fixed",
        top:0,
        overflow:'hidden',
        width:"100%",
        zIndex:500
      }}
    >
      <Box direction="row">
        <Deploy />
        &nbsp;&nbsp;
        <Text size="large">
          <b>Orb.Vis</b>
        </Text>
      </Box>
    </Box>
  );
}
