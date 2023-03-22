import React from 'react';

import Image from "./Image";
import logo_footer from "../../styles/img/logo-footer.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__img">
                    <Image image={logo_footer}/>
                </div>
                <div className="footer__wrapper">
                    <div className="footer__item footer__menu light-text">
                        <a href="ready-design.html">Дизайни</a>
                        <a href="ready-furniture.html">Меблі</a>
                        <a href="about-us.html">Про нас</a>
                        <a href="contact.html">Зв’язатись</a>
                    </div>
                    <div className="footer__item footer__social light-text">
                        <h3 className="big-text">Контакти</h3>
                        <a href="src/components/utils/Footer#!">Viber</a>
                        <a href="src/components/utils/Footer#!">Facebook</a>
                        <a href="src/components/utils/Footer#!">Instagram</a>
                    </div>
                    <div className="footer__item light-text footer__contact">
                        <a href="mailto:mukomela.oleg@gmail.com">mukomela.oleg@gmail.com</a>
                        <div className="footer__tel">
                            <a href="tel:380678672400">+380678672400</a>
                            <a href="tel:380973402568">+380973402568</a>
                        </div>
                        <p>вул. Трудова 29, Хмельницький</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;