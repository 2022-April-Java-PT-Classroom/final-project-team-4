import React from 'react';
import style from './style.module.scss';
import massagefoot from '../../assets/images/massagefoot.jpg';


const Massage = () => {
    return (

        <div className ={style.Massage}>
        
                <div>               
        <img src={massagefoot} className={style.heroImage}></img>
        <div className={style.centered}>Massage Techniques</div>
      </div>
                    <div>
<div className={style.techniques}>
<div>

<h3>Scroll To See More</h3> 
<br></br>
<p> Plantar Fasciitis</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/0RdOFprqVHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br></br>
<p>Diabetic Neuropathy</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/M9ulZYFkhEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br></br>
<p>Supination</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/uEUSP6kUrrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br></br>
<p>Pronation </p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/cJQSmO_XI6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br></br>
<p>Heel Spur</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/H6dEXAFKPO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br></br>
<p>Hammertoe</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/M7RlDGU9QZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br></br>
<p>Bunion</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/RxmkMWawhf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br></br>
<p>Morton Neuroma</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/XsQhGOzPggc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
</div>
</div>
 </div> 


);
  } 

                   
export default Massage;