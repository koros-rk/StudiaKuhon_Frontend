import React from 'react';
import DesignItem from "./DesignItem";

import Image from "../utils/Image";
import DesignFilter from "./DesignFilter";

import arrow from "../../styles/img/icons/red__arrow.svg";
import {DefaultAPIInstance} from "../../api";

const DesignMain = () => {
    const [designs, setDesigns] = React.useState([])
    const [filter, setFilter] = React.useState('')
    const [nextURL, setNextURL] = React.useState('')
    const [isPagination, setIsPagination] = React.useState(true)

    React.useEffect(() => {
        DefaultAPIInstance.get("/design/?" + filter)
            .then((response) => {
                setDesigns(current => [...current, ...response.data.results])
                if(response.data.next !== null) {
                    setNextURL(response.data.next.replace('http://127.0.0.1:8000/api/v1/design/?', ''))
                    setIsPagination(true)
                }
                else {
                    setIsPagination(false)
                }
            })
            .catch(e => {console.log(e)});
    }, [filter]);

    const fetchNext = () => {
        DefaultAPIInstance.get("/design/?" + nextURL)
            .then((response) => {
                setDesigns(current => [...current, ...response.data.results])
                if(response.data.next !== null) {
                    setNextURL(response.data.next.replace('http://127.0.0.1:8000/api/v1/design/?', ''))
                }
                else {
                    setIsPagination(false)
                }
            })
            .catch(e => {console.log(e)});
    }

     const makeFilter = async (filterString) => {
        await setDesigns([])
        await setFilter(filterString)
    }

    return (
        <section className="ready-design">

            <DesignFilter onFilterChange={makeFilter}/>

            <div className="ready-furniture-bg"></div>

            <div className="ready-design__container">
                <div className="ready-design__basket">
                    <div className="ready-design__all">

                        <div className="ready-design__block">

                            {designs.slice(0, Math.ceil(designs.length/2)).map(item => (<DesignItem key={item.id} item={item}/>))}

                        </div>

                        <div className="ready-design__block">

                            {designs.slice(Math.ceil(designs.length/2)).map(item => (<DesignItem key={item.id} item={item}/>))}

                        </div>

                    </div>


                        <div onClick={fetchNext} className="btn__more" style={{visibility: isPagination ? 'visible' : 'hidden'}}>
                            <button className="show-more" type="button">
                                <span>переглянути більше</span>
                                <Image image={arrow}/>
                            </button>
                        </div>

                </div>
            </div>
        </section>
    )
}

export default DesignMain