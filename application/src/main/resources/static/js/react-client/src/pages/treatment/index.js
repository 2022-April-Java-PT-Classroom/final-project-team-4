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
    <div className={style.treatment}>
        <div className={style.head}>
           <h1 className={style.treatmentTitle}> {treatment.name}</h1>
           <img className={style.treatmentImage} src={treatment.image} />
        </div>
        <div className={style.description}>
            <h2 className={style.descriptionTitle}>Description of Treatment</h2>
            <p className={style.descriptionText}>{treatment.description}</p>
        </div>
        <div className={style.benefits}>
            <h2 className={style.benefits}>Benefits of Treatment</h2>
            <p className={style.benefitsText}>{treatment.benefits}</p>
        </div>
    </div>
    )

}
export default TreatmentPage