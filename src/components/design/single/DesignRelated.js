import React from 'react';

import Image from "../../utils/Image";
import Slider from "react-slick";

class DesignRelated extends React.Component {
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
            <div className="similar-projects">
                <section className="review">

                    <div className="review__container">
                        <h2 className="review__title main-title light-text">Схожі проекти</h2>
                    </div>

                    <Slider {...settings} className="variable-width dots_slick">
                    {/*<div className="variable-width dots_slick">*/}

                        {this.props.related &&(
                            this.props.related.map(item => (
                                <a key={item.id} href={"/design/" + item.slug} className="similar-projects__slider-item">
                                    <div className="similar-projects__slider-img">
                                        <Image image={item.thumbnail_photo}/>
                                    </div>
                                    <p>{item.title}</p>
                                </a>
                            ))

                        )}

                    {/*</div>*/}
                    </Slider>

                </section>
            </div>
        )
    }
}

export default DesignRelated