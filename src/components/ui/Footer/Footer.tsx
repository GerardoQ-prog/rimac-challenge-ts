import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            © {new Date().getFullYear()} RIMAC Seguros y Reaseguros.
        </footer>
    )
}

export default Footer
