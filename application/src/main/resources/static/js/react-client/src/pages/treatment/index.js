import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './style.module.scss';
import {useParams} from "react-router-dom";

const Treatment = () => {

    const [loading, setLoading] = useState(true),
        [treatmentData, setTreatmentData] = useState([]);

        const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`/api/ailment/${id}/treatments`
            );
            setTreatmentData(result.data);
        }
        fetchData()
    }, [id]);

    return (
        <div>
            <div>
                {treatmentData.map(treatment =>
                    <div>
                        <div>
                            <h2>{treatment.name}</h2>
                        </div>
                        <div>
                            <p>{treatment.description}</p>
                            <p>{treatment.benefits}</p>
                        </div>
                    </div>
                )}
                
            </div>

        </div>
    );
}

export default Treatment;