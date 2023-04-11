import React from 'react';

import Image from "../utils/Image";
import img_10 from "../../styles/img/10.jpg"

class FurnitureItem extends React.Component {
    render() {
        const item = this.props.item

        return (
            // <div className="mix">
            //     <div className="ready-furniture__item">
            //
            //         <a href={item.slug} className="ready-furniture__img">
            //             <Image image={item.thumbnail_photo} alt={'furniture'}/>
            //         </a>
            //
            //         <div className="name-furniture__choice ready-furniture__box">
            //             <form action="#!">
            //                 <div className="ready-furniture__info">
            //
            //                     <div className="size-product">
            //                         <p>{item.title + " " + item.category.title}</p>
            //                         <div className="size">
            //                             <span>Ширина</span> <span>Висота</span>
            //                             <span>Глибина</span>
            //                         </div>
            //                         <div className="number-size">
            //                             <span>{item.width}</span> х <span>{item.height}</span> х <span>{item.depth}</span>
            //                         </div>
            //                     </div>
            //
            //                     <div className="radio__btn">
            //
            //                         {item.colors && (
            //                             item.colors.map(item => (
            //                                 <div key={item.color.title + "-" + item.color.hash + "-" + item.availability + "-" + this.props.item.id} className="form_radio">
            //                                     <input id="radio-1" type="radio" name="radio" value="1" disabled={item.availability}/>
            //                                     <label htmlFor="radio-1" style={{ backgroundColor: item.color.hash }}></label>
            //                                 </div>
            //                             ))
            //                         )}
            //
            //                     </div>
            //                 </div>
            //
            //                 <div className="price">
            //                     <div>
            //                         <span>{item.price}</span> <span>грн</span>
            //                     </div>
            //                     <button type="submit" className="btn__touch">
            //                         {item.availability ? "додати до колекції" : "замовити"}
            //                     </button>
            //                 </div>
            //
            //             </form>
            //         </div>
            //     </div>
            // </div>

                <div className="ready-furniture__item">

                    <a href={item.slug} className="ready-furniture__img">
                        <Image image={item.thumbnail_photo} alt={'furniture'}/>
                    </a>

                    <div className="name-furniture__choice ready-furniture__box">
                        <form action="#!">
                            <div className="ready-furniture__info">

                                <div className="size-product">
                                    <p>{item.title + " " + item.category.title}</p>
                                    <div className="size">
                                        <span>Ширина</span> <span>Висота</span>
                                        <span>Глибина</span>
                                    </div>
                                    <div className="number-size">
                                        <span>{item.width}</span> х <span>{item.height}</span> х <span>{item.depth}</span>
                                    </div>
                                </div>

                                <div className="radio__btn">

                                    {item.colors && (
                                        item.colors.map(item => (
                                            <div key={item.color.title + "-" + item.color.hash + "-" + item.availability + "-" + this.props.item.id} className="form_radio">
                                                <input id="radio-1" type="radio" name="radio" value="1" disabled={item.availability}/>
                                                <label htmlFor="radio-1" style={{ backgroundColor: item.color.hash }}></label>
                                            </div>
                                        ))
                                    )}

                                </div>
                            </div>

                            <div className="price">
                                <div>
                                    <span>{item.price}</span> <span>грн</span>
                                </div>
                                <button type="submit" className="btn__touch">
                                    {item.availability ? "додати до колекції" : "замовити"}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
        )
    }
}

export default FurnitureItem