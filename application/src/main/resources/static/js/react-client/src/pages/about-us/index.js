import React from 'react';
import style from './style.module.scss';

const AboutUs = () => {
    return (

                <div className ={style.aboutUs}>
                    <h2>About Us</h2>
                    <div className={style.bios}>
                    <div>
                    <img src="images/Aisha.jpg" height="200" width="200"></img>
                    <h3>Aisha Bluem</h3>
                    <a href="https://github.com/acbluem">GitHub</a>
                    <a href="https://www.linkedin.com/in/aishabluem/">LinkedIn</a>
                    <p> Hi! My name is Aisha (phonetic spelling: ay-zhuh).
                       I am a junior full-stack software developer pursuing my passion in coding, reigniting the days of my youth
                        where I'd make front-end websites of my favorite cartoon/video game characters in the early and late 2000s.
                         I am a highly focused problem solver with excellent research and troubleshooting skills, committed to
                         breaking into the tech industry.</p>
                         </div>

                         <div>
                    <img src="images/Sade.jpg" height="200" width="200"></img>
                    <h3> Andera Fells</h3>
                    <a href="https://github.com/anderafells">GitHub</a>
                    <a href="https://www.linkedin.com/in/anderafells/">LinkedIn</a>
                    <p> I am a full stack developer currently located in Columbus, OH. My love for learning,and taking on challenging task has set me on the path of coding. I love to see projects come "alive". I am a dedicated team
                    player, but I also work well on my own. Outside of development I enjoy researching anything that catches
                    my attention from music,dance, how the mind works etc.. Most importantly I love spending time with my family!</p>
                    </div>

                   <div>
                   <img src="images/" height="200" width="200"></img>
                   <h3>C.M Rimal</h3>
                    <a href="https://github.com/cmsrimsson">GitHub</a>
                    <a href="https://www.linkedin.com/">LinkedIn</a>
                    <p>My passion for tech started as kid and hasn't stopped evolving. After starting my own Web Design & IT
                    business that focused on developing small businesses in my rural hometown. I took an opportunity to move to
                    the Harrisburg area and start at Amazon. Amazon has provided me the space to grow my career in Information
                    Technology and continually expand my knowledge. I am currently pursuing Full Stack Development through WCCI
                    and cannot wait to see what awaits.</p>
                    </div>

                    <div>
                    <img src="images/Jason.jpg" height="200" width="200"></img>
                    <h3>Jason Mirwald</h3>
                    <a href="https://github.com/jjmirwaldjr">GitHub</a>
                    <a href="https://www.linkedin.com/in/jason-mirwald-jr-8694a1236/">LinkedIn</a>
                    <p>I am a Military Veteran, Served in the US navy as a Logistic Specialist. I was Honorably
                       Discharged. I spent the next few years working in the customer service industry and
                       developing management skills through working different part-time jobs. Now I work at
                       Amazon. I also have technical experience, between Graphics design and media editing. I am
                       now working on developing my coding skills through the We Can Code It boot camp. I have
                       done a few years at the art institute to learn many different skills, Graphics design, Media
                       Editing, 3D modeling and animations, 2D animation and Photoshop skills. Now I'm looking to
                       continue to expand my skills by picking up both back end and front end development. </p>
                       </div>

                       <div>
                    <img src="images/" height="200" width="200"></img>
                    <h3>Jalyn Jenkins</h3>
                    <a href=  "https://github.com/jalynjenkins">GitHub</a>
                    <a href=  "https://www.linkedin.com/in/jalynjenkins">LinkedIn</a>
                    <p>Full stack developer.
                       Currently taking “WCCI Bootcamp” - completion date: August 2022.Previously, I usualy worked on
                       Client/Server Databases: coding, providing php-mysql soulutions and support for various
                       Information Systems. For 15 years I have designed, developed and maintained different systems,
                       specifically commercial websites, CRM(customer relationship management) and software. I have
                       advanced experience in code analysis, written by other developers, particularly in PHP.</p>
                       </div>

                    <div>
                    <img src="images/" height="200" width="200"></img>
                    <h3>Zachary Martin</h3>
                    <a href="https://github.com/zm102905">GitHub</a>
                    <a href="https://www.linkedin.com/in/zachary-d-martin/">LinkedIn</a>
                    <p>Zachary Martin is a Columbus-based full-stack software developer with a passion for travel, the outdoors,
                       gardening, and technology. His passion for technology started very early, when he took an interest in
                       gaming. In his early 20's, he built his first gaming pc, and computers for his father's law practice.
                       From there, his interest in hardware and software design grew. Though his passion was in technology,
                       it was his love for the outdoors and interest in life science that drove his to pursue a Bachelors degree
                       in Biology at Ohio University, which he completed in 2009. After years of working in healthcare, Zach
                       decided he wanted to turn his interest in technology into a career, and to leave his career in healthcare
                       behind! Zach is enthusiastic about growing and gaining new skills as a software developer and is
                       looking forward to a future in the field of IT!</p>
                        </div>
                </div>
                </div>


            );
        }


export default AboutUs;