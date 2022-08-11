import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

function Question(props) {
  return (
    <h3 className={style.question}>{props.content}</h3>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;