import React, { useEffect, useState } from 'react';

import {Link} from 'react-router-dom'
import axios from 'axios';
import style from './style.module.scss';
import {useParams} from "react-router-dom";

const TreatmentsPage = () => {

    const [loading, setLoading] = useState(true),
        [ailment, setAilment] = useState(null);

        const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`/ailment/${id}`
            );
            setAilment(result.data);
        }
        fetchData()
    }, [id]);

    if(!ailment)
    return null
    console.log(ailment)
    return (
        <div className={style.treatments}>
            <div className={style.ailment}>
                <h1 className={style.ailmentTitle}>{ailment.name}</h1>
            </div>
            <div className={style.treatmentsList}>
                {
                    ailment.treatments.map(treatment =>
                        <div className={style.individualTreatment}>
                            <Link to={`/treatment/${treatment.id}`} className={style.treatmentLink}>{treatment.name}</Link>
                        </div>
                        )
                }   
            </div>

        </div>
    );
}
export default TreatmentsPage


