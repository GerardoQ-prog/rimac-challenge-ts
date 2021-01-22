import React from 'react'
import './BannerLogin.scss'
import Banner from '../../../assets/img/banner.svg'
import BannerMobile from '../../../assets/img/banner2.svg'
import Logo from '../../../assets/img/logo.svg'
import Shield from '../../../assets/img/icons/escudo.svg'
import Phone from '../../../assets/img/icons/celular.svg'
import Money from '../../../assets/img/icons/dinero.svg'
import Clinic from '../../../assets/img/icons/clinica.svg'
import Dad from '../../../assets/img/Dad.svg'
import Mom from '../../../assets/img/Mom.svg'
import Kid from '../../../assets/img/Kid.svg'
import Plant from '../../../assets/img/Plant.svg'
import Frame from '../../../assets/img/Frame.svg'
import Mom2 from '../../../assets/img/Mom2.svg'
import IndicatorBanner from '../../ui/IndicatorsBanner/IndicatorBanner'


const BannerLogin = () => {

    return (
        <div className="container__baner">
            <img src={Banner} alt="banner__font" className="banner__font"></img>
            <img src={BannerMobile} alt="banner__fontmobile" className="banner__fontmobile"></img>
            <div className="container__logo">
                <img src={Logo} alt="logo__rimac"></img>
            </div>
            <div className="linea__logo"></div>
            <br></br>
            <div className="banner__title">
                <p className="text__title">Seguro de</p>
                <h2 className="text__title2">Salud</h2>
            </div>
            <IndicatorBanner></IndicatorBanner>
            <div className="banner__text" >
                <br></br>
                <div className="text__option">
                    <img src={Shield} alt="Escudo" style={{marginRight:10}}></img>
                    <p>Cómpralo de manera fácil y rápida</p>
                </div>
                <div className="text__option">
                    <img src={Phone} alt="Escudo"></img>
                    <p>Cómpralo de manera fácil y rápida</p>
                </div>
                <div className="text__option">
                    <img src={Money} alt="Escudo"></img>
                    <p>Cómpralo de manera fácil y rápida</p>
                </div>
                <div className="text__option">
                    <img src={Clinic} alt="Escudo"></img>
                    <p>Cómpralo de manera fácil y rápida</p>
                </div>
            </div>
            <p className="text_footer">© {new Date().getFullYear()} RIMAC Seguros y Reaseguros.</p>
            <img src={Dad} alt="Papa" className="img__papa"></img>
            <img src={Mom} alt="Papa" className="img__mama"></img>
            <img src={Kid} alt="Papa" className="img__niño"></img>
            <img src={Plant} alt="Papa" className="img__planta"></img>
            <img src={Frame} alt="Papa" className="img__cuadro"></img>
            <img src={Mom2} alt="Papa" className="img__mamamobile"></img>
            <br></br>
            <label className="aviso">Ingresar con el DNI : 74132910 , para el flujo de usuario registrado en BD</label>

        </div>
    )
}

export default BannerLogin
