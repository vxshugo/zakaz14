import React from 'react'
import Catalog from '../../components/Catalog/Catalog'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/main/Main'
import Navbar from '../../components/navbar/Navbar'
import "./mainPage.css"
const MainPage = () => {
    return (
        <div>
            <Main />
            <div className='Catalog__block'>
                <h2>Жинақтар</h2>
                <div className='catalog__flex'>
                    <Catalog link={"/razdel/test"} imgLink={"https://media.discordapp.net/attachments/1050812814555615282/1104827965549858907/Rectangle_2.png?width=1200&height=210"} name={"Тест"} option={""}/>
                    <Catalog link={"/razdel/praktika"} imgLink={"https://media.discordapp.net/attachments/1050812814555615282/1104827965826662551/Rectangle_2_1.png?width=1200&height=210"} name={"Презентациялар"} option={""}/>
                    <Catalog link={"/razdel/lesson"} imgLink={"https://media.discordapp.net/attachments/1050812814555615282/1104827966099304488/Rectangle_2_2.png?width=1200&height=210"} name={"Лекция"} option={""}/>
                    <Catalog link={"/razdel/srs"} imgLink={"https://media.discordapp.net/attachments/1050812814555615282/1104827966329999451/Rectangle_2_3.png?width=1200&height=210"} name={"СӨЖ"} option={""}/>
                    <Catalog link={"/razdel/rk"} imgLink={"https://media.discordapp.net/attachments/1050812814555615282/1104827966598414460/Rectangle_2_4.png?width=1200&height=210"} name={"Аралық бақылау"} option={""}/>
                    <Catalog link={"/razdel/mainTest"} imgLink={"https://media.discordapp.net/attachments/1050812814555615282/1104827966904610896/Rectangle_2_5.png?width=1200&height=210"} name={"Емтихан тақырыпқа байланысты сұрақтар"} option={""}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage