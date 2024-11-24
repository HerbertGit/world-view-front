import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  Gltf,
  RandomizedLight,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";

export const App = () => (
  <Canvas shadows camera={{ position: [-3, 0.5, 3] }}>
    <Scene />
    {/* <Environment background> */}
    {/* <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial color="#393939" side={THREE.BackSide} />
      </mesh> */}
    {/* </Environment> */}
    {/* <spotLight
      position={[7, 7, 7]}
      castShadow
      intensity={50}
      shadow-bias={-0.0001}
    /> */}
    <ambientLight intensity={3} />
    <Stars
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
    <RandomizedLight
      castShadow
      amount={8}
      frames={100}
      position={[5, 5, -10]}
    />
    {/* <Environment background preset="night" blur={0.2} /> */}

    <CameraControls />
    {/* <gridHelper args={[30, 30, 30]} position-y=".01" /> */}
    {/* <axesHelper args={[5]} /> */}
  </Canvas>
);

function Scene() {
  return <Gltf src="earth.glb" />;
}

export default App;
