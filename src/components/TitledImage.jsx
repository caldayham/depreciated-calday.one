import React from 'react'

const TitledImage = ({imgLink, title}) => {

console.log(imgLink);

  return (
    <div>
        <img src={imgLink} alt="alt" style={{
            width: "200px",
            paddingBottom: "20px",
            objectFit: "contain",
          }}/>
        <p>
            {title}
        </p>
    </div>
  )
}

export default TitledImage