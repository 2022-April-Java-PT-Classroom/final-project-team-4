import React, { useState } from 'react';

import { massageTechniques } from './content';
import massagefoot from '../../assets/images/massagefoot.jpg';
import style from './style.module.scss';

const Massage = () => {


    const [massageListIndex, setMassageListIndex] = useState(0);

    const changeMassageListItem = (index) => {
        setMassageListIndex(index);
    }

    return (
        <div className={style.Massage}>
            <div>
                <img src={massagefoot} className={style.heroImage} alt=''></img>
                <div className={style.centered}>Massage Techniques</div>
            </div>
            <div>
                {massageTechniques.map((massageTechnique, index) => (
                    <button onClick={() => changeMassageListItem(index)}>{massageTechnique.name}</button>
                ))}
                <div className={style.techniques}>
                    <div>
                        <h3>{massageTechniques[massageListIndex].name}</h3>
                        <div class="videos">
                            <iframe width="560" height="315" src={massageTechniques[massageListIndex].videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <p> {massageTechniques[massageListIndex].text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Massage;