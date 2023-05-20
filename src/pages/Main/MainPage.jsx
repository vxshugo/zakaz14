import React from 'react'
import Catalog from '../../components/Catalog/Catalog'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/main/Main'
import Navbar from '../../components/navbar/Navbar'
import "./mainPage.css"

const MainPage = () => {
    return (
        <div>
            <Navbar/>
            <Main/>
            <div className='Catalog__block'>
                <h2>Видео сабақтар</h2>
                <div className='catalog__flex'>
                    <iframe src="https://www.youtube.com/embed/KmbvuKpWoXY" title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    <iframe src="https://www.youtube.com/embed/H9yXx9F9Lrs" title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    <iframe src="https://www.youtube.com/embed/DBBOk34kj_0" title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    <iframe src="https://www.youtube.com/embed/g39sNTBM9eM" title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    <iframe src="https://www.youtube.com/embed/cLOOPfl5VTM" title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    <iframe src="https://www.youtube.com/embed/9lljsR78-is" title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default MainPage