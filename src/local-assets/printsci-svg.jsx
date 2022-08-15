const PrintSciSVG = (props) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 648 648"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        className="st0"
        points="324,0 117,117 117,234 270,324 117,414 117,531 324,648 531,531 531,414 378,324 531,234 531,117 "
        fill={`rgb(${props.fill}, ${props.fill}, ${props.fill}`}
      />
    </svg>
  );
};

export default PrintSciSVG;
