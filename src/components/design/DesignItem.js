import React from 'react';

import Image from "../utils/Image";
import item from "../../styles/img/5.jpg";

class DesignItem extends React.Component {
    render() {
        return (
            <div className="ready-design__item">
                <div className="ready-design__img">
                    {/*<img src="../../styles/img/5.jpg" alt="design"/>*/}
                    <Image image={item} alt={'design'}/>
                </div>
                <div className="ready-design__box">
                    <a href="name-design-service.html" className="ready-design__info">
                        <p>Назва дизайну Назва дизайну Назва дизайну</p>
                        <p>Vestibulum ultrices mollis elit, id sagittis metus rutrum sed. Vivamus
                            molestie erat ac neque consequat, eu aliquet tellus sodales. </p>
                    </a>
                </div>
            </div>
        )
    }
}

export default DesignItem