import React from 'react'

function Project(props) {
    const {name, link, image, learned, used_technologies, description} = props

  return (
    <>
      <a className='project' href={link} rel="noopener noreferrer" target="_blank">
        <img className='image_preview' src={image}></img>
        <h3 className='h3_preview' >{name}</h3>
      </a>
    </>
  )
}

export default Project