import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/bmw.glb");
  return <primitive object={scene} {...props} />
}

function App() {
  return (
    
  );
}

export default App;
