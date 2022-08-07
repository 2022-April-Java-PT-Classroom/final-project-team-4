import React, { useEffect, useState } from "react";

import Axios from "axios";
import style from './style.module.scss';

// import ReactSwitch from "react-switch";



const AilmentScreen = () => {

    const [ailment, setAilment] = useState(null);
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
        }, 1000);
        
        
           return ()=> clearTimeout(timer);
        
        
        
        

    


    }, [ailment]);

        console.log(ailment);
        
      

    return (
        <div>
            <div className={style.dropdown}>
                <button className={style.dropDwnBtn}>Ailment's</button>
                <section className={style.ailmentSection}>
                    <div className={style.ailmentText}>
                        {
                            loading ? <h3>Loading...</h3> : ailment.map(ailment => (
                                <div key = {ailment.id}>
                                {/* <a href={`ailment/${ailment.id}` }>{ailment.name}</a> */}
                                    <h1 className="ailment_name"><a href={`ailment/${ailment.id}` }>{ailment.name}</a></h1>
                                    <h2 className="ailment_description"><a> {ailment.description}</a></h2>
                                </div>
                            ))
                        }
                        </div> 
                </section>
                </div>
            <br></br>
        </div>
        
    )

    

}
export default AilmentScreen;