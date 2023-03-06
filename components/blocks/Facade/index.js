/* eslint-disable react/no-unknown-property */
import styled from 'styled-components';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const FacadeWrapper = styled.section`
	height: calc(calc(var(--vh) * 100) - var(--header-h));
	position: relative;
`;

const Model = ({ url }) => {
	const gltf = useLoader(GLTFLoader, url);
	return <primitive object={gltf.scene} dispose={null} />;
};

const Lights = () => (
	<>
		<ambientLight intensity={1} />
	</>
);

const HTMLContent = ({ modelPath }) => {
	const ref = useRef();
	useFrame(() => (ref.current.rotation.y += 0.001));
	return (
		<mesh ref={ref}>
			<Model url={modelPath} />
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
			/>
		</Canvas>
	</FacadeWrapper>
);

export default Facade;
