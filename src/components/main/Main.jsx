import React from 'react'
import './main.css'
import background from './backgroundImage.png';

const Main = () => {
  return (
    <div className="main">
      <div className="main-background" style={{ backgroundImage: `url("https://media.discordapp.net/attachments/1050812814555615282/1104827729808998532/image_1_1.png?width=1037&height=566")` }} />
      <div className="main-container">
        <div className="main-content">
          <div className="main-text">
            Дизайн тарихы
          </div>
          <div className="main-text-2">
            Жұмысты атқарған <span style={{ color: "#FDD400" }}>Махан Диана</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main