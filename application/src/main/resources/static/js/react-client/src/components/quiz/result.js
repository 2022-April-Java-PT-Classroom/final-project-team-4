import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

function Result(props) {
  return (
    <div className={style.result}>
      <p className={style.diagnosis}>
        Your symptoms match closest with the ailment called <strong>{props.quizResult}</strong>.
      </p>
      <p>
        If you received an ailment as a result, you can check out the 
        Ailments link at the top of the page to learn more about that condition.
      </p>
      <p>
        If you received "Undetermined" as a result, that means we could not definitively 
        conclude a possible ailment you may have and/or you do not have an issue listed on 
        this website.
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