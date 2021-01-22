import React from 'react'
import './ButtonPrimary.scss'

interface ButtonPrimaryProps{
    onClick:any
    disabled:boolean
}

const ButtonPrimary = (props:ButtonPrimaryProps) => {

    const { onClick ,disabled } = props

    return (
        <div className="container__button">
        <button className="button__primary" disabled={disabled} onClick={onClick}>COMENCEMOS</button>
        </div>
    )
}

export default ButtonPrimary
