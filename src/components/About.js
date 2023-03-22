import React from "react";

import Image from "./utils/Image";
import about_photo from "../styles/img/4.jpg";

class About extends React.Component {
    render() {
        return (
            <div>
                <section className="about-us">
                    <div className="about-us__container">
                        <div className="about-us__wrapper">
                            <div>
                                <h1 className="about-us__title main-title">Про нас</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                    laoreet. Proin
                                    gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
                                    pulvina
                                    sociis
                                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam
                                    fermentum, nulla
                                    luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget
                                    odio.
                                    Cum
                                    sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    Nam
                                    fermentum,
                                    nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc
                                    eget
                                    odio.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                    laoreet.
                                </p>
                            </div>
                            <div className="about-us__img">
                                <Image image={about_photo}></Image>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                            Proin
                            gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
                            tempor.
                            Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien
                            nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
                            bibendum
                            laoreet.
                        </p>
                    </div>
                </section>
                <div className="result">
                    <div className="result__container">
                        <div className="result__item">
                            <div className="result__item-title big-text">19</div>
                            <p>років в роботі</p>
                        </div>
                        <div className="result__item">
                            <div className="result__item-title big-text">1000+</div>
                            <p>задоволених кліентів</p>
                        </div>
                        <div className="result__item">
                            <div className="result__item-title big-text">100+</div>
                            <p>унікальних проектів</p>
                        </div>
                        <div className="result__item">
                            <div className="result__item-title big-text">5</div>
                            <p>регіонів де втілено наші проекти</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About