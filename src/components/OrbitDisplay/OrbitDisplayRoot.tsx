import { Box } from "grommet";
import React from "react";
import ReactResizeDetector from "react-resize-detector";
import {
  defaultViewerConstruct,
  icrf,
  updateViewer,
} from "../../functions/cesium";
import { IRootLayoutState } from "../RootLayout";

export interface IOrbitDisplayRootProps extends IRootLayoutState {}
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
    this.viewer = defaultViewerConstruct(
      this.cesiumContainer,
      this.props.viewerState
    );
    this.setState({ viewerLoaded: true });
    this.viewer.clock.onTick.addEventListener(() => {
      icrf(this.viewer, this.props.orbitSettingsState.inertial);
    });
    this.viewer.clock.shouldAnimate = true;

    
  }

  componentDidUpdate(
    prevProps: Readonly<IOrbitDisplayRootProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    if (this.props.rebuildViewerHash !== prevProps.rebuildViewerHash) {
      updateViewer(this.viewer, this.props.viewerState);
    }
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
