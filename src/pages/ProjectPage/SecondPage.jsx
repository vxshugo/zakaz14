import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./testPage.css"
import Footer from "../../components/Footer/Footer"
import Button from '../../components/Button/Button'
import OnlineTest from '../../components/OnlineTest/OnlineTest'
const SecondPage = () => {

  const [showComponentA, setShowComponentA] = useState(false);
  const [showComponentB, setShowComponentB] = useState(false);

  const handleShowComponentA = () => {
    setShowComponentA(true);
    setShowComponentB(false);
  };

  const handleShowComponentB = () => {
    setShowComponentA(false);
    setShowComponentB(true);
  };

  return (
    <div className='testPage'>
      <Navbar />
      <div className="head">
        <h4>Тест</h4>
        <iframe src="https://www.youtube.com/embed/9lljsR78-is" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="docView">
        {/* <div style={{display: "flex", flexDirection: "row"}}>
          <Button label="Show Component A" handleClick={handleShowComponentA} />
          <Button label="Show Component B" handleClick={handleShowComponentB} />
        </div>
        {showComponentA && <OnlineTest test="testA" />}
        {showComponentB && <OnlineTest test="testB" />} */}
        <div className="wrapper">
          <OnlineTest />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SecondPage