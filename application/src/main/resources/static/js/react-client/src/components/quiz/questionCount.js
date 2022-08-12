import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

function QuestionCount(props) {
  return (
    <div className={style.questionCount}>
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired, 
  total: PropTypes.number.isRequired
};

export default QuestionCount;