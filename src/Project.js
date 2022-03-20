import React from 'react'

function Project(props) {
    const {name, link, image, learned} = props

  return (
    <>
      <a href={link} rel="noopener noreferrer" target="_blank">
        <img src={image}></img>
        <h2>{name}</h2>
      </a>
    </>
  )
}

export default Project