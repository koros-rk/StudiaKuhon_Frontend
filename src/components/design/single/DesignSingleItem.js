import React from 'react';
import {useParams} from "react-router-dom";
import DesignRelated from "./DesignRelated";

import Image from "../../utils/Image";

const DesignSingleItem = () => {
    let params = useParams();
    console.log(params.slug);

    return (
        <h1>Realize it with {params.slug}</h1>
    )
}

export default DesignSingleItem