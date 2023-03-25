import React from 'react';
import {useParams} from "react-router-dom";
import {useAsync} from 'react-async-hook';
import DesignRelated from "./DesignRelated";
import {DefaultAPIInstance} from "../../../api";
import Image from "../../utils/Image";


const fetchDesign = async slug =>
    (await DefaultAPIInstance.get(`/design/slug/${slug}/`));

const DesignSingleItem = () => {
    let params = useParams();
    const design = useAsync(fetchDesign, [params.slug]);

    return (
        <>{
            design.result && (<>
                <section className="name-design-service">
                    <div className="name-design-service__container">
                        <h1 className="name-design-service__title about-us__title main-title">{design.result.data.title}</h1>
                        <div className="name-design-service__imgs">
                            <div className="name-design-service__img big-img">
                                <Image image={design.result.data.main_photo} alt={'room'}/>
                            </div>
                            {design.result.data.gallery && (design.result.data.gallery.map(item => (
                                    <div key={item.url} className="name-design-service__img">
                                        <Image image={item.url} alt={'room'}/>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="name-design-service__wrapper">
                            <h2>Характеристика</h2>
                            <div className="name-furniture">
                                <div className="name-design-service__info">

                                    {design.result.data.description_full.split(/\r?\n/).map(item => (
                                        <p key={item}>{item}</p>
                                    ))}

                                </div>
                                <div className="design-service__btn">
                                    <button type="submit" className="btn__touch">додати до колекції</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <DesignRelated related={design.result.data.related}/>
            </>)
        }
        </>
    )
}

export default DesignSingleItem