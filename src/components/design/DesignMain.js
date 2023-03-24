import React from 'react';
import DesignItem from "./DesignItem";

import Image from "../utils/Image";
import DesignFilter from "./DesignFilter";

import arrow from "../../styles/img/icons/red__arrow.svg";

class DesignMain extends React.Component {
    render() {
        return (
            <section class="ready-design">

                <DesignFilter/>

                <div class="ready-furniture-bg"></div>

                <div class="ready-design__container">
                    <div class="ready-design__basket">
                        <div class="ready-design__all">

                            <div class="ready-design__block">

                                <DesignItem/>
                                <DesignItem/>
                                <DesignItem/>
                                <DesignItem/>
                                <DesignItem/>
                                <DesignItem/>


                            </div>

                            <div class="ready-design__block">

                                <DesignItem/>
                                <DesignItem/>
                                <DesignItem/>
                                <DesignItem/>
                                <DesignItem/>
                                <DesignItem/>

                            </div>

                        </div>

                        <div class="btn__more">
                            <button class="show-more" type="button">
                                <span>переглянути більше</span>
                                <Image image={arrow}/>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default DesignMain