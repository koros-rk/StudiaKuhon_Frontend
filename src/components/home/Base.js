import React from "react";

import Image from "../utils/Image";
// import PromoSlider from "./PromoSlider";
import PromoSlider from "./PromoSlider.js";

import ReviewSlider from "./ReviewSlider";
import room from "../../styles/img/1.jpg";
import room_3 from "../../styles/img/3.jpg";

class Base extends React.Component {
    render() {
        return (
            <div>
                {/*<!-- ____________ s1_individual-space ____________ -->*/}
                <section className="individual-space">
                    <div className="individual-space__container">
                        <div className="individual-space__box">
                            <div className="individual-space__title">
                                <h1 className="individual-space__main-title main-title">Створюємо ваш індивідуальний
                                    простір
                                </h1>
                                <h3>StudioKuhon</h3>
                            </div>
                            <a href="src/components/home/Base.js" className="individual-space__btn btn__touch">Зв’язатись</a>
                        </div>
                        <div className="individual-space__img">
                            <Image image={room} alt={'room'}></Image>
                        </div>
                    </div>
                </section>

                {/*<!-- ____________ s2_unique-design (slider) ____________ -->*/}
                <PromoSlider />

                 {/*// <!-- ____________ s3_design-project / s4_individual-feed ____________ -->*/}
                <section class="design-project indent-top">
                    <div class="design-project__container">
                        <h2 class="main-title">Чому саме дизайн-проект?</h2>
                        <p>Це оптимальний шлях до бажаного результату!</p>
                        <div class="design-project__img">
                            <img src={room_3} alt="room-3"/>
                        </div>
                    </div>
                    <div class="individual-feed__container indent-top">
                        <h2 class="individual-feed__title main-title light-text">Шукаєте <br/> індивідуальний підхід? </h2>
                        <p class="light-text">
                            Ми розробляємо наші проєкти, враховуючи особливості об’єкта,
                            можливості та смаки замовника, його бачення та цілі.
                            Розробляємо проекти як частини об’єкту так і під ключ.
                        </p>
                        <div class="individual-feed__btn">
                            <a href="#!" class="btn__touch btn__touch-dark">консультація</a>
                        </div>
                    </div>
                </section>

                {/*<!-- ____________ s5_review (slider) ____________ -->*/}

                <ReviewSlider/>

                {/*<!-- ____________ s6_choose ____________ -->*/}
                <section class="choose indent-top">
                    <div class="choose__container">
                        <h2 class="choose__title main-title big-text light-text">Чому варто обрати нашу компанію</h2>
                        <div class="choose__wrapper">
                            <div class="choose__items light-text choose__items-left">
                                <div class="choose__item">
                                    <h3>
                                        Ми відкриті до діалогу
                                    </h3>
                                    <p>
                                        Наші замовники можуть отримувати відповіді на будь-які питання по проєкту як в ході
                                        реалізації так і після
                                    </p>
                                </div>
                                <div class="choose__item">
                                    <h3>
                                        Ми досвідчені
                                    </h3>
                                    <p>
                                        Наш досвід у цій сфері вже понад 20 років, весь наш багаж знань ми направляємо на
                                        втілення
                                        ваших мрій
                                    </p>
                                </div>
                                <div class="choose__item">
                                    <h3>
                                        Ми точні і конкретні
                                    </h3>
                                    <p>
                                        Ми плануємо. Всі проекти виконуються у зазначені терміни
                                    </p>
                                </div>
                            </div>
                            <div class="choose__items light-text choose__items-right">
                                <div class="choose__item">
                                    <h3>
                                        Ми виконуємо весь спектр робіт
                                    </h3>
                                    <p>
                                        Ми реалізуємо проекти від ідеї і концепції до виготовлення та встановлення меблів
                                    </p>
                                </div>
                                <div class="choose__item">
                                    <h3>
                                        Ми на зв'язку
                                    </h3>
                                    <p>
                                        Ми можемо вносити будь-які зміни в проєкт в ході реалізації, в разі необхідності та
                                        за
                                        бажанням клієнта
                                    </p>
                                </div>
                                <div class="choose__item">
                                    <h3>
                                        Ми концептуальні
                                    </h3>
                                    <p>
                                        Ми сповідуємо ідею мінімалізму в інтер'єрі, функціональності, зручності і
                                        практичності
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Base