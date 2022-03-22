import React from 'react'
import Collapsible from './Collapsible';

function Project(props) {
    const {name, link, image, used_technologies, description} = props

    console.log(used_technologies)
  return (
    <>
    <div className='project'>
      <a href={link} rel="noopener noreferrer" target="_blank">
        <img className='image_preview' src={image}></img>
        <h3 className='h3_preview' >{name}</h3>
      </a>
        <Collapsible header="Description" text={description} bullet_list={false} />
        <Collapsible header="Technologies used" text={used_technologies} bullet_list={true} />
    </div>
    </>
  )
}

export default Project