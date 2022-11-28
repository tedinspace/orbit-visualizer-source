import { Viewer } from "cesium";
import { Box } from "grommet";
import React from "react";
import ReactResizeDetector from "react-resize-detector";
import {  IRootLayoutState } from "../RootLayout";


export interface IOrbitDisplayRootProps extends IRootLayoutState{

}
interface IState {
  viewerLoaded: boolean;
}
class OrbitDisplayRoot extends React.Component<IOrbitDisplayRootProps, IState> {
  viewer: any;
  cesiumContainer: any;

  constructor(props: IOrbitDisplayRootProps) {
    super(props);
    this.state = {
      viewerLoaded: false,
    };
  }
  componentDidMount() {
    this.viewer = new Viewer(this.cesiumContainer, {
      homeButton: false,
      baseLayerPicker: false,
      sceneModePicker: false,
      navigationHelpButton: false,
      geocoder: false,
    });
    this.viewer.animation.container.style.visibility = "hidden";
    this.viewer.timeline.container.style.visibility = "hidden";

    this.viewer.forceResize();
    this.setState({ viewerLoaded: true });
  }

  componentWillUnmount() {
    if (this.viewer) {
      this.viewer.destroy();
    }
  }

  render() {
    return (
      <ReactResizeDetector handleWidth handleHeight>
        {({ width, height }) => (
          <Box fill>
            <div
              className="cesiumGlobeWrapper"
              style={{
                width: width,
                height: height,
                position: "fixed",
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <div
                className="cesiumWidget"
                ref={(element) => (this.cesiumContainer = element)}
                style={{
                  flexGrow: 2,
                }}
              />
            </div>
          </Box>
        )}
      </ReactResizeDetector>
    );
  }
}

export default OrbitDisplayRoot;
export { OrbitDisplayRoot };
