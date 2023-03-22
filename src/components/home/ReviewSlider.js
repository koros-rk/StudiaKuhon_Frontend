import React from 'react';
import Slider from "react-slick";

import Image from "../utils/Image";
import room from "../../styles/img/1.jpg";

export default class ReviewSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            centerMode: true,
            variableWidth: true
        }
        return (
            <section className="review">
                <div className="review__container">
                    <h2 className="review__title main-title light-text">Відгуки наших клієнтів</h2>
                </div>

                {/*<div className="variable-width dots_slick">*/}
                <Slider>

                    <div className="review__wrapper-slider-item slider-item-1">
                        <p>
                            Сміливо можу рекомендувати цю фірму. У мене був проект під ключ. Ніколи
                            б не подумав раніше, що можна просто розказати дизайнеру, що ти хочеш бачити і через
                            кілька місяців в’їхати у дім мрії. Велике дякую за Вашу роботу!
                        </p>
                        <div>
                            <p>Олександр</p>
                            <p>Хмельницкий</p>
                        </div>
                    </div>
                    <div className="review__wrapper-slider-item slider-item-2">
                        <p>
                            Дякую за чудовий проект. все чітко і по плану.
                            Квартиру не впізнати. Все зроблено саме так, як я хотіла.
                        </p>
                        <div>
                            <p>Ольга</p>
                            <p>Красилів</p>
                        </div>
                    </div>
                    <div className="review__wrapper-slider-item slider-item-3">
                        <p>
                            Велике дякую за виконану роботу! Отримала саме той результат, який був необхідний.
                            Продумано все до деталів, креативно і просто, дуже зручно і функціонально. Думаю, що
                            звернусь ще не раз.
                        </p>
                        <div>
                            <p>Наталья</p>
                            <p>Хмельницкий</p>
                        </div>
                    </div>
                    <div className="review__wrapper-slider-item slider-item-1">
                        <p>
                            Сміливо можу рекомендувати цю фірму. У мене був проект під ключ. Ніколи
                            б не подумав раніше, що можна просто розказати дизайнеру, що ти хочеш бачити і через
                            кілька місяців в’їхати у дім мрії. Велике дякую за Вашу роботу!
                        </p>
                        <div>
                            <p>Олександр</p>
                            <p>Хмельницкий</p>
                        </div>
                    </div>
                    <div className="review__wrapper-slider-item slider-item-2">
                        <p>
                            Дякую за чудовий проект. все чітко і по плану.
                            Квартиру не впізнати. Все зроблено саме так, як я хотіла.
                        </p>
                        <div>
                            <p>Ольга</p>
                            <p>Красилів</p>
                        </div>
                    </div>
                    <div className="review__wrapper-slider-item slider-item-3">
                        <p>
                            Велике дякую за виконану роботу! Отримала саме той результат, який був необхідний.
                            Продумано все до деталів, креативно і просто, дуже зручно і функціонально. Думаю, що
                            звернусь ще не раз.
                        </p>
                        <div>
                            <p>Наталья</p>
                            <p>Хмельницкий</p>
                        </div>
                    </div>

                </Slider>
                {/*</div>*/}

            </section>
        );
    }
}