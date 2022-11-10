const LogoSVG = (props) => {
	return (
		<svg
			width={props.scaleFactor * 32.7}
			height={props.scaleFactor * 26.8}
			viewBox="0 0 327 268"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g fill={`rgb(${props.fill}, ${props.fill}, ${props.fill}`}>
				<polygon points="13.9,133.5 13.7,256.3 132.1,256.3 132.1,133.5 250.4,256.3 250.4,11.3 13.7,11.3 131.9,133.5" />
			</g>
			<g fill={`rgb(${props.fill - 100}, ${props.fill - 100}, ${props.fill - 100}`}>
				<polygon class="st0" points="131.8,133.6 131.8,255.4 195,255.4 195,198.8 	" />
				<rect x="250.4" y="10.9" class="st1" width="63.3" height="244.5" />
			</g>

		</svg>
	);
};

export default LogoSVG;