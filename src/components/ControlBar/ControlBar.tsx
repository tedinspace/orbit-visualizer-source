import { SceneMode } from "cesium";
import { Box, Button, Header, Text, Tip } from "grommet";
import { Deploy, Sun, Cube, Globe,Language} from "grommet-icons";
import React from "react";
import { IViewerState } from "../../functions/cesium";
import { IOrbitSettingsState, IRootLayoutState } from "../RootLayout";

interface IProps extends IRootLayoutState {
  updateViewerState(state: IViewerState): void;
  updateOrbitSettingsState(state: IOrbitSettingsState): void;
}
export function ControlBar(props: IProps) {
  return (
    <Header
      margin="xsmall"
      round="xsmall"
      background="#2F343C"
      pad="xsmall"
      border={{ color: "#404854" }}
      style={{
        position: "fixed",
        top: 0,
        overflow: "hidden",
        width: "100%",
        zIndex: 500,
      }}
    >
      <Box direction="row" justify="start" fill="horizontal">
        <Deploy />
        &nbsp;&nbsp;
        <Text size="large">
          <b>Orb.Vis</b>
        </Text>
      </Box>
      <Box style={{ marginRight: 15 }} direction="row">
        <div>
          <Button
            style={{ padding: 5 }}
            icon={<Sun />}
            onClick={() => {
              props.updateViewerState({
                ...props.viewerState,
                ...{ shadows: !props.viewerState.shadows },
              });
            }}
            primary
          />
        </div>
        <div>
          <Button
            style={{ padding: 5 }}
            icon={<Cube />}
            onClick={() => {
              props.updateViewerState({
                ...props.viewerState,
                ...{ mode: SceneMode.SCENE2D },
              });
            }}
            primary
          />
        </div>
        <div>
          <Tip content={
            props.orbitSettingsState.inertial?
            "inertial (ECI)": "fixed (ECEF)"
          }>
          <Button
            style={{ padding: 5 }}
            icon={props.orbitSettingsState.inertial?<Language />:<Globe />}
            primary
            onClick={() => {
              props.updateOrbitSettingsState({
                ...props.orbitSettingsState,
                ...{ inertial:  !props.orbitSettingsState.inertial},
              });
            }}
          />
          </Tip>
        </div>
      </Box>
    </Header>
  );
}
