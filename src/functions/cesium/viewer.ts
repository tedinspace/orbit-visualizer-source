import { SceneMode, Viewer } from "cesium";
export interface IViewerState {
  mode: SceneMode.COLUMBUS_VIEW | SceneMode.SCENE2D | SceneMode.SCENE3D;
  shadows: boolean;
  inertial: boolean;
}

export function updateViewer(viewer: any, viewerState: IViewerState) {
  viewer.scene.shadows = viewerState.shadows;
  viewer.scene.mode = viewerState.mode;
}

export function defaultViewerConstruct(
  cesiumContainer: any,
  viewerState: IViewerState
) {
  let viewer: any = new Viewer(cesiumContainer, {
    homeButton: false,
    baseLayerPicker: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    geocoder: false,
    shadows: viewerState.shadows,
    sceneMode: viewerState.mode,
    selectionIndicator: false,
    //timeline: false,
    //animation: false,
  });
  return viewer;
}
