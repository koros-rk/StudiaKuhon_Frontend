import React from 'react';

import Image from "./Image";
import logo from "../../styles/img/logo.svg";
import shopping_bag from "../../styles/img/icons/shopping-bag.png";

const Navbar = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__body">
                    <a href="/" className="header__logo">
                        <Image image={logo} alt="StudioKuhon"/>
                    </a>
                    <div className="header__burger">
                        <span></span>
                    </div>
                    <div className="btn__order btn__order-mob">
                        <a href="src/components/utils/Navbar#!" className="header__link btn-option">
                            <Image image={shopping_bag} alt="shopping"/>
                        </a>
                    </div>
                    <nav className="header__menu">
                        <ul className="header__list">
                            <li>
                                <a href="/" className="header__link">Головна</a>
                            </li>
                            <li>
                                <a href="/design" className="header__link">Дизайни</a>
                            </li>
                            <li>
                                <a href="/furniture" className="header__link">Меблі</a>
                            </li>
                            <li>
                                <a href="/about" className="header__link">Про нас</a>
                            </li>
                            <li className="btn__order btn__order-desk">
                                <a href="src/components/utils/Navbar#!" className="header__link btn-option">Замовлення</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;