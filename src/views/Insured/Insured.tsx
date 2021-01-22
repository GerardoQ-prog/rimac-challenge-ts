import React from 'react'
import './Insured.scss'
import BannerInsured from '../../components/contains/BannerInsured/BannerInsured'
import FormInsured from '../../components/contains/FormInsured/FormInsured'
import Footer from '../../components/ui/Footer/Footer'

const Insured = () => {

    const [step, setStep] = React.useState(1)

    const handleStepMore = () => {
        setStep(step + 1)
    }
    const handleStepLess = () => {
        setStep(step - 1)
    }

    return (
        <div style={{position:'relative'}}>
        <div className="container__insured">
            <BannerInsured/>
            {
                step === 1 ?
                <FormInsured handleStepMore={handleStepMore} handleStepLess={handleStepLess} step={step} />
                :
                <h1>sad</h1>
            }
            
        </div>
            <Footer></Footer>
        </div>
    )
}

export default Insured
