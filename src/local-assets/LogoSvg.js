const LogoSVG = (props) => {
	return (
		<svg
			width={props.scaleFactor * 99.1}
			height={props.scaleFactor * 80}
			viewBox="0 0 991 800"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g stroke={`rgb(${props.fill}, ${props.fill}, ${props.fill}`} strokeWidth={'40px'}>
			<g fill={`rgb(${props.fill}, ${props.fill}, ${props.fill}`}>
				<rect x="776" y="6" class="st0" width="209" height="788" />
				<path d="M979,12v776H782V12H979 M991,0H770v800h221V0L991,0z" />
				<polygon class="st0" points="391,794 391,414.9 600,632 600,794 	" />
				<path d="M397,429.8l197,204.7V788H397V429.8 M385,400v400h221V629.6L385,400L385,400z" />
				<polygon points="770,800 0,0 770,0 " />
				<rect y="400" width="385" height="400" />
			</g>
			<g fill={`rgb(0,0,0)`}>
				<polygon points="770,800 0,0 770,0 " />
				<rect y="400" width="385" height="400" />
			</g>
			</g>
		</svg>
	);
};

export default LogoSVG;