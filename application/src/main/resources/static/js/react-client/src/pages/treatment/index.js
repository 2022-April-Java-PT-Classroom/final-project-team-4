import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './style.module.scss';
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom'
const TreatmentPage = () => {

    const [loading, setLoading] = useState(true),
        [treatment, setTreatment] = useState(null);

        const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`/api/treatment/${id}`
            );
            setTreatment(result.data);
        }
        fetchData()
    }, [id]);
    if(!treatment)
    return null
    console.log(treatment)
    return (
        <div>
           <p> {treatment.name}</p>
           <p>{treatment.description}</p>
           <p>{treatment.benefits}</p>
        </div>
    )

}
export default TreatmentPage