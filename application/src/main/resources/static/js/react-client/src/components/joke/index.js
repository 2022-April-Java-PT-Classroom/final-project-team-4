import React from 'react';
import style from './style.module.scss';

const Joke = () => {
  let jokeArray = ["It can be hard to referee an argument between your feet. No matter how hard they try, they can't both be right.", 
  "I didn't think I'd like my orthopedic new shoes, but now I stand corrected.", 
  "It is important to stand on your left foot at midnight on New Year's Eve. This means that you start the New Year on the right foot.", 
  "You know that feeling when you have been sitting on your feet and they go to sleep? This is known as coma-toes.", 
  "What do dogs do when they hurt their feet? They visit a paw-diatrist.", 
  "Alligators can grow up to 22 feet. Usually they just grow four though.", 
  "Cows don't actually have feet, they have hooves. Do you know why this is? Because they lactose.", 
  "I opened a shop for plumbers to buy their shoes. Turns out the only thing that will sell is clogs.", 
  "What lies on the floor 100 feet in the air? A dead centipede.", 
  "How does an astronomer cut his toenails? Eclipse them!", 
  "I tried picking up the TV remote with my foot the other day, I guess my laziness really is getting out of hand.", 
  "A hopster is just a hipster who dropped something heavy on his foot.", 
  "The gingerbread man goes to the doctor and tells him he really hurt his foot. The doctor says 'Have you tried icing it?'", 
  "What do you call a frog with a broken foot? Un-hoppy!"];

  let randomJoke = Math.floor(Math.random() * 14);

  return (
    <div className={style.joke}>
      {jokeArray.map(paragraph => <p>{paragraph}</p>)}
    </div>
  );
}

export default Joke;