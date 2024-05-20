import React, { useRef } from 'react';
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { extend, useThree, useFrame } from '@react-three/fiber';

// Extend OrbitControls to make it compatible with React
extend({ OrbitControls: ThreeOrbitControls });

const OrbitControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};

export default OrbitControls;
