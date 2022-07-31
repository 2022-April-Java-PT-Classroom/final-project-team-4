import React, { useEffect, useState } from "react";

// import ReactSwitch from "react-switch";
import style from './style.module.scss';
import Axios from "axios";

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
            <section className={style.ailmentSection}>
                <div className={style.ailmentText}>
                  <h3>Ailment Page</h3>  
                    {loading ? <h3>Loading...</h3> : ailment.map(ailment => (
                       <div key = {ailment.id}>
                       {/* <a href={`ailment/${ailment.id}` }>{ailment.name}</a> */}
                       <h1 className="ailment_name"><a href={`ailment/${ailment.id}` }>{ailment.name}</a></h1>
                       </div>
                    ))}
                    </div> 

            </section>
        </div>
    )

    

}
export default AilmentScreen;