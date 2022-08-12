import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="result">
      Your symptoms match closest with the ailment called <strong>{props.quizResult}</strong>.
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;