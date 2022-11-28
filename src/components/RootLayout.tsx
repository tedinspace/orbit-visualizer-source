import { SceneMode } from "cesium";
import { Box } from "grommet";
import React from "react";
import { hash, tle2satrec } from "../functions";
import { IViewerState } from "../functions/cesium";
import { ControlBar } from "./ControlBar/ControlBar";
import OrbitDisplayRoot from "./OrbitDisplay/OrbitDisplayRoot";
import { OrbitManagerRoot } from "./OrbitManager/OrbitManagerRoot";
export interface IOrbitState {
  satrec: any;
  key: string;
  name: string;
  color: string;
  isValid: boolean;
}

export interface IOrbitSettingsState{
  inertial:boolean;
}

interface IProps {}
export interface IRootLayoutState {
  rebuildOrbitsHash: string;
  viewerState: IViewerState;
  states: { [key: string]: IOrbitState };
  rebuildViewerHash: string;
  orbitSettingsState:IOrbitSettingsState;
  orbitSettingsHash:string
}
class RootLayout extends React.Component<IProps, IRootLayoutState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      rebuildViewerHash: hash(),
      viewerState: {
        mode: SceneMode.SCENE3D,
        shadows: true,
      },
      orbitSettingsHash: hash(),
      orbitSettingsState:{
        inertial:true
      },
      rebuildOrbitsHash: hash(),
      states: {
        k0: {
          key: "k0",
          satrec: tle2satrec(
            "1 24812U 97026A   22331.44999057  .00000003  00000+0  00000+0 0  9990",
            "2 24812   4.0951  81.9915 0006505 194.7137  17.7480  1.00271347 93362"
          ),
          name: "galaxy",
          color: "red",
          isValid: true,
        },
        k1: {
          key: "k2",
          satrec: tle2satrec("", ""),
          name: "invalid",
          color: "red",
          isValid: false,
        },
      },
    };
  }
  render() {
    return (
      <Box fill>
        <ControlBar
          {...this.state}
          updateViewerState={(vs: IViewerState) => {
            this.setState({
              viewerState: vs,
              rebuildViewerHash: hash(),
            });
          }}
          updateOrbitSettingsState={(oss: IOrbitSettingsState) => {
            this.setState({
              orbitSettingsState: oss,
              orbitSettingsHash: hash(),
            });
          }}
        />
        <OrbitDisplayRoot {...this.state} />
        {/** <OrbitManagerRoot /> */}
      </Box>
    );
  }
}

export default RootLayout;
export { RootLayout };
