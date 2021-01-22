import React from 'react'
import BannerSeguro from '../../../assets/img/bannerseguro.svg'
import Logo from '../../../assets/img/logo.svg'
import Dad from '../../../assets/img/Dad.svg'
import Mom from '../../../assets/img/Mom.svg'
import Kid from '../../../assets/img/Kid.svg'
import Plant from '../../../assets/img/Plant.svg'
import Frame from '../../../assets/img/Frame.svg'
import './BannerInsured.scss'

const BannerInsured = () => {
    return (
        <>
        <div className="container__banerseguro">
            <img src={BannerSeguro} alt="banner__font" className="banner__font"></img>
            <div className="container__logo">
                <img src={Logo} alt="logo__rimac"></img>
            </div>
            <div className="linea__logo"></div>
            <img src={Dad} alt="Papa" className="img__papa"></img>
            <img src={Mom} alt="Papa" className="img__mama"></img>
            <img src={Kid} alt="Papa" className="img__niño"></img>
            <img src={Plant} alt="Papa" className="img__planta"></img>
            <img src={Frame} alt="Papa" className="img__cuadro"></img>
        </div>
        <div className="container__banerseguromobile">
            <img src={Logo} alt="logo__rimac"></img>
        </div>
        </>
    )
}

export default BannerInsured
