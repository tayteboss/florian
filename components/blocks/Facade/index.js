import styled from 'styled-components';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const FacadeWrapper = styled.section`
	height: calc(calc(var(--vh) * 100) - var(--header-h));
	position: relative;
`;

// const FacadeImg = styled.img`
// 	position: absolute;
// 	top: 40%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);

// 	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
// 		top: 50%;
// 	}
// `;

const Model = ({ url }) => {
	const gltf = useLoader(GLTFLoader, url);
	return <primitive object={gltf.scene} dispose={null} />;
};

const Lights = () => (
	<>
		<ambientLight intensity={0.3} />
		<directionalLight
			castShadow
			position={[0, 0.5, 0]}
			intensity={0.04}
			shadow-mapSize-width={1024}
			shadow-mapSize-height={1024}
			shadow-camera-far={50}
			shadow-camera-left={-10}
			shadow-camera-right={10}
			shadow-camera-top={10}
			shadow-camera-bottom={-10}
		/>
		<pointLight position={[-10, 0, -20]} intensity={0.04} />
		<pointLight position={[0, -10, 0]} intensity={0.04} />
		<pointLight position={[10, 0, 0]} intensity={0.04} />
	</>
);

const HTMLContent = ({ modelPath }) => {
	const ref = useRef();
	useFrame(() => (ref.current.rotation.y += 0.01));
	return (
		<mesh ref={ref}>
			<Model url={modelPath} />
		</mesh>
	);
};

const Facade = () => (
	<FacadeWrapper>
		<Canvas
			concurrent
			colormanagement="true"
			camera={{ position: [1.6, 0, 0], fov: 70 }}
		>
			<Lights />
			<Suspense fallback={null}>
				<HTMLContent modelPath="/facade/gitf-box.gltf" />
			</Suspense>
			<OrbitControls />
		</Canvas>
	</FacadeWrapper>
);

export default Facade;
