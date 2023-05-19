import React from 'react'
import './main.css'
import background from './backgroundImage.png';
import Lottie from "lottie-react";
import anime from "./140746-cubicmaths.json";

const Main = () => {
  return (
    <div className="main">
      <div className="main-background" style={{ backgroundColor: `#EEEEEE` }} />
      <div className="main-container">
        <div className="main-content">
          <div className='leftBlock'>
            <div className="main-text">
              Дизайн тарихы пәнінен мультимедия силлабусы
            </div>
            <div className="main-text-2">
              <Lottie animationData={anime} loop={true} />
            </div>
          </div>
          <div className='rightBlock'>
            <iframe height="100%" width="100%" src="https://www.youtube.com/embed/Yo3j_Dx4u7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main