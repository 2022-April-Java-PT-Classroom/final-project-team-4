import React, {useEffect, useState} from "react";
import Axios from "axios"; 
import style from './style.module.scss';
import {useParams} from "react-router-dom";



const SingleAilmentScreen = () => {
    
    const [loading, setLoading] = useState(true);
    const [singleAilement, setSingleAilment] = useState(null);

    const {id} = useParams()

    useEffect (()=> {


    const fetchData = async () => {
            const result = await Axios (`http://localhost:8080/ailment/${id}`);
            setSingleAilment(result.data);
        }

        if (singleAilement) {
            setLoading(false);
        }

        const timer = setTimeout (() => {
            !singleAilement && fetchData();
        }, 2000);

            return ()=> clearTimeout(timer);
    
        }, [id, singleAilement]);

        return(
            <h1>Single Ailment Page</h1>
            
        )

} 
export default SingleAilmentScreen