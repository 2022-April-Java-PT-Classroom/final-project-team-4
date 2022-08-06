import React from 'react';
import style from './style.module.scss';

const Quiz = () => {
addPoint = (ailment) => {
  ailments.ailment++;
}

const ailments = {
  "Plantar Fasciitis":0,
  "Diabetic Neuropathy":0, 
  "Supination":0, 
  "Pronation":0, 
  "Heel Spur":0, 
  "Hammertoe":0, 
  "Bunion":0, 
  "Morton Neuroma":0
}

const questions = [
  {
    question: "If you are experiencing constant pain, where on your feet is it located?",
    answers: {
      a: "Heel",
      b: "Arch",
      c: "Ankle",
      d: "Ball",
      e: "Toe or between toes",
      f: "Everywhere",
      g: "I am not in constant pain or the pain comes and goes"
    },
    points: [
      "Plantar Fasciitis", 
      "Diabetic Neuropathy", 
      "Supination", 
      "Pronation", 
      "Heel Spur", 
      "Hammertoe", 
      "Morton Neuroma"
    ]
  }, 
  {
    question: "If you are experiencing swelling, where on your feet is it located?",
    answers: {
      a: "Heel",
      b: "Joint",
      c: "Between toes",
      d: "I do not appear to have swelling"
    },
    points: [
      "Plantar Fasciitis", 
      "Diabetic Neuropathy", 
      "Supination", 
      "Heel Spur", 
      "Hammertoe", 
      "Bunion", 
      "Morton Neuroma"
    ]
  }, 
  {
    question: "Are you experiencing any numbness or tingling sensation in your feet?",
    answers: {
      a: "Yes",
      b: "No"
    },
    points: [
      "Plantar Fasciitis", 
      "Diabetic Neuropathy", 
      "Morton Neuroma"
    ]
  }, 
  {
    question: "Do you have any corns or calluses on your feet?",
    answers: {
      a: "Yes",
      b: "No"
    },
    points: [
      "Supination", 
      "Pronation", 
      "Hammertoe", 
      "Bunion"
    ]
  }, 
  {
    question: "Do you have a protrusion on your foot?",
    answers: {
      a: "Yes",
      b: "No"
    },
    points: [
      "Heel Spur",  
      "Bunion"
    ]
  }, 
  {
    question: "Do you have limited joint mobility?",
    answers: {
      a: "Yes",
      b: "No"
    },
    points: [
      "Hammertoe",  
      "Bunion"
    ]
  }, 
  {
    question: "Do you have a burning sensation in your feet?",
    answers: {
      a: "Yes",
      b: "No"
    },
    points: [
      "Diabetic Neuropathy",  
      "Heel Spur"
    ]
  }, 
  {
    question: "Are you experiencing any muscle weakness in your feet?",
    answers: {
      a: "Yes",
      b: "No"
    },
    points: [
      "Diabetic Neuropathy"
    ]
  }, 
  {
    question: "Do you have a tight Achilles tendon?",
    answers: {
      a: "Yes",
      b: "No"
    },
    points: [
      "Plantar Fasciitis"
    ]
  }, 
  {
    question: "Are your feet sensitive to touch?",
    answers: {
      a: "Yes",
      b: "No"
    },
    points: [
      "Diabetic Neuropathy"
    ]
  }, 
  {
    question: "Do you have flat feet?",
    answers: {
      a: "Yes",
      b: "No"
    },
    points: [
      "Pronation"
    ]
  }, 
  {
    question: "Do you experience a sensation of having a rock under your foot when standing?",
    answers: {
      a: "Yes",
      b: "No"
    },
    points: [
      "Morton Neuroma"
    ]
  }, 
  {
    question: "Do you have a sprain or shin splints?",
    answers: {
      a: "Yes",
      b: "No"
    },
    points: [
      "Supination"
    ]
  }
];

}

export default Quiz;