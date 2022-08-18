import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';

function Result(props) {
  return (
    <div className={style.result}>
      <p className={style.diagnosis}>
        Your result is: 
        <br />
        <strong>{props.quizResult}</strong>
      </p>
      <p>
        For any ailment result, please head on over to the 
        <NavLink to={'/ailment'}> ailments</NavLink> page to learn more about it.
      </p>
      <p>
        If you received more than one ailment, then your answers resulted in a <strong>tie </strong>
        and is not as conclusive as a single result.
      </p>
      <p>
        As always, please consult your own doctor as this is not an official diagnosis.
      </p>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;