import React, { useEffect, useState } from "react";

import Axios from "axios";
import style from './style.module.scss';

// import ReactSwitch from "react-switch";



const AilmentScreen = () => {

    const [ailment, setAilment] = useState(null);
    const [treatment, setTreatment] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        
        const fetchAilmentData = async () => {
            const result = await Axios ('http://localhost:8080/ailment');
            setAilment(result.data);
        }
        

        if(ailment) {
            setLoading(false);
        }
        
        const timer = setTimeout(() => {
            !ailment && fetchAilmentData();
        }, 2000);
        
           return ()=> clearTimeout(timer);


    }, [ailment]);

    useEffect(() => {
        const fetchTreatmentData = async () =>{
            const treatmentResult = await Axios ('http://localhost:8080/treatments')
            setTreatment(treatmentResult.data);
        }
        if(treatment) {
            setLoading(false);
        }
        const treatmentTimer = setTimeout(() => {
            !treatment && fetchTreatmentData();
        }, 1000);
        
           return ()=> clearTimeout(treatmentTimer);
    }, [treatment]);

        // console.log(ailment);
      

    return (
        <div>
        <div className={style.dropdown}>
            <button className={style.dropDwnBtn}>Ailment's</button>
            <section className={style.ailmentSection}>
                <div className={style.ailmentText}>
                    {loading ? <h3>Loading...</h3> : ailment && ailment.map(ailment => (
                       <div key = {ailment.id}>
                       <h1 className="ailment_name"><a href={`ailment/${ailment.id}` }>{ailment.name}</a></h1>
                       <h2 className="ailment_description"><a> {ailment.description}</a></h2>
                    </div>
                    ))}
                    </div> 
            </section>
            </div>
            <br></br>
            <div className={style.dropdown}>
                <button className={style.dropDwnBtn}>Treaments's</button>
                <section className={style.treatmentSection}>
                    <div className={style.treatmentText}>
                        {loading ? <h3>Loading...</h3> : treatment && treatment.map(treatment => (
                        <div key = {treatment.id}>
                        <h1 className="treatment_name"><a href={`treatments/${treatment.id}` }>{treatment.name}</a></h1>
                        {/* <h2 className="treatment_description"><a> {treatment.description}</a></h2> */}
                        </div>
                        ))}
                    </div> 
                </section>
            </div>
        </div>
        
    )

    

}
export default AilmentScreen;