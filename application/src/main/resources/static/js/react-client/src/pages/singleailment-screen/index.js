import React, {useEffect, useState} from "react";

import {Link} from 'react-router-dom'
import axios from 'axios';
import style from './style.module.scss';
import {useParams} from "react-router-dom";

const SingleAilmentScreen = () => {
    
    const [loading, setLoading] = useState(true);
    const [ailment, setAilment] = useState(null);

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
    <div className={style.ailment}>
      <div className={style.head}>
        <h1 className={style.ailmentTitle}> {ailment.name}</h1>
          <div className={style.image}>
            <img className={style.ailmentImage} src={ailment.image} />
          </div>
      </div>
        
      <div className={style.information}>  
      <div className={style.description}>
        <h2 className={style.descriptionTitle}>Description of Ailment</h2>
        <p className={style.longDescriptionText}>{ailment.longDescription}</p>
        
        <div className={style.treatments}>
            <h2 className={style.treatments}>Types of Treatments</h2>
            <div className={style.dropdown}>
            <div className={style.individualTreatment}>  
                {ailment.treatments.map(treatment =>
                        <div >
                            <Link to={`/treatment/${treatment.id}`} className={style.treatmentLink}>{treatment.name}</Link>
                            
                        </div>
                        )}   
                       
            </div>
          
                        
          <div className={style.recommendations}>
             <h2 className={style.prodRecommendations}>Product Recommendations </h2>
            <div className={style.productAilnment}>
              
              <div className={style.prodImage}>
                <img className={style.ailmentImage1} src={ailment.prodImg1} />
                <a href={ailment.prodLink1}>
                  <p className={style.productRec}>{ailment.productRec1}</p>
                </a>
              </div>
              
              <div className={style.prodImage}>
                <img className={style.ailmentImage2} src={ailment.prodImg2} />
                <a href={ailment.prodLink2}>
                  <p className={style.productRec}>{ailment.productRec2}</p>
                </a>
              </div>
              
              <div className={style.prodImage}>
                <img className={style.ailmentImage3} src={ailment.prodImg3} />
                <a href={ailment.prodLink3}>
                  <p className={style.productRec}>{ailment.productRec3}</p>
                </a>
              </div>
            </div>
          </div>      


          </div>
        </div>

                 
      </div>
      </div>
    </div>
    )

    // useEffect (()=> {
    //     const fetchData = async () => {
    //         const result = await Axios (`http://localhost:8080/ailment/${id}`
    //         );
    //         setAilment(result.data);
    //     }
    //     fetchData()

    //     if (ailment) {
    //         setLoading(false);
    //     }

    //     const timer = setTimeout (() => {
    //         !ailment && fetchData();
    //     }, 2000);

    //         return ()=> clearTimeout(timer);
    
    //     }, [id, ailment]);

    //     return(
    //         // <h1>Single Ailment Page</h1>
    //         <div className={style.ailment}></div>
            
    //     )

} 
export default SingleAilmentScreen