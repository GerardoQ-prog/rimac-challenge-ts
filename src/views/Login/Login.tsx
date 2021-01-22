import React from 'react'
import './Login.scss'
import BannerLogin from '../../components/contains/BannerLogin/BannerLogin'
import FormLogin from '../../components/contains/FormLogin/FormLogin'
import Footer from '../../components/ui/Footer/Footer'

const Login = () => {
    return (
        <div style={{position:'relative'}}>
        <div className="container">
            <BannerLogin/>
            <FormLogin/>
        </div>
            <Footer></Footer>
        </div>
    )
}

export default Login

