import React from 'react';
import Slider from "react-slick";

export default class ReviewSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            speed: 300,
            centerMode: true,
            adaptiveHeight: true,
            arrows: false,
            variableWidth: true,
            // autoplay: true,
            // autoplaySpeed: 3000, надьо?
        }
        return (
            <section className="review">
                <div className="review__container">
                    <h2 className="review__title main-title light-text">Відгуки наших клієнтів</h2>
                </div>
                <div className="variable-width dots_slick">
                    <Slider {...settings}>
                        <div
                            className="review__wrapper-slider-item slider-item-1"> {/*style={{margin: '0px', padding: '0px'}}*/}
                            <p>
                                Сміливо можу рекомендувати цю фірму. У мене був проект під ключ. Ніколи
                                б не подумав раніше, що можна просто розказати дизайнеру, що ти хочеш бачити і через
                                кілька місяців в’їхати у дім мрії. Велике дякую за Вашу роботу!
                            </p>
                            <div>
                                <p style={{transform: 'translate(0%, 150%)'}}>Олександр</p>
                                <p style={{transform: 'translate(0%, 300%)'}}>Хмельницкий</p>
                            </div>
                        </div>
                        <div className="review__wrapper-slider-item slider-item-2">
                            <p>
                                Дякую за чудовий проект. все чітко і по плану.
                                Квартиру не впізнати. Все зроблено саме так, як я хотіла.
                            </p>
                            <div>
                                <p style={{transform: 'translate(0%, 200%)'}}>Ольга</p>
                                <p style={{transform: 'translate(0%, 400%)'}}>Красилів</p> {/*marginBottom: '10px'*/}
                            </div>
                        </div>
                        <div className="review__wrapper-slider-item slider-item-3">
                            <p>
                                Велике дякую за виконану роботу! Отримала саме той результат, який був необхідний.
                                Продумано все до деталів, креативно і просто, дуже зручно і функціонально. Думаю, що
                                звернусь ще не раз.
                            </p>
                            <div>
                                <p style={{transform: 'translate(0%, 100%)'}}>Наталья</p>
                                <p style={{transform: 'translate(0%, 200%)'}}>Хмельницкий</p>
                            </div>
                        </div>
                        <div className="review__wrapper-slider-item slider-item-1">
                            <p>
                                Сміливо можу рекомендувати цю фірму. У мене був проект під ключ. Ніколи
                                б не подумав раніше, що можна просто розказати дизайнеру, що ти хочеш бачити і через
                                кілька місяців в’їхати у дім мрії. Велике дякую за Вашу роботу!
                            </p>
                            <div>
                                <p style={{transform: 'translate(0%, 150%)'}}>Олександр</p>
                                <p style={{transform: 'translate(0%, 300%)'}}>Хмельницкий</p>
                            </div>
                        </div>
                        <div className="review__wrapper-slider-item slider-item-2">
                            <p>
                                Дякую за чудовий проект. все чітко і по плану.
                                Квартиру не впізнати. Все зроблено саме так, як я хотіла.
                            </p>
                            <div>
                                <p style={{transform: 'translate(0%, 200%)'}}>Ольга</p>
                                <p style={{transform: 'translate(0%, 400%)'}}>Красилів</p>
                            </div>
                        </div>
                        <div className="review__wrapper-slider-item slider-item-3">
                            <p>
                                Велике дякую за виконану роботу! Отримала саме той результат, який був необхідний.
                                Продумано все до деталів, креативно і просто, дуже зручно і функціонально. Думаю, що
                                звернусь ще не раз.
                            </p>
                            <div>
                                <p style={{transform: 'translate(0%, 100%)'}}>Наталья</p>
                                <p style={{transform: 'translate(0%, 200%)'}}>Хмельницкий</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}