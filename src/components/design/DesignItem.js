import React from 'react';

import Image from "../utils/Image";

class DesignItem extends React.Component {
    render() {
        return (
            <div className="ready-design__item">
                <div className="ready-design__img">
                    <Image image={this.props.item.thumbnail_photo} alt={'design'}/>
                </div>
                <div className="ready-design__box">
                    <a href={"/design/"+this.props.item.slug} className="ready-design__info">
                        <p>{this.props.item.title}</p>
                        <p>{this.props.item.description_shorted}</p>
                    </a>
                </div>
            </div>
        )
    }
}

export default DesignItem