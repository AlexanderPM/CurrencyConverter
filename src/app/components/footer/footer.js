import React from 'react'
import styleclasses from './footer.module.css';

const Footer = () => {

    let dateNow = new Date();

    return (
        <footer className={styleclasses.footer}>
            <div className={styleclasses.footerContent}>
                <p>Разработчик</p>
                <p>Alexander Pohozhalov</p>
                <p>Барнаул, 2021 - {dateNow.getFullYear()} гг.</p>
            </div>
            <div className={styleclasses.footerIcons}>Автор иконок: <a href="https://www.flaticon.com/ru/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
    )
}

export default Footer;