import React from 'react';
import Slider from "react-slick";

import Image from "../utils/Image";
import room from "../../styles/img/1.jpg";
// import logo_footer from "../../styles/img/logo-footer.svg";

export default class PromoSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000
        }
        return (
            <section className="unique-design">
                <div className="unique-design__container">
                    <div className="unique-design__slider dots_slick">
                        <div className="unique-design__item">
                            <div className="unique-design__item-img">
                                <img src="img/1.jpg" alt="room-2"/>
                            </div>
                            <div className="unique-design__item-info">
                                <h2>120+ <span>готових проектів</span></h2>
                                <p>унікальний дизайн для вашої кухні</p>
                            </div>
                        </div>
                        <div className="unique-design__item">
                            <div className="unique-design__item-img">
                                <img src="img/1.jpg" alt="room-2"/>
                            </div>
                            <div className="unique-design__item-info">
                                <h2>19 <span>років в роботі</span></h2>
                                <p>унікальний дизайн для вашої кухні</p>
                            </div>
                        </div>
                        <div className="unique-design__item">
                            <div className="unique-design__item-img">
                                <img src="img/1.jpg" alt="room-2"/>
                            </div>
                            <div className="unique-design__item-info unique-design__item-info-big">
                                <h2>1000+ <span>задоволених кліентів</span></h2>
                                <p>унікальний дизайн для вашої кухні</p>
                            </div>
                        </div>
                        <div className="unique-design__item">
                            <div className="unique-design__item-img">
                                <img src="img/1.jpg" alt="room-2"/>
                            </div>
                            <div className="unique-design__item-info unique-design__item-info-big">
                                <h2>100+ <span>унікальних проектів</span></h2>
                                <p>унікальний дизайн для вашої кухні</p>
                            </div>
                        </div>
                        <div className="unique-design__item">
                            <div className="unique-design__item-img">
                                <img src="img/1.jpg" alt="room-2"/>
                            </div>
                            <div className="unique-design__item-info">
                                <h2>5 <span>регіонів де втілено наші проекти</span></h2>
                                <p>унікальний дизайн для вашої кухні</p>
                            </div>
                        </div>
                    </div>
                    <div className="btn__project">
                        <a href="ready-design.html" className="btn__touch btn__transparent">усі проекти</a>
                    </div>
                </div>
            </section>
        );
    }
}