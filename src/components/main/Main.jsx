import React from 'react'
import './main.css'
import background from './backgroundImage.png';
import Lottie from "lottie-react";
import anime from "./140746-cubicmaths.json";

const Main = () => {
  return (
    <div className="main">
      <div className="main-background" />
      <div className="main-container">
        <div className="main-content">
          <div className='leftBlock'>
            <div className="main-text">
              <p>Дизайн тарихы пәнінен мультимедия силлабусы</p>
            </div>
            <div className="main-text-2">
              <Lottie animationData={anime} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main