Drop a real .glb motorcycle model here (e.g. bike.glb) if you want to
replace the procedural Three.js bike used in the configurator.

Then in components/ConfiguratorClient.tsx, swap <BikeModel ... /> for a
component using @react-three/drei's useGLTF, e.g.:

  import { useGLTF } from "@react-three/drei";
  function GLBBike(props) {
    const { scene } = useGLTF("/models/bike.glb");
    return <primitive object={scene} {...props} />;
  }
  useGLTF.preload("/models/bike.glb");

Good free sources for CC-licensed motorcycle GLB/GLTF models:
- Sketchfab (filter by downloadable + CC license): https://sketchfab.com/tags/motorcycle
- Khronos glTF-Sample-Assets: https://github.com/KhronosGroup/glTF-Sample-Assets
- Poly Pizza: https://poly.pizza
