import React from 'react';
import Slider from "react-slick";
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
            autoplaySpeed: 3000,
        }
        return (
            <section className="unique-design">
                <div className="unique-design__container">
                    <div className="unique-design__slider dots_slick">
                        <Slider {...settings}>
                            <div>
                                <div className="unique-design__item">
                                    <div className="unique-design__item-img">
                                        <img src={room} alt={"room-2"} style={{ position: 'absolute', transform: 'translate(0.3%, 0%)'}}></img>
                                    </div>
                                    <div className="unique-design__item-info">
                                        <h2 style={{ transform: 'translate(85%, 0%)' }}>120+ <span>готових проектів</span> </h2>
                                        <p style={{ transform: 'translate(85%, 0%)' }}>унікальний дизайн для вашої кухні</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="unique-design__item">
                                    <div className="unique-design__item-img">
                                        <img src={room} alt={"room-2"} style={{ position: 'absolute', transform: 'translate(0.3%, 0%)'}}></img>
                                    </div>
                                    <div className="unique-design__item-info">
                                        <h2 style={{ transform: 'translate(85%, 0%)' }}>19 <span>років в роботі</span></h2>
                                        <p style={{ transform: 'translate(85%, 0%)' }}>унікальний дизайн для вашої кухні</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="unique-design__item">
                                    <div className="unique-design__item-img">
                                        <img src={room} alt={"room-2"} style={{ position: 'absolute', transform: 'translate(0.3%, 0%)'}}></img>
                                    </div>
                                    <div className="unique-design__item-info unique-design__item-info-big">
                                        <h2 style={{ transform: 'translate(85%, 0%)' }}>1000+ <span>задоволених кліентів</span></h2>
                                        <p style={{ transform: 'translate(85%, 0%)' }}>унікальний дизайн для вашої кухні</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="unique-design__item">
                                    <div className="unique-design__item-img">
                                        <img src={room} alt={"room-2"} style={{ position: 'absolute', transform: 'translate(0.3%, 0%)'}}></img>
                                    </div>
                                    <div className="unique-design__item-info unique-design__item-info-big">
                                        <h2 style={{ transform: 'translate(85%, 0%)' }}>100+ <span>унікальних проектів</span></h2>
                                        <p style={{ transform: 'translate(85%, 0%)' }}>унікальний дизайн для вашої кухні</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="unique-design__item">
                                    <div className="unique-design__item-img">
                                        {/*<img src="img/1.jpg" alt="room-2"/>*/}
                                        <img src={room} alt={"room-2"} style={{ position: 'absolute', transform: 'translate(0.3%, 0%)'}}></img>
                                    </div>
                                    <div className="unique-design__item-info">
                                        <h2 style={{ transform: 'translate(85%, 0%)' }}>5 <span>регіонів де втілено наші проекти</span></h2>
                                        <p style={{ transform: 'translate(85%, 0%)' }}>унікальний дизайн для вашої кухні</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="btn__project">
                        <a href="ready-design.html" className="btn__touch btn__transparent">усі проекти</a>
                    </div>
                </div>
            </section>
        );
    }
}