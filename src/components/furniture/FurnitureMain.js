import React from 'react';
import FurnitureItem from "./FurnitureItem";
import FurnitureFilter from "./FurnitureFilter";
import {DefaultAPIInstance} from "../../api";
import Image from "../utils/Image";
import arrow from "../../styles/img/icons/red__arrow.svg";
import chunkify from "../utils/Chunkify";

const FurnitureMain = () => {
    const [filter, setFilter] = React.useState('')
    const [nextURL, setNextURL] = React.useState('')

    const [furnitureLeft, setFurnitureLeft] = React.useState([])
    const [furnitureMiddle, setFurnitureMiddle] = React.useState([])
    const [furnitureRight, setFurnitureRight] = React.useState([])

    const [isPagination, setIsPagination] = React.useState(true)

    React.useEffect(() => {
        DefaultAPIInstance.get("/furniture/?" + filter)
            .then((response) => {

                updateDesigns(response.data.results)

                if(response.data.next !== null) {
                    setNextURL(response.data.next.replace('http://127.0.0.1:8000/api/v1/furniture/?', ''))
                    setIsPagination(true)
                }
                else {
                    setIsPagination(false)
                }
            })
            .catch(e => {console.log(e)});
    }, [filter]);

    const fetchNext = () => {
        DefaultAPIInstance.get("/furniture/?" + nextURL)
            .then((response) => {

                updateDesigns(response.data.results)

                if(response.data.next !== null) {
                    setNextURL(response.data.next.replace('http://127.0.0.1:8000/api/v1/furniture/?', ''))
                }
                else {
                    setIsPagination(false)
                }
            })
            .catch(e => {console.log(e)});
    }

    const updateDesigns = (data) => {
        const chunks = chunkify(data, 3, true)

        if (chunks[0]) {
            setFurnitureLeft(current => [...current, ...chunks[0]])
        } else {
            setFurnitureLeft(current => [...current, ...[]])
        }

        if (chunks[1]) {
            setFurnitureMiddle(current => [...current, ...chunks[1]])
        } else {
            setFurnitureMiddle(current => [...current, ...[]])
        }

        if (chunks[2]) {
            setFurnitureRight(current => [...current, ...chunks[2]])
        } else {
            setFurnitureRight(current => [...current, ...[]])
        }
    }

    const makeFilter = async (filterString) => {
        await setFurnitureLeft([])
        await setFurnitureMiddle([])
        await setFurnitureRight([])

        console.log(filterString)

        await setFilter(filterString)
    }

    return (
        <section className="ready-furniture">

            <div className="ready-furniture__container">

                <h1 className="main-title">Готові Меблі</h1>

                <FurnitureFilter onFilterChange={makeFilter}/>

            </div>

            <div className="ready-furniture-bg"></div>

            <div className="ready-furniture__container">
                <div className="row">
                    <div className="small-12 columns small-centered">
                        <div className="container" id="Container">
                            <div className="small-block-grid-3 medium-block-grid-4 large-block-grid-5">

                                <div className="ready-furniture__row">

                                    {furnitureLeft.map(item => (<FurnitureItem key={item.id} item={item}/>))}

                                </div>

                                <div className="ready-furniture__row">

                                    {furnitureMiddle.map(item => (<FurnitureItem key={item.id} item={item}/>))}

                                </div>

                                <div className="ready-furniture__row">

                                    {furnitureRight.map(item => (<FurnitureItem key={item.id} item={item}/>))}

                                </div>

                            </div>

                            <div className="btn__more">
                                <button onClick={fetchNext} className="show-more" type="button">
                                    <span>переглянути більше</span>
                                    <Image image={arrow}/>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FurnitureMain