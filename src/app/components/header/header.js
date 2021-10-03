import React from 'react';
import styleclasses from './header.module.css';
import logo from './../../../image/logo-icons.png'

const Header = () => {
    return  (
    <header className={styleclasses.header}>
        <div className={styleclasses.header_content}>
            <img className={styleclasses.logo} src={logo} height="60px" width="60px" alt="Логотип" ></img>
            <h1 className = {styleclasses.h1}>Конвертер <span className={styleclasses.Valute}>валют</span></h1>
        </div>
    </header>
    )
}

export default Header;