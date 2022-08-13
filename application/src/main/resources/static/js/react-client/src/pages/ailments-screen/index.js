import React, { useEffect, useState } from "react";
import waterfeet from '../../assets/images/waterfeet.jpg';
import Axios from "axios";
import style from './style.module.scss';
import {Link} from 'react-router-dom'
import {useParams} from "react-router-dom";
import footicon from '../../assets/images/footicon.png';
// import ReactSwitch from "react-switch";



const AilmentScreen = () => {

    const [ailment, setAilment] = useState(null);
    const [treatment, setTreatment] = useState(null);
    const [loading, setLoading] = useState(true);

    const {id} = useParams()

    

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

    
    
    return (
        <div className={style.ailmentsBody}>
            <div >
                <img src={waterfeet} className={style.heroImage}></img>
                <div className={style.centered}>Ailments & Treatments</div>
            </div>
            
        <div>
            <section className={style.ailmentSection}>
                <div className={style.ailmentText}>
                    {loading ? <h3>Loading...</h3> : ailment && ailment.map(ailment => (
                    <div className= {style.ailment_block} key = {ailment.id}>
                       <h1 ><a href={`ailment/${ailment.id}` } className={style.ailment_name}>{ailment.name}</a></h1>
                       <p className={style.ailment_description}>{ailment.description}</p>
                       <div className={style.treatmentsList}>
                    <div className={style.dropdown}>
                        <button className={style.dropdownButton}>Treatments</button>
                      <div className={style.individualTreatment}>  
                {ailment.treatments.map(treatment =>
                        <div >
                            <Link to={`/treatment/${treatment.id}`} className={style.treatmentLink}>{treatment.name}</Link>
                        </div>
                        )}   
                        </div>
                    </div>
                        </div>
                    </div>
                    ))}
                </div> 
            </section>
            <div className={style.selfcare}>
                <div className={style.header_selfcare}>
                    <img src={footicon} height="100" width="100"></img>
                <h2 className={style.selfcareTitle}>Here are some ways you can keep your feet healthy</h2>
                    <img src={footicon} height="100" width="100"></img>
                </div>
                <ul className={style.selfcareList}>
                    <div className={style.selfcareList1}>
                        <li>
                            Check them daily for cuts, sores, swelling, and infected toenails.
                        </li>
                        <li>
                            Give them a good cleaning in warm water, but avoid soaking them because that may dry them out.
                        </li>
                    </div>
                    <div className={style.selfcareList2}>
                        <li>
                            Moisturize them every day with lotion, cream, or petroleum jelly. Don’t put moisturizer between your toes. You want to keep the skin there dry to prevent infection.
                        </li>
                        <li>
                            Avoid wearing tight-fitting shoes. Your shoes shouldn’t hurt your feet.
                        </li>
                    </div>
                    <div className={style.selfcareList3}>
                        <li>
                            Skip the flip-flops and flats. They don’t provide enough arch support.
                        </li>
                        <li>
                            Rotate your shoes so you’re not wearing the same pair every day.
                        </li>
                        <li>
                            Trim your toenails straight across with a nail clipper. Then use an emery board or nail file to smooth the corners, which will prevent the nail from growing into your skin.
                        </li>
                    </div>
                    </ul>
            </div>
        </div>
        </div>
        
    )

    

}
export default AilmentScreen;