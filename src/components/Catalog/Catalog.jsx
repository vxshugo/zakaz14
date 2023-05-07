import React from 'react'
import "./catalog.css"
import { Link } from 'react-router-dom'
const Catalog = ({link, name, option, imgLink}) => {
  return (
    <div className='catalog'>
        <img src={imgLink}/>
        {option ? (
          <p>{option}</p>
        ) : <></>}
        <h4><Link style={{color: "inherit"}} to={link}>{name}</Link></h4>
    </div>
  )
}

export default Catalog