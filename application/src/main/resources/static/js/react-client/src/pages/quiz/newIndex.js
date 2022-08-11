import Question from "../../components/quiz/question";

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