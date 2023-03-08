/* eslint-disable react/no-unknown-property */
import styled from 'styled-components';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Box, MeshWobbleMaterial, OrbitControls, Plane, Shadow, Sphere } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const FacadeWrapper = styled.section`
	height: calc(calc(var(--vh) * 100) - var(--header-h));
	position: relative;
	transform: translateY(-50px);
	cursor: move; /* fallback if grab cursor is unsupported */
	cursor: grab;
	cursor: -moz-grab;
	cursor: -webkit-grab;

	&:active {
		cursor: grabbing;
		cursor: -moz-grabbing;
		cursor: -webkit-grabbing;
	}
`;

const Model = ({ url }) => {
	const gltf = useLoader(GLTFLoader, url);
	return <primitive object={gltf.scene} dispose={null} />;
};

const Lights = () => (
	<>
		<ambientLight intensity={1.5} />
		{/* <directionalLight castShadow position={[2, 0.5, 1]} intensity={0.4} /> */}
	</>
);

const HTMLContent = ({ modelPath }) => {
	const ref = useRef();
	useFrame(() => (ref.current.rotation.y += 0.0005));
	return (
		<mesh ref={ref}>
			<Model url={modelPath} castShadow receiveShadow />
			<Shadow
				rotation-x={Math.PI / 2}
				opacity={0.1}
				width={10}
				height={10}
				position={[0, -0.28, 0]}
			/>
		</mesh>
	);
};

const Facade = () => (
	<FacadeWrapper>
		<Canvas
			concurrent="true"
			colormanagement="true"
			camera={{ position: [1, 0, 0], fov: 60 }}
		>
			<Lights />
			<Suspense fallback={null}>
				<HTMLContent modelPath="/facade/facade.gltf" />
			</Suspense>
			<OrbitControls
				enableZoom={false}
				minPolarAngle={1.5}
				maxPolarAngle={1.8}
				dampingFactor={0.001}
				maxDistance={1}
			/>
		</Canvas>
	</FacadeWrapper>
);

export default Facade;
