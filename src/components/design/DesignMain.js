import React from 'react';
import {DefaultAPIInstance} from "../../api";
import DesignItem from "./DesignItem";
import DesignFilter from "./DesignFilter";
import Image from "../utils/Image";
import arrow from "../../styles/img/icons/red__arrow.svg";
import chunkify from "../utils/Chunkify";

const DesignMain = () => {
    const [filter, setFilter] = React.useState('')
    const [nextURL, setNextURL] = React.useState('')
    const [designsLeft, setDesignsLeft] = React.useState([])
    const [designsRight, setDesignsRight] = React.useState([])
    const [isPagination, setIsPagination] = React.useState(true)

    React.useEffect(() => {
        DefaultAPIInstance.get("/design/?" + filter)
            .then((response) => {

                updateDesigns(response.data.results)

                if (response.data.next !== null) {
                    setNextURL(response.data.next.replace('http://127.0.0.1:8000/api/v1/design/?', ''))
                    setIsPagination(true)
                } else {
                    setIsPagination(false)
                }
            })
            .catch(e => {
                console.log(e)
            });
    }, [filter]);

    const fetchNext = () => {
        DefaultAPIInstance.get("/design/?" + nextURL)
            .then((response) => {

                updateDesigns(response.data.results)

                if (response.data.next !== null) {
                    setNextURL(response.data.next.replace('http://127.0.0.1:8000/api/v1/design/?', ''))
                } else {
                    setIsPagination(false)
                }
            })
            .catch(e => {
                console.log(e)
            });
    }

    const updateDesigns = (data) => {
        const chunks = chunkify(data, 2, true)

        console.log(chunks[0])
        console.log(chunks[1])

        if (chunks[0]) {
            setDesignsLeft(current => [...current, ...chunks[0]])
        } else {
            setDesignsLeft(current => [...current, ...[]])
        }

        if (chunks[1]) {
            setDesignsRight(current => [...current, ...chunks[1]])
        } else {
            setDesignsRight(current => [...current, ...[]])
        }

    }

    const makeFilter = async (filterString) => {
        await setDesignsLeft([])
        await setDesignsRight([])
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

                            {designsLeft.map(item => (<DesignItem key={item.id} item={item}/>))}

                        </div>

                        <div className="ready-design__block">

                            {designsRight.map(item => (<DesignItem key={item.id} item={item}/>))}

                        </div>

                    </div>


                    <div onClick={fetchNext} className="btn__more"
                         style={{visibility: isPagination ? 'visible' : 'hidden'}}>
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