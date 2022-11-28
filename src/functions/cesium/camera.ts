import { Cartesian3, defined, Matrix4, SceneMode, Transforms } from "cesium";

export function icrf(viewer: any, isInertial:boolean) {
  if (viewer.scene.mode !== SceneMode.SCENE3D || !isInertial) {
    return;
  }

  const icrfToFixed = Transforms.computeIcrfToFixedMatrix(
    viewer.clock.currentTime
  );
  if (defined(icrfToFixed)) {
    const camera = viewer.camera;
    const offset = Cartesian3.clone(camera.position);
    const transform = Matrix4.fromRotationTranslation(icrfToFixed);
    camera.lookAtTransform(transform, offset);
  }
}
