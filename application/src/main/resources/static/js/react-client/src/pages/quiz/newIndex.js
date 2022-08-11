import Question from "../../components/quiz/question";

constructor(props); {
  super(props);

  this.state = {
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {},
    result: ''
  };
}

const Quiz = () => {
  return (
    <div className={style.quiz}>
      <div className={style.header}>
        <h2>Foot Ailment Quiz</h2>
      </div>
      <Question content=""></Question>
    </div>
  );
}