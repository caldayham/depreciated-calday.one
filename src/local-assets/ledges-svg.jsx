const LedgesSVG = (props) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 288 288"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M214.3,57.6L99.2,288c-31.8,0-57.6-25.8-57.6-57.6L156.8,0C188.5,0.1,214.3,25.8,214.3,57.6z"
        fill={`rgb(${props.fill}, ${props.fill}, ${props.fill}`}
      />
      <path
        d="M214.3,288c-31.8-0.1-57.5-25.8-57.6-57.6l28.8-57.7c31.7,0.2,57.4,25.9,57.4,57.7L214.3,288z"
        fill={`rgb(${props.fill}, ${props.fill}, ${props.fill}`}
      />
    </svg>
  );
};

export default LedgesSVG;
