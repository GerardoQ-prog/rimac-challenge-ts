import React from 'react'
import Shield from '../../../assets/img/icons/escudo.svg'
import Phone from '../../../assets/img/icons/celular.svg'
import Money from '../../../assets/img/icons/dinero.svg'
import Clinic from '../../../assets/img/icons/clinica.svg'
import { AddZero } from '../../../helpers/addZero'
import './IndicatorBanner.scss'

const IndicatorBanner = () => {

    
    const [indication, setIndication] = React.useState<number>(1)

    const handleIndicationMore = () => setIndication( indication + 1 )
    
    const handleIndicationLess = () => setIndication( indication - 1 )


    return (
        <div className="banner_textmobile">
            {
                indication === 1 &&
                <div>
                <img src={Shield} alt="Shield"></img>
                <p>Cómpralo de manera fácil y rápida</p>
                </div>
            }
            {
                indication === 2 &&
                <div>
                <img src={Phone} alt="Shield"></img>
                <p>Cotiza y compra tu seguro 100% digital </p>
                </div>
            }
            {
                indication === 3 &&
                <div>
                <img src={Money} alt="Shield"></img>
                <p>Hasta S/.12 millones de cobertura anual</p>
                </div>
            }
             {
                indication === 4 &&
                <div>
                <img src={Clinic} alt="Shield"></img>
                <p>Más de 300 clínicas en todo el Perú</p>
                </div>
            }
            <div className="banner__buttons">
                <button 
                className={indication === 1 ? "buttondisable" : "button"}
                disabled={indication === 1 ? true : false}
                onClick={handleIndicationLess}>
                    {"<"}
                </button>
                <p>{AddZero(indication,2)}/{AddZero(4,2)}</p>
                <button
                className={indication === 4 ? "buttondisable" : "button"}
                disabled={indication === 4 ? true : false}
                onClick={handleIndicationMore}>
                    {">"}
                </button>
            </div>
        </div>
    )
}

export default IndicatorBanner
