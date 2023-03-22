import React from 'react';
import {useParams} from "react-router-dom";
import FurnitureRelated from "./FurnitureRelated";

import Image from "../../utils/Image";

const FurnitureSingleItem = () => {
    let params = useParams();
    console.log(params.slug);

    return (
        <h1>Realize it with {params.slug}</h1>
    )
}

export default FurnitureSingleItem