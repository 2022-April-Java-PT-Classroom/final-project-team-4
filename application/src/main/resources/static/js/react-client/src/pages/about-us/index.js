import React from 'react';
import style from './style.module.scss';
import aisha from '../../assets/images/Aisha.jpg';
import sade from '../../assets/images/Sade.jpg';
import jason from '../../assets/images/Jason.jpg';
import zach from '../../assets/images/Zach.jpg';
import CM from '../../assets/images/CM.jpg';
import blankprofile from '../../assets/images/blankprofile.png';
import developers from '../../assets/images/developers.jpg';

import Github from '../../assets/images/Github.png';
import LinkedIn from '../../assets/images/LinkedIn.png';






const AboutUs = () => {
    return (

                <div className ={style.aboutUs}>
                  <div className={style.banner}>
        <img src={developers} className={style.heroImage}></img>
        <div className={style.centered}>Meet the Developers</div>
      </div>
                    <div className={style.bios}>
                    <div>
                    <img src={aisha} height="300" width="300"></img>
                    <h3>Aisha Bluem</h3>
                    <div class="socials">   
<a href="https://github.com/acbluem"><img src={Github} width="40"></img></a>
<a href="https://www.linkedin.com/in/aishabluem/"><img src={LinkedIn} width="40"></img></a>
</div>
                    <p> Aisha (phonetic spelling: ay-zhuh).
                       Aisha is a junior full-stack software developer pursuing her passion in coding, reigniting the
                       days of her youth where she'd make front-end websites of her favorite cartoon/video game characters
                       in the early and late 2000s. She is a highly focused problem solver with excellent research and
                       troubleshooting skills, committed to breaking into the tech industry.</p>
                         </div>

                         <div>
               
                    <img src={sade} height="300" width="300"></img>
                    <h3> Andera Fells</h3>
                    <div class="socials">   
<a href="https://github.com/anderafells"><img src={Github} width="40"></img></a>
<a href="https://www.linkedin.com/in/anderafells/"><img src={LinkedIn} width="40"></img></a>
</div>
                    <p> Andera is a full stack developer currently located in Columbus, OH. Her love for learning,and taking
                    on challenging task has set her on the path of coding. She loves to see projects come "alive". Andera is a
                    dedicated team player, but she also works well on her own. Outside of development she enjoys researching
                    anything that catches her attention from music,dance, how the mind works etc.. Most importantly Andera
                    love spending time with her family!</p>
                    </div>

                   <div>
                   <img src={CM} height="300" width="300"></img>
                   <h3>C.M Rimal</h3>
                   <div class="socials">   
<a href="https://github.com/cmsrimsson"><img src={Github} width="40"></img></a>
<a href="https://www.linkedin.com/in/chuda-rimal-318b33201/"><img src={LinkedIn} width="40"></img></a>
</div>
                    <p> Chuda Rimal is a Full-Stack web developer and he is mostly passionate on web coding. He is quite
                    expert in using coding and markup languages like:
                       Java • Spring • Thymeleaf • JavaScript • MVC • HTML •
                       CSS • TDD • Agile (Scrum) • Object Oriented Programming (OOP) •
                       JSON • REST APIs • Responsive Design / Mobile • Relational Databases
                       • Source Control / GitHub.
                       Chuda is a highly motivated, efficient and quick learner upskilling to switch careers
                       into software development. Consistently recognized for superior problem-solving
                       skills, strong work ethic and passion for serving others at Amazon.</p>
                    </div>

                    <div>
                    <img src={jason} height="300" width="300"></img>
                    <h3>Jason Mirwald</h3>
                    <div class="socials">   
<a href="https://github.com/jjmirwaldjr"><img src={Github} width="40"></img></a>
<a href="https://www.linkedin.com/in/jason-mirwald-jr-8694a1236/"><img src={LinkedIn} width="40"></img></a>
</div>
                    <p>Jason is a Military Veteran who served in the US navy as a Logistic Specialist. He was Honorably
                       Discharged. Jason spent the next few years working in the customer service industry and
                       developing management skills through working different part-time jobs. He now works at
                       Amazon. Also having technical experience, between graphics design and media editing. Jason is
                       now working on developing his coding skills through the We Can Code It boot camp. He completed
                       a few years at the art institute to learn many different skills, Graphics design, Media
                       Editing, 3D modeling and animations, 2D animation and Photoshop skills. Jason is now looking to
                       continue to expand his skills by picking up both back end and front end development. </p>
                       </div>

                       <div>
                    <img src={blankprofile} height="300" width="300"></img>
                    <h3>Jalyn Jenkins</h3>
                    <div class="socials">   
<a href="https://github.com/jalynjenkins"><img src={Github} width="40"></img></a>
<a href="https://www.linkedin.com/in/jalynjenkins"><img src={LinkedIn} width="40"></img></a>
</div>
                    <p>Jalyn is a fullstack software developer from Columbus, Ohio. He enjoys taking complex problems
                    and turning them into simple and beautiful digital designs and concepts. When not coding Jalyn
                    enjoys spending time with his family, watching F1 racing and keeping up to date on the latest
                    fashion news.</p>
                       </div>

                    <div>
                    <img src={zach} height="300" width="300"></img>
                    <h3>Zachary Martin</h3>
                    <div class="socials">   
<a href="https://github.com/zm102905"><img src={Github} width="40"></img></a>
<a href="https://www.linkedin.com/in/zachary-d-martin/"><img src={LinkedIn} width="40"></img></a>
</div>
                    <p>Zachary Martin is a Columbus-based full-stack software developer with a passion for travel, the
                    outdoors, gardening, and technology. His passion for technology started very early, when he took an
                    interest in gaming and computers. From there, his interest in hardware and software design grew.
                    Though his passion was in technology, it was his love for the outdoors and interest in life science
                    that drove him to pursue a Bachelors degree in Biology at Ohio University, which he completed in
                    2009. Zach is enthusiastic about growing and gaining new skills as a software developer and is
                    looking forward to a future in the field of IT!</p>
                        </div>
                </div>
                </div>
              


            );
        }


export default AboutUs;