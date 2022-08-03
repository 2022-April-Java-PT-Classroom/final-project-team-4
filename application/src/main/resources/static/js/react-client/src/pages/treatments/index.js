import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './style.module.scss';
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom'

const TreatmentsPage = () => {

    const [loading, setLoading] = useState(true),
        [ailment, setAilment] = useState(null);

        const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`/api/ailment/${id}`
            );
            setAilment(result.data);
        }
        fetchData()
    }, [id]);

    if(!ailment)
    return null
    console.log(ailment)
    return (
        <div>
            <div>
                {ailment.name}
            </div>
            <div>
                {ailment.treatments.map(treatment =>
                    <div>
                        <div>
                        <Link to={`/treatment/${treatment.id}`}>{treatment.name}</Link>
                        </div>
                    </div>
                )}
                
            </div>

        </div>
    );
}
export default TreatmentsPage


